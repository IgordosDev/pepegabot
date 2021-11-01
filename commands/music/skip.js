module.exports = ({
    name: "skip",
    code: `
    Трек скипнут
    $skipSong
    $onlyIf[$queueLength>1;В очереди ничего нет]
    $onlyIf[$voiceID!=;Зайди в войс]
    $onlyIf[$voiceID==$voiceID[$clientID];Либо ты в другом войсе, либо тебя вообще в войсе нет]`
    });