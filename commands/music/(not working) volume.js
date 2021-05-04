// module.exports = ({
    name: "volume",
    aliases: ['vol'],
    code: `$log[Volume set to $noMentionMessage[1] by $userTag]
    $if[$getTextSplitLength>1]
        $if[$noMentionMessage[1]<=200]
        $volume[$noMentionMessage[1]]
        Громкость установлена в $noMentionMessage[1]%
        $else
        Максимальная громкость - 200%, не больше. <:Okayga:755125944498520255>
Ну можешь юзануть команду \`p!bassboost\`, хз
        $endif
    Для выполнения команды тебе нужно иметь роль диджея <:Sadge:816272029975052298>
    $elseIf[$hasRoles[$authorID;DJ]==true]
         $if[$noMentionMessage[1]<=200]
         $volume[$noMentionMessage[1]]
         <@!$authorID> поставил(а) громкость в $noMentionMessage[1]%
         $else
         Максимальная громкость - 200%, не больше. <:Okayga:755125944498520255>
Ну можешь юзануть команду \`p!bassboost\`, хз
         $endif
    $endelseIf
    $endif
    $textSplit[$usersInChannel[$voiceID;id;|];|]
    $onlyIf[$voiceID!=;Зайди в войс]
    $onlyIf[$voiceID==$voiceID[$clientID];Либо ты в другом войсе, либо тебя вообще в войсе нет <:Pepega:779683581844521000>]`
    });