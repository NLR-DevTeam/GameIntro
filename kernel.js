function huoZiLuanYinShuDoge(frame, dictionary) {
    let keywords = [];
    let res = frame;

    for (let typeName of Object.keys(dictionary)) {
        dictionary[typeName].forEach((keyword) => {
            keywords.push({ word: keyword, type: typeName });
        });
    }
    keywords.sort((a, b) => b.word.length - a.word.length);
    keywords.forEach((e) => {
        res = res.replaceAll(e.word, `$${e.type.toUpperCase()}`);
    });

    for (let typeName of Object.keys(dictionary)) {
        let i = 0;
        while (true) {
            i = res.indexOf(`$${typeName.toUpperCase()}`);
            if (i == -1) {
                break;
            }
            let aimNum = Math.floor(Math.random() * dictionary[typeName].length);
            res = res.substring(0, i) + dictionary[typeName][aimNum] + res.substring(i + typeName.length + 1);
            dictionary[typeName].splice(aimNum, 1);
        }
    }

    return res;
};