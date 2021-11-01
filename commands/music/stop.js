module.exports = ({
    name: "stop",
    aliases: ['leave', 'fuckoff'],
    code: `
    Плейлист очищен, плеер остановлен
    $leaveVC $stopSong
    $onlyIf[$voiceID!=;Зайди в войс]
    $onlyIf[$voiceID==$voiceID[$clientID];Либо ты в другом войсе, либо тебя вообще в войсе нет]`
    });