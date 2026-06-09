/* ===== Story Data: 42 scenes ===== */

// -- Prologue --
ST.scenes.p1 = { bg: "evening", text: "那是初夏的傍晚，我提着行李箱站在星月镇的站台上。\n因为父亲工作调动，我们搬到了这个被群山环绕的小镇。", next: "p2" };
ST.scenes.p2 = { bg: "evening", text: "晚风拂过站台，带来青草和野花的香气。\n这里的一切都那么陌生……却又莫名地令人心安。", next: "p3" };
ST.scenes.p3 = { bg: "street", text: "第二天，我作为转学生来到了星月镇立高中。\n这所百年历史的学校，古朴的木造校舍散发着岁月的痕迹。", next: "p4" };
ST.scenes.p4 = { bg: "classroom", text: "\"那么，新同学请自我介绍一下吧。\"\n班主任温和地催促着我。几十双眼睛盯着我，让我有些紧张。", next: "p5" };
ST.scenes.p5 = { bg: "classroom", text: "我简单介绍了几句，教室里响起了礼貌的掌声。\n就在这时——", next: "p6" };
ST.scenes.p6 = { bg: "classroom", char: "natsumi", expr: "happy", name: "星野 夏海", text: "\"喂喂！你就是转学生吧？我是班长星野夏海！有什么不懂的尽管问我！\"", next: "p7" };
ST.scenes.p7 = { bg: "classroom", char: "natsumi", expr: "normal", name: "星野 夏海", text: "眼前这个充满活力的女生，有着橙色长发和闪闪发亮的大眼睛。\n她的笑容仿佛能驱散一切阴霾。", next: "p8" };
ST.scenes.p8 = { bg: "classroom", char: "sakura", expr: "normal", name: "月宮 桜", text: "\"……月宮桜。よろしく。\"\n坐在窗边的少女淡淡地瞥了我一眼，又低头翻看手中的书。\n紫色长发如紫罗兰般柔顺，气质清冷优雅。", next: "p9" };
ST.scenes.p9 = { bg: "classroom", char: "kotori", expr: "embarrassed", name: "朝霧 ことり", text: "\"我、我是朝霧ことり……欢、欢迎你……\"\n她紧张地绞着手指，声音小得像蚊子叫。\n柔软的金色短发，怯生生的眼神，像是森林里受惊的小鹿。", next: "p10" };
ST.scenes.p10 = { bg: "evening", text: "就这样，我在星月镇的第一天结束了。\n我隐约感觉到，在这个小镇上将会发生许多难忘的故事……", next: "ch1" };

// -- Branch --
ST.scenes.ch1 = { bg: "classroom", text: "转学后的第一个周末，我打算出门熟悉一下小镇。\n这时，我遇到了……", choices: [
  { text: "在图书馆遇到月宮桜", next: "sr1" },
  { text: "在公园遇到朝霧ことり", next: "kt1" },
  { text: "在街上被星野夏海叫住", next: "nt1" }
]};

// -- Natsumi Route --
ST.scenes.nt1 = { bg: "street", char: "natsumi", expr: "happy", name: "星野 夏海", text: "\"啊——！太好了正好遇到你！\"", next: "nt2" };
ST.scenes.nt2 = { bg: "street", char: "natsumi", expr: "normal", name: "星野 夏海", text: "\"我今天要去河边钓鱼，一起去吧！一个人在镇上逛多无聊啊～\"", next: "nt3" };
ST.scenes.nt3 = { bg: "river", char: "natsumi", expr: "happy", name: "星野 夏海", text: "\"嘿嘿，这里是我最喜欢的地方！河水很清，能看见小鱼！\"", next: "nt4" };
ST.scenes.nt4 = { bg: "river", char: "natsumi", expr: "normal", name: "星野 夏海", text: "夏海脱下鞋子，把脚浸在河水里。阳光透过树叶洒在她橙色的头发上，像是跳动的火焰。", next: "nt5" };
ST.scenes.nt5 = { bg: "river", char: "natsumi", expr: "happy", name: "星野 夏海", text: "\"其实……我小时候也是转学来的。那时候一个朋友都没有，每天都好孤单。\"", next: "nt6" };
ST.scenes.nt6 = { bg: "river", char: "natsumi", expr: "normal", name: "星野 夏海", text: "\"所以看到你的第一天，我就想——一定要让你知道，星月镇是个很棒的地方！\"", next: "ntc" };
ST.scenes.ntc = { bg: "river", char: "natsumi", expr: "embarrassed", name: "星野 夏海", text: "她说着脸微微红了，低头假装在看水里的小鱼。\n我的心跳突然漏了一拍……", choices: [
  { text: "\"谢谢你，夏海。能遇到你真好。\"", next: "ntg" },
  { text: "\"星月镇确实很美呢。\"", next: "ntn" }
]};
ST.scenes.ntg = { bg: "river", char: "natsumi", expr: "embarrassed", name: "星野 夏海", text: "\"——！\"\n夏海猛地抬起头，脸瞬间红透了。", next: "ntg2" };
ST.scenes.ntg2 = { bg: "river", char: "natsumi", expr: "happy", name: "星野 夏海", text: "\"笨、笨蛋……突然说这种话……！\"\n她用力拍了一下水面，溅起的水花在阳光下闪闪发光。\n但我知道——她在笑。", next: "ntg3" };
ST.scenes.ntg3 = { bg: "evening", char: "natsumi", expr: "happy", name: "星野 夏海", text: "\"那、那个……明天也一起出来玩吧！我带你去看更好的地方！\"\n她伸出手，夕阳把她的轮廓勾勒成温暖的金色。", next: "endN" };
ST.scenes.ntn = { bg: "river", char: "natsumi", expr: "normal", name: "星野 夏海", text: "\"嗯……是啊。只要你愿意，这里也能成为你的归属。\"", next: "ntn2" };
ST.scenes.ntn2 = { bg: "evening", char: "natsumi", expr: "happy", name: "星野 夏海", text: "\"明天我再带你转转吧！镇上还有很多好地方呢！\"", next: "endNF" };

// -- Sakura Route --
ST.scenes.sr1 = { bg: "library", text: "我走进了镇上的图书馆。\n午后的阳光透过高窗洒落，空气中飘浮着尘埃和纸张特有的香气。", next: "sr2" };
ST.scenes.sr2 = { bg: "library", char: "sakura", expr: "normal", name: "月宮 桜", text: "\"……是你。\"\n书架另一侧，月宮桜正捧着一本厚重的书籍。她微微抬眸，紫色的眼眸闪过一丝意外。", next: "sr3" };
ST.scenes.sr3 = { bg: "library", char: "sakura", expr: "normal", name: "月宮 桜", text: "\"你也喜欢看书？\"", next: "sr4" };
ST.scenes.sr4 = { bg: "library", char: "sakura", expr: "happy", name: "月宮 桜", text: "我点了点头。她犹豫了一下，轻轻把自己正在看的书递了过来。\n\"那……要一起看吗？\"", next: "sr5" };
ST.scenes.sr5 = { bg: "library", char: "sakura", expr: "normal", name: "月宮 桜", text: "那是一本星空的图鉴。她指着其中一页，轻声说——\n\"这个小镇的名字，星月……说的是黄昏时分，天空同时出现星星和月亮的时刻。\"", next: "sr6" };
ST.scenes.sr6 = { bg: "library", char: "sakura", expr: "happy", name: "月宮 桜", text: "\"我从小就喜欢在这里看书。图书馆的二楼有个阳台，从那里能看到整个小镇的星空。\"", next: "src" };
ST.scenes.src = { bg: "library", char: "sakura", expr: "normal", name: "月宮 桜", text: "她平静地看着我，但紫色的眼眸深处似乎藏着某种期待。", choices: [
  { text: "\"能带我去看吗？\"", next: "srg" },
  { text: "\"你真的很喜欢星星呢。\"", next: "srn" }
]};
ST.scenes.srg = { bg: "night", char: "sakura", expr: "happy", name: "月宮 桜", text: "\"……嗯。跟我来。\"", next: "srg2" };
ST.scenes.srg2 = { bg: "night", char: "sakura", expr: "happy", name: "月宮 桜", text: "她带我到了图书馆二楼的阳台。\n满天繁星像撒在黑色天鹅绒上的钻石，银河横亘天际。", next: "srg3" };
ST.scenes.srg3 = { bg: "night", char: "sakura", expr: "normal", name: "月宮 桜", text: "\"你看……那颗最亮的是天狼星。那边是猎户座。\"", next: "srg4" };
ST.scenes.srg4 = { bg: "night", char: "sakura", expr: "happy", name: "月宮 桜", text: "\"……能有人陪我一起看星星，我很开心。\"\n她轻轻地说，声音几乎淹没在晚风里。但我还是听到了。", next: "endS" };
ST.scenes.srn = { bg: "library", char: "sakura", expr: "normal", name: "月宮 桜", text: "\"……嗯。它们永远在那里，不会改变。和人类不一样。\"", next: "srn2" };
ST.scenes.srn2 = { bg: "library", char: "sakura", expr: "happy", name: "月宮 桜", text: "\"如果你有空的话……下次也可以来图书馆。\"\n她轻声说完，又低头翻开了手中的书，嘴角却带着一丝若有若无的笑意。", next: "endSF" };

// -- Kotori Route --
ST.scenes.kt1 = { bg: "park", char: "kotori", expr: "surprised", name: "朝霧 ことり", text: "\"啊……！\"", next: "kt2" };
ST.scenes.kt2 = { bg: "park", char: "kotori", expr: "embarrassed", name: "朝霧 ことり", text: "公园的樱花树下，ことり正蹲在地上，小心翼翼地捧着一只受伤的小鸟。\n看到我走过来，她明显吃了一惊。", next: "kt3" };
ST.scenes.kt3 = { bg: "park", char: "kotori", expr: "sad", name: "朝霧 ことり", text: "\"它、它的翅膀好像受伤了……飞不起来了……\"\n她的眼眶有些湿润，看起来比小鸟还要无助。", next: "kt4" };
ST.scenes.kt4 = { bg: "park", char: "kotori", expr: "surprised", name: "朝霧 ことり", text: "\"要、要不……带去动物医院看看？\"我提议道。\n她眨了眨眼睛，点了点头。", next: "kt5" };
ST.scenes.kt5 = { bg: "street", char: "kotori", expr: "happy", name: "朝霧 ことり", text: "从医院出来后，小鸟得到了妥善的照顾。ことり的脸上终于露出了笑容。\n那是她第一次在我面前那样笑。", next: "kt6" };
ST.scenes.kt6 = { bg: "park", char: "kotori", expr: "normal", name: "朝霧 ことり", text: "\"那个……谢谢你帮忙。我很喜欢小动物……但是总是不太敢跟人说话……\"", next: "ktc" };
ST.scenes.ktc = { bg: "park", char: "kotori", expr: "embarrassed", name: "朝霧 ことり", text: "她低着头，脚尖轻轻蹭着地面。樱花的花瓣飘落在她的金发上……", choices: [
  { text: "\"ことり很温柔呢，和你说话很轻松。\"", next: "ktg" },
  { text: "\"下次也叫上我一起照顾小动物吧。\"", next: "ktn" }
]};
ST.scenes.ktg = { bg: "park", char: "kotori", expr: "surprised", name: "朝霧 ことり", text: "\"……！\"她猛地抬起头，眼睛睁得圆圆的。", next: "ktg2" };
ST.scenes.ktg2 = { bg: "park", char: "kotori", expr: "happy", name: "朝霧 ことり", text: "\"真、真的吗……？\"她的声音还是很小，但这一次——带着笑意。", next: "ktg3" };
ST.scenes.ktg3 = { bg: "park", char: "kotori", expr: "happy", name: "朝霧 ことり", text: "\"那、那个……我每天放学后都会来看这只小鸟……如果你也愿意的话……\"", next: "endK" };
ST.scenes.ktn = { bg: "park", char: "kotori", expr: "happy", name: "朝霧 ことり", text: "\"嗯……！一定……！\"", next: "ktn2" };
ST.scenes.ktn2 = { bg: "park", char: "kotori", expr: "normal", name: "朝霧 ことり", text: "\"那、那个……你愿意和我一起……照顾它们吗？\"\n她小心翼翼地问，眼神中带着期待。", next: "endKF" };

// -- Endings --
ST.scenes.endN = { bg: "evening", text: "——那天之后，我和夏海一起探索了星月镇的每个角落。\n山上的瞭望台、河边的秘密基地、夏日祭典的烟花……\n每一段回忆里，都有她灿烂的笑容。", isEnding: true, endingTitle: "夏海 End～橙色回憶～", endingText: "在这个小小的镇上，一个橙色的女孩教会了我——\n家不是一个地方，而是和谁在一起。" };
ST.scenes.endNF = { bg: "evening", text: "——夏海成了我在星月镇最好的朋友。\n在她的带领下，我逐渐融入了这里的生活。\n虽然我们的关系止步于友情，但那份温暖依然珍贵。", isEnding: true, endingTitle: "夏海 Route～友情の絆～", endingText: "有些故事不必走到终点，沿途的风景已经足够美好。" };
ST.scenes.endS = { bg: "night", text: "——从那以后，我经常去图书馆找桜。\n我们一起看星星，一起读书，一起沉默地度过安静的午后。\n在那些沉默中，我渐渐读懂了她。", isEnding: true, endingTitle: "桜 End～星空の約束～", endingText: "在星空下，一个紫罗兰般的女孩教会了我——\n真正的距离，不是话多话少，而是心与心的靠近。" };
ST.scenes.endSF = { bg: "night", text: "——图书馆成了我在星月镇最常去的地方。\n桜会默默帮我留好靠窗的座位，偶尔在我看书睡着时为我披上毯子。\n这种宁静的陪伴，也是一种美好。", isEnding: true, endingTitle: "桜 Route～静かな図書館～", endingText: "即使只是并排坐着看书，也是一种无声的对话。" };
ST.scenes.endK = { bg: "park", text: "——自那以后，我每天放学都和ことり一起去照顾小动物们。\n她渐渐地愿意和我说更多话了，虽然声音还是小小的。\n她笑起来的时候，像是春天的第一朵花。", isEnding: true, endingTitle: "ことり End～さくら色の約束～", endingText: "在樱花树下，一个胆小的女孩教会了我——\n温柔本身就是这世上最强大的力量。" };
ST.scenes.endKF = { bg: "park", text: "——ことり和我成为了照顾小动物的好搭档。\n她在我面前已经不再那么紧张了，虽然面对别人时还是会躲在我身后。\n就这样，我们之间建立了奇妙的信任。", isEnding: true, endingTitle: "ことり Route～小さな勇気～", endingText: "一步一步地，她正在学会与世界对话。能见证这个过程，我很荣幸。" };
