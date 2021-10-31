module.exports = ({
    name: "skip",
    code: `
    Трек скипнут
    $skipSong
    $onlyIf[$voiceID!=;Зайди в войс]
    $onlyIf[$voiceID==$voiceID[$clientID];Либо ты в другом войсе, либо тебя вообще в войсе нет <:Pepega:779683581844521000>]`
    });