module.exports = ({
    name: "stop",
    aliases: ['leave', 'fuckoff'],
    code: `$log[Stop от $userTag]
    $if[$getTextSplitLength=1]
    $stopSong
    Плейлист очищен, плеер остановлен
    $else
    Для выполнения команды тебе нужно иметь роль диджея <:Sadge:816272029975052298>
    $elseIf[$hasRoles[$authorID;DJ]==true]
    $stopSong
    <@!$authorID> остановил(а) плейлист
    $endElseIf
    $endif
    $textSplit[$usersInChannel[$voiceID;id;|];|]
    $onlyIf[$voiceID!=;Зайди в войс]
    $onlyIf[$voiceID==$voiceID[$clientID];Либо ты в другом войсе, либо тебя вообще в войсе нет <:Pepega:779683581844521000>]`
    });