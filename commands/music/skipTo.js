module.exports = ({
    name: "skipTo",
    code: `$log[SkipTo от $userTag]
    $if[$getTextSplitLength=1]
    $skipTo[$noMentionMessage[1]]
    Трек скипнут
    $elseIf[$queueLength<=$noMentionMessage[1]]
    Это больше, чем очередь. Проще просто остановить через команду \`p!stop\` <:Okayge:816271601162649610>
    $endelseIf
    $else
    Для выполнения команды тебе нужно иметь роль диджея <:Sadge:816272029975052298>
    $elseIf[$hasRoles[$authorID;DJ]==true]
    $skipTo[$noMentionMessage[1]]
    <@!$authorID> скипнул(а) трек
    $endelseIf
    $elseIf[$queueLength<=$noMentionMessage[1]]
    Это больше, чем очередь. Проще просто остановить через команду \`p!stop\` <:Okayge:816271601162649610>
    $endelseIf
    $endif
    $textSplit[$usersInChannel[$voiceID;id;|];|]
    $onlyIf[$voiceID!=;Зайди в войс]
    $onlyIf[$voiceID==$voiceID[$clientID];Либо ты в другом войсе, либо тебя вообще в войсе нет <:Pepega:779683581844521000>]`
    });