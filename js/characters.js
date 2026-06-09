/* ===== Character Data ===== */
const CH = {
  natsumi: { name: "星野 夏海", color: "#FF6B6B", hc: "#FF7F50", ec: "#4ECDC4" },
  sakura:  { name: "月宮 桜",   color: "#7B68EE", hc: "#9370DB", ec: "#87CEEB" },
  kotori:  { name: "朝霧 ことり", color: "#FFB6C1", hc: "#F0E68C", ec: "#98FB98" }
};

/* ===== Generate SVG character portrait ===== */
function genSVG(id, expr) {
  var c = CH[id];
  if (!c) return "";
  var x = 125;

  // Eyes
  var eyes;
  if (expr === "happy") {
    eyes =
      '<path d="M'+(x-38)+',217Q'+(x-28)+',212'+(x-18)+',217" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/>'
      + '<path d="M'+(x+18)+',217Q'+(x+28)+',212'+(x+38)+',217" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/>';
  } else if (expr === "sad" || expr === "embarrassed") {
    eyes =
      '<ellipse cx="'+(x-28)+'" cy="220" rx="11" ry="13" fill="#fff" stroke="#333" stroke-width="1.5"/>'
      + '<ellipse cx="'+(x+28)+'" cy="220" rx="11" ry="13" fill="#fff" stroke="#333" stroke-width="1.5"/>'
      + '<ellipse cx="'+(x-28)+'" cy="222" rx="7" ry="9" fill="'+c.ec+'"/>'
      + '<ellipse cx="'+(x+28)+'" cy="222" rx="7" ry="9" fill="'+c.ec+'"/>'
      + '<ellipse cx="'+(x-27)+'" cy="218" rx="3" ry="3" fill="#fff" opacity="0.8"/>'
      + '<ellipse cx="'+(x+29)+'" cy="218" rx="3" ry="3" fill="#fff" opacity="0.8"/>';
  } else {
    eyes =
      '<ellipse cx="'+(x-28)+'" cy="220" rx="10" ry="12" fill="#fff" stroke="#333" stroke-width="1.5"/>'
      + '<ellipse cx="'+(x+28)+'" cy="220" rx="10" ry="12" fill="#fff" stroke="#333" stroke-width="1.5"/>'
      + '<ellipse cx="'+(x-28)+'" cy="222" rx="6.5" ry="8" fill="'+c.ec+'"/>'
      + '<ellipse cx="'+(x+28)+'" cy="222" rx="6.5" ry="8" fill="'+c.ec+'"/>'
      + '<ellipse cx="'+(x-27)+'" cy="218" rx="3" ry="3" fill="#fff" opacity="0.8"/>'
      + '<ellipse cx="'+(x+29)+'" cy="218" rx="3" ry="3" fill="#fff" opacity="0.8"/>';
  }

  // Mouth
  var mouth;
  if (expr === "happy") {
    mouth = '<path d="M'+(x-15)+',240Q'+x+',250'+(x+15)+',240" fill="none" stroke="#C66" stroke-width="2.5" stroke-linecap="round"/>';
  } else if (expr === "sad") {
    mouth = '<path d="M'+(x-12)+',242Q'+x+',235'+(x+12)+',242" fill="none" stroke="#C66" stroke-width="2" stroke-linecap="round"/>';
  } else if (expr === "surprised") {
    mouth = '<ellipse cx="'+x+'" cy="239" rx="7" ry="8" fill="#333"/>';
  } else {
    mouth = '<path d="M'+(x-10)+',239Q'+x+',243'+(x+10)+',239" fill="none" stroke="#C66" stroke-width="2" stroke-linecap="round"/>';
  }

  var hc = c.hc;
  return '<svg viewBox="0 0 250 380">'
    + '<defs><linearGradient id="hG"><stop offset="0%" stop-color="'+hc+'"/><stop offset="100%" stop-color="'+hc+'80"/></linearGradient>'
    + '<linearGradient id="sG"><stop offset="0%" stop-color="#FFF5E6"/><stop offset="100%" stop-color="#FDEBD0"/></linearGradient></defs>'
    + '<ellipse cx="'+x+'" cy="207" rx="70" ry="80" fill="url(#sG)"/>'
    + '<path d="M'+(x-68)+',195Q'+(x-75)+',140'+(x-50)+',100Q'+(x-25)+',65'+x+',60Q'+(x+25)+',65'+(x+50)+',100Q'+(x+75)+',140'+(x+68)+',195Q'+(x+70)+',230'+(x+60)+',265L'+(x+45)+',260Q'+(x+55)+',230'+(x+55)+',200Q'+(x+55)+',155'+(x+30)+',120Q'+(x+15)+',100'+x+',95Q'+(x-15)+',100'+(x-30)+',120Q'+(x-55)+',155'+(x-55)+',200Q'+(x-55)+',230'+(x-45)+',260L'+(x-60)+',265Q'+(x-70)+',230'+(x-68)+',195Z" fill="url(#hG)"/>'
    + '<path d="M'+(x-55)+',190Q'+(x-50)+',140'+(x-25)+',110Q'+(x-10)+',95'+(x+5)+',90Q'+(x-5)+',100'+(x-10)+',115Q'+(x-15)+',130'+(x-10)+',145L'+(x-5)+',130Q'+(x+5)+',110'+(x+20)+',100Q'+(x+30)+',95'+(x+40)+',92Q'+(x+30)+',105'+(x+25)+',120Q'+(x+20)+',135'+(x+25)+',150L'+(x+30)+',135Q'+(x+45)+',115'+(x+55)+',110Q'+(x+60)+',120'+(x+55)+',140Q'+(x+48)+',160'+(x+40)+',180Q'+(x+35)+',195'+(x+30)+',210L'+(x+15)+',200Q'+(x+10)+',175'+(x+5)+',160Q'+x+',175'+(x-5)+',200L'+(x-20)+',190Q'+(x-25)+',170'+(x-30)+',155Q'+(x-35)+',165'+(x-40)+',185L'+(x-50)+',195Z" fill="url(#hG)"/>'
    + '<path d="M'+(x-65)+',200Q'+(x-68)+',230'+(x-60)+',265Q'+(x-55)+',275'+(x-45)+',270Q'+(x-52)+',250'+(x-50)+',220Q'+(x-48)+',195'+(x-52)+',180Z" fill="url(#hG)"/>'
    + '<path d="M'+(x+65)+',200Q'+(x+68)+',230'+(x+60)+',265Q'+(x+55)+',275'+(x+45)+',270Q'+(x+52)+',250'+(x+50)+',220Q'+(x+48)+',195'+(x+52)+',180Z" fill="url(#hG)"/>'
    + eyes + mouth
    + '<ellipse cx="'+x+'" cy="228" rx="2" ry="3" fill="#E8D5B7" opacity="0.5"/>'
    + '</svg>';
}

/* ===== Character image file mapping ===== */
var charImgMap = {
  natsumi: "夏海",
  sakura:  "樱",
  kotori:  "朝雾小鸟"
};

/* ===== Create character element (image or SVG fallback) ===== */
function createCharacterEl(id, expr) {
  var div = document.createElement("div");
  div.className = "character-sprite center";
  var name = charImgMap[id] || id;
  var paths = [
    "assets/char/" + id + "_" + (expr || "normal") + ".png",
    "assets/char/" + id + ".png",
    "assets/char/" + name + ".png"
  ];
  tryLoadImg(paths, 0, div, id, expr || "normal");
  return div;
}

function tryLoadImg(paths, i, div, id, expr) {
  if (i >= paths.length) {
    div.innerHTML = genSVG(id, expr);
    return;
  }
  var img = new Image();
  img.onload = function() {
    div.innerHTML = "";
    div.appendChild(img);
  };
  img.onerror = function() {
    tryLoadImg(paths, i + 1, div, id, expr);
  };
  img.src = paths[i];
}
