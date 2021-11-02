module.exports = ({
    name: "skipTo",
    code: `
    $if[$queueLength<=$noMentionMessage[1]]
    Это больше, чем очередь. Проще просто остановить через команду \`p!stop\`
    $else
    Трек(и) скипнут(ы)
    $skipTo[$noMentionMessage[1]]
    $endif
    $onlyIf[$queueLength>1;В очереди меньше 2 треков, просто скипни через \`p!skip\`]
    $onlyIf[$voiceID!=;Зайди в войс]
    $onlyIf[$voiceID==$voiceID[$clientID];Либо ты в другом войсе, либо тебя вообще в войсе нет]`
    });