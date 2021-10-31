module.exports = ({
    name: "stop",
    aliases: ['leave', 'fuckoff'],
    code: `
    Плейлист очищен, плеер остановлен
    $stopSong
    $onlyIf[$voiceID!=;Зайди в войс]
    $onlyIf[$voiceID==$voiceID[$clientID];Либо ты в другом войсе, либо тебя вообще в войсе нет <:Pepega:779683581844521000>]`
    });