module.exports = [{
      name: "lyrics",
      code: `$log[lyrics от $userTag: $songInfo[title]]
      $title[$jsonRequest[https://some-random-api.ml/lyrics?title=$replaceText[$songInfo[title]; ; %20;-1];title;название песни не найдено]]
$description[$jsonRequest[https://some-random-api.ml/lyrics?title=$replaceText[$songInfo[title]; ; %20;-1];lyrics;для этого трека текст не найден.]]
$suppressErrors[произошли технические шоколадки, попробуй потом]
$color[RANDOM]
$botTyping
$onlyIf[$voiceID!=;]
$argsCheck[0;]
      `}, {
name: "lyrics",
code:`$log[lyrics от $userTag: $message]
$title[$jsonRequest[https://some-random-api.ml/lyrics?title=$replaceText[$message; ; %20;-1];title;название песни не найдено]]
$description[$jsonRequest[https://some-random-api.ml/lyrics?title=$replaceText[$message; ; %20;-1];lyrics;текст для трека не найден]]
$suppressErrors[какая-то ошибка, попробуй потом]
$color[RANDOM]
$botTyping
$onlyIf[$message!=;]
`
}]
