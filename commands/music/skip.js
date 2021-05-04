module.exports = ({
    name: "skip",
    code: `$log[Skip от $userTag]
    $if[$getTextSplitLength=1]
    $skipSong
    Трек скипнут
    $else
    Для выполнения команды тебе нужно иметь роль диджея <:Sadge:816272029975052298>
    $elseIf[$hasRoles[$authorID;DJ]==true]
    $skipSong
    <@!$authorID> скипнул(а) трек
    $endElseIf
    $endif
    $textSplit[$usersInChannel[$voiceID;id;|];|]
    $onlyIf[$voiceID!=;Зайди в войс]
    $onlyIf[$voiceID==$voiceID[$clientID];Либо ты в другом войсе, либо тебя вообще в войсе нет <:Pepega:779683581844521000>]`
    });