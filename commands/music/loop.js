module.exports = ({
    name: "loop",
    code: `$log[Loop от $userTag]
    $if[$getTextSplitLength=1]
    $replaceText[$replaceText[$checkCondition[$loopQueue==true];true;Повтор плейлиста включён];false;Повтор плейлиста выключен]
    $else
    Для выполнения команды тебе нужно иметь роль диджея <:Sadge:816272029975052298>
    $elseIf[$hasRoles[$authorID;DJ]==true]
    $replaceText[$replaceText[$checkCondition[$loopQueue==true];true;Повтор плейлиста включён];false;Повтор плейлиста выключен]
    <@!$authorID> очистил плейлист
    $endElseIf
    $endif
    $textSplit[$usersInChannel[$voiceID;id;|];|]
    $onlyIf[$voiceID!=;Зайди в войс]
    $onlyIf[$voiceID==$voiceID[$clientID];Либо ты в другом войсе, либо тебя вообще в войсе нет <:Pepega:779683581844521000>]`
    });