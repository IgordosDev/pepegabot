module.exports = {
      name: "play",
      aliases:['p', 'плей'],
      code: `$log[Play от $userTag: $message] $replaceText[$replaceText[$pruneMusic;true;;1];false;;1]
    **$username** добавил в очередь **$playSong[$noMentionMessage;2m;yes;Произошла какая-то ошибка <:OMEGALULiguess:797922459180466186>]**
    $argsCheck[>1;Введи название песни, или ссылку на неё <:Okayge:816271601162649610>]
    $onlyIf[$voiceID!=;Может сначала ты зайдёшь в войс <:Okayge:816271601162649610><a:TeaTime:782163966168137728>]
    `
}