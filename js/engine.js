/* ===== Game State ===== */
var game = {
  sc: null,
  inC: false,
  ty: null,
  isT: false,
  ct: "",
  sv: JSON.parse(localStorage.getItem("vns") || "{}"),
  backlog: [],
  uiHidden: false
};
var ST = { scenes: {} };

/* ===== Transition Effect ===== */
function tr(cb) {
  var o = document.getElementById("transition-overlay");
  o.classList.add("active");
  setTimeout(function() {
    cb();
    setTimeout(function() { o.classList.remove("active"); }, 100);
  }, 600);
}

/* ===== Set Background (image or gradient) ===== */
var bgImgMap = {
  street: "night",
  river: "evening"
};

function setBG(id) {
  var layer = document.getElementById("bg-layer");
  layer.innerHTML = "";
  var d = document.createElement("div");
  d.className = "bg bg-" + id + " bg-enter";

  // Try loading background image, gradient CSS serves as fallback
  var imgId = bgImgMap[id] || id;
  var imgPath = "assets/bg/" + imgId + ".png";
  var img = new Image();
  img.onload = function() {
    d.style.backgroundImage = "url('" + imgPath + "')";
    d.style.backgroundSize = "cover";
    d.style.backgroundPosition = "center";
  };
  img.src = imgPath;

  layer.appendChild(d);

  // Sakura particles for park scene
  spawnSakura(id === "park");
}

/* ===== Sakura Particle Effect ===== */
function spawnSakura(active) {
  if (!active) return;
  var layer = document.getElementById("bg-layer");
  for (var i = 0; i < 18; i++) {
    (function(idx) {
      var p = document.createElement("div");
      p.className = "sakura-particle";
      var size = 6 + Math.random() * 10;
      p.style.width = size + "px";
      p.style.height = size + "px";
      p.style.left = Math.random() * 100 + "%";
      p.style.top = "-20px";
      p.style.animationDuration = (5 + Math.random() * 8) + "s";
      p.style.animationDelay = (Math.random() * 10) + "s";
      p.style.opacity = 0.4 + Math.random() * 0.5;
      layer.appendChild(p);
    })(i);
  }
}

/* ===== Set Character ===== */
function setCH(id, expr) {
  var l = document.getElementById("character-layer");
  l.innerHTML = "";
  if (!id) return;
  var d = createCharacterEl(id, expr || "normal");
  l.appendChild(d);
  requestAnimationFrame(function() { d.classList.add("active"); });
}

/* ===== Typewriter Text ===== */
function showTxt(n, t) {
  var tb = document.getElementById("text-box");
  var nb = document.getElementById("name-box");
  var dg = document.getElementById("dialogue-text");
  tb.classList.remove("hidden");
  nb.textContent = n || "旁白";
  dg.textContent = "";
  // Add to backlog
  game.backlog.push({ name: n || "旁白", text: t });
  game.ct = t;
  game.isT = true;
  var i = 0;
  clearInterval(game.ty);
  game.ty = setInterval(function() {
    if (i < t.length) { dg.textContent += t[i]; i++; }
    else { clearInterval(game.ty); game.isT = false; }
  }, 35);
}

/* ===== Advance (click/key) ===== */
function advance() {
  if (game.inC) return;
  if (game.isT) {
    clearInterval(game.ty); game.isT = false;
    document.getElementById("dialogue-text").textContent = game.ct;
    return;
  }
  var s = game.sc;
  if (!s) return;
  if (s.choices) { showChoices(s.choices); return; }
  if (s.next) loadSc(s.next);
}

/* ===== Show Choice Buttons ===== */
function showChoices(c) {
  game.inC = true;
  document.getElementById("text-box").classList.add("hidden");
  var a = document.getElementById("choice-area");
  a.innerHTML = "";
  for (var i = 0; i < c.length; i++) {
    (function(idx) {
      var b = document.createElement("button");
      b.className = "choice-btn";
      b.textContent = c[idx].text;
      b.onclick = function() {
        game.inC = false;
        a.innerHTML = "";
        loadSc(c[idx].next);
      };
      a.appendChild(b);
    })(i);
  }
}

/* ===== Load Scene ===== */
function loadSc(id) {
  var s = ST.scenes[id];
  if (!s) return;

  if (s.isEnding) {
    game.sc = s;
    tr(function() {
      setBG(s.bg);
      document.getElementById("character-layer").innerHTML = "";
      document.getElementById("text-box").classList.add("hidden");
      game.inC = false;
      document.getElementById("choice-area").innerHTML = "";
      var ov = document.getElementById("ending-overlay");
      document.getElementById("ending-title").textContent = s.endingTitle || "～END～";
      document.getElementById("ending-text").textContent = s.endingText || "";
      ov.style.display = "flex";
    });
    return;
  }

  game.sc = s;
  tr(function() {
    setBG(s.bg);
    if (s.char) { setCH(s.char, s.expr || "normal"); }
    else { document.getElementById("character-layer").innerHTML = ""; }
    showTxt(s.name || null, s.text);
  });
}

/* ===== Get Current Scene ID ===== */
function getScId() {
  for (var id in ST.scenes) {
    if (ST.scenes[id] === game.sc) return id;
  }
  return "p1";
}

/* ===== Save / Load Menu ===== */
function openSaveLoad(m) {
  if (game.sc && game.sc.isEnding) return;
  var mn = document.getElementById("save-load-menu");
  document.getElementById("sl-title").textContent = m === "save" ? "💾 存档" : "📂 读档";
  mn.style.display = "flex";
  var sl = document.getElementById("sl-slots");
  sl.innerHTML = "";
  for (var i = 1; i <= 6; i++) {
    var sd = game.sv[i];
    var b = document.createElement("button");
    b.className = "slot-btn";
    if (sd) {
      b.innerHTML = "<div>存档" + i + "</div><div>" + sd.time + "</div>";
    } else {
      b.innerHTML = "<div>存档" + i + "</div><div>─ 空 ─</div>";
    }
    b.onclick = (function(idx, sd2) {
      return function() {
        if (m === "save") {
          game.sv[idx] = { scene: getScId(), time: new Date().toLocaleString("zh-CN") };
          localStorage.setItem("vns", JSON.stringify(game.sv));
          closeSaveLoad();
        } else if (sd2) {
          closeSaveLoad();
          loadSc(sd2.scene);
        }
      };
    })(i, sd);
    sl.appendChild(b);
  }
}

function closeSaveLoad() {
  document.getElementById("save-load-menu").style.display = "none";
}

/* ===== Start / Continue / Back to Title ===== */
function startGame() {
  document.getElementById("title-screen").style.display = "none";
  game.sv = JSON.parse(localStorage.getItem("vns") || "{}");
  game.sc = null;
  game.inC = false;
  game.backlog = [];
  document.getElementById("choice-area").innerHTML = "";
  setTimeout(function() { loadSc("p1"); }, 500);
}

function continueGame() {
  var svs = JSON.parse(localStorage.getItem("vns") || "{}");
  var ks = Object.keys(svs);
  if (ks.length == 0) { alert("没有找到存档"); return; }
  var lk = ks.sort().reverse()[0];
  var sv = svs[lk];
  if (sv) {
    document.getElementById("title-screen").style.display = "none";
    game.sv = svs;
    setTimeout(function() { loadSc(sv.scene); }, 500);
  }
}

function backToTitle() {
  document.getElementById("ending-overlay").style.display = "none";
  document.getElementById("title-screen").style.display = "flex";
  game.sc = null;
  game.inC = false;
  game.backlog = [];
  document.getElementById("choice-area").innerHTML = "";
  document.getElementById("character-layer").innerHTML = "";
  document.getElementById("bg-layer").innerHTML = "";
  document.getElementById("text-box").classList.add("hidden");
}

/* ===== Backlog (Dialogue History) ===== */
function openBacklog() {
  var ov = document.getElementById("backlog-overlay");
  var list = document.getElementById("backlog-list");
  list.innerHTML = "";
  for (var i = 0; i < game.backlog.length; i++) {
    var e = game.backlog[i];
    var div = document.createElement("div");
    div.className = "backlog-entry";
    div.innerHTML = '<span class="bl-name">' + e.name + '</span>'
      + '<div class="bl-text">' + e.text.replace(/\n/g, '<br>') + '</div>';
    list.appendChild(div);
  }
  ov.classList.add("open");
  list.scrollTop = list.scrollHeight;
}

function closeBacklog() {
  document.getElementById("backlog-overlay").classList.remove("open");
}

/* ===== Hide UI Mode ===== */
function toggleHideUI() {
  game.uiHidden = !game.uiHidden;
  document.getElementById("game").classList.toggle("hide-ui", game.uiHidden);
}

/* ===== Keyboard Shortcuts ===== */
document.addEventListener("keydown", function(e) {
  // Backlog open — close on Esc/Backspace
  if (document.getElementById("backlog-overlay").classList.contains("open")) {
    if (e.key === "Escape" || e.key === "Backspace") { closeBacklog(); e.preventDefault(); }
    return;
  }
  // Save/Load open — close on Esc
  if (document.getElementById("save-load-menu").style.display === "flex") {
    if (e.key === "Escape") { closeSaveLoad(); }
    return;
  }
  if ((e.key == " " || e.key == "Enter") && !game.isT) { advance(); e.preventDefault(); }
  if (e.key === "Backspace") { openBacklog(); e.preventDefault(); }
  if (e.key === "h" || e.key === "H") { toggleHideUI(); }
  if (e.key == "Escape") { if (game.uiHidden) toggleHideUI(); }
  if (e.key == "s" && e.ctrlKey) { e.preventDefault(); openSaveLoad("save"); }
  if (e.key == "l" && e.ctrlKey) { e.preventDefault(); openSaveLoad("load"); }
});
