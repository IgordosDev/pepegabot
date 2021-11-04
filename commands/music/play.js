module.exports = {
      name: "play",
      aliases:['p', 'плей', 'playSong'],
      code: `
    **$username** добавил в очередь **$playSong[$noMentionMessage;2m;yes;Произошла какая-то ошибка]**
    $argsCheck[>1;Введи название песни, или ссылку на неё]
    $onlyIf[$voiceID!=;Может сначала ты зайдёшь в войс]
    `} /*
    $if[$checkContains[$noMentionMessage[1];youtu.be;youtube.com]==true]
    **$username** добавил в очередь **$playSong[$noMentionMessage[1];2m;yes;Произошла какая-то ошибка]**
    $else
    **$username** добавил в очередь **$playSong[$noMentionMessage;2m;yes;Произошла какая-то ошибка]**
    $elseIf[$checkContains[$noMentionMessage[1];spotify;]==true]
    **$username** добавил в очередь **$playSpotify[$noMentionMessage[1];name;no;Произошла ошибка]**
    $elseIf[$checkContains[$noMentionMessage[1];soundcloud;]==true]
    **$username** добавил в очередь **$playSoundCloud[$noMentionMessage[1];${process.env.SOUNDCLOUD};2m;yes;no;Произошла ошибка при воспроизведении]
    $endelseIf
    $endif
    */ //когда-нибудь сделаю