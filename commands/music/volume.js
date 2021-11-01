module.exports = ({
    name: "volume",
    aliases: ['vol'],
    code: `
        $if[$noMentionMessage[1]<=200]
        $volume[$noMentionMessage[1]]
        Громкость установлена в $noMentionMessage[1]%
        $else
        Максимальная громкость - 200%, не больше.
Можно попробовать использовать команду \`p!bassboost\`.
        $endif
    $onlyIf[$voiceID!=;Зайди в войс]
    $onlyIf[$voiceID==$voiceID[$clientID];Либо ты в другом войсе, либо тебя вообще в войсе нет]`
    });