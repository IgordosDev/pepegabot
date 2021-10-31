module.exports = ({
    name: "loop",
    code: `
    $replaceText[$replaceText[$loopQueue;true;Повтор плейлиста включён;1];false;Повтор плейлиста выключен;1]
    $onlyIf[$voiceID!=;Зайди в войс]
    $onlyIf[$voiceID==$voiceID[$clientID];Либо ты в другом войсе, либо тебя вообще в войсе нет]`
    });