let gameIntroDictionary = [{
    object: ["原神", "一款全新开放世界冒险游戏", "神之眼", "元素之力", "旅行", "真相"],
    place: ["提瓦特", "幻想世界"],
    action: ["自主研发", "导引", "扮演", "击败", "选中", "授予", "邂逅", "发掘", "找回"],
    person: ["米哈游", "亲人", "神", "人", "旅行者", "同伴们", "强敌", "神秘角色"],
    adjective: ["性格各异、能力独特的", "失散的", "自由的"]
}, {
    object: ["一桩桩看似无关的案件", "重重迷雾", "善与恶的界限", "事件的真相", "幕后黑手", "世间常理", "千丝万缕的联系", "委托", "不为人知的阴谋", "关于未来的一切美好愿景", "最无力的辩白", "言语"],
    place: [],
    action: ["掩盖", "颠覆", "解决", "意外卷入", "撕碎", "隐藏"],
    person: ["一个对未来抱有美好向往的新人律师"],
    adjective: ["模糊"]
}, {
    object: ["扣人心弦的崩坏系列故事", "沉浸感十足的关卡剧情", "豪华的声优阵容", "前所未有的代入感", "3D全视角卡通渲染", "无限可能的分支连招", "酣畅淋漓的超强打击感", "次世代动作游戏", "国创动作游戏之魂", "崩坏3", "羁绊", "你战斗的力量"],
    place: [],
    action: ["点燃", "打造", "感受", "成为"],
    person: ["个性鲜明的女武神们"],
    adjective: []
}, {
    object: ["星神", "世界", "痕迹", "星穹列车", "某位「星神」曾经所行之途", "新的伙伴", "群星", "现实", "星辰", "新的文明", "新的冒险"],
    place: ["银河"],
    action: ["造就", "抹消", "留下", "穿越", "乘坐", "前进", "探索", "展开"],
    person: ["一名特殊的旅客", "继承「开拓」意志的同伴"],
    adjective: ["光怪陆离的", "无数"]
}];
let gameIntroFrame = [
    "《原神》是由米哈游自主研发的一款全新开放世界冒险游戏。游戏发生在一个被称作「提瓦特」的幻想世界，在这里，被神选中的人将被授予「神之眼」，导引元素之力。你将扮演一位名为「旅行者」的神秘角色，在自由的旅行中邂逅性格各异、能力独特的同伴们，和他们一起击败强敌，找回失散的亲人。——同时，逐步发掘「原神」的真相。",
    "你，还只是一个对未来抱有美好向往的新人律师。在解决委托的过程中，被意外卷入不为人知的阴谋。一桩桩看似无关的案件，却隐藏着千丝万缕的联系。幕后黑手将世间常理颠覆，彻底撕碎关于未来的一切美好愿景。当事件的真相被重重迷雾所掩盖，当善与恶的界限变得模糊，当言语沦为最无力的辩白……",
    "《崩坏3》——点燃国创动作游戏之魂！3D全视角卡通渲染、无限可能的分支连招，酣畅淋漓的超强打击感……打造次世代动作游戏！扣人心弦的崩坏系列故事、沉浸感十足的关卡剧情、豪华的声优阵容，更会让你感受到前所未有的代入感。与个性鲜明的女武神们朝夕相处，她们的羁绊将会成为你战斗的力量！",
    "这片银河中有名为「星神」的存在，祂们造就现实，抹消星辰，在无数「世界」中留下祂们的痕迹。你——一名特殊的旅客，将与继承「开拓」意志的同伴一起，乘坐星穹列车穿越银河，沿着某位「星神」曾经所行之途前进。你将由此探索新的文明，结识新的伙伴，在无数光怪陆离的「世界」与「世界」之间展开新的冒险。所有你想知道的，都将在群星中找到答案。"
];

let printToDOM = (text, dom) => new Promise((resolve) => {
    let i = -1;
    let func = function () {
        if (["。", "！"].includes(text[i])) {
            dom.classList.remove("untyping");
            dom.innerText += "\n\n";
        }
        i += 1;
        dom.innerText += text[i];

        if (i == text.length - 1) {
            dom.classList.add("untyping");
            resolve();
            return;
        }
        if (["。", "！"].includes(text[i])) {
            dom.classList.add("untyping");
            setTimeout(func, 1000);
            return;
        }
        setTimeout(func, 50);
    };
    dom.classList.add("untyping");
    setTimeout(func, 3000);
});

let frame = gameIntroFrame[Math.floor(Math.random() * gameIntroFrame.length)];
let dictionary = {};
for (typeName of Object.keys(gameIntroDictionary[0])) {
    dictionary[typeName] = [];
    gameIntroDictionary.forEach((dicObj) => {
        dictionary[typeName] = dictionary[typeName].concat(dicObj[typeName]);
    });
}

window.addEventListener("load", () => {
    printToDOM(huoZiLuanYinShuDoge(frame, dictionary), document.getElementById("main"));
});