module.exports = [{
      name: "lyrics",
      code: `$log[lyrics от $userTag: $songInfo[title]]
      $title[$songInfo[title]] 
$description[$jsonRequest[https://some-random-api.ml/lyrics?title=$replaceText[$songInfo[title]; ; %20;-1];lyrics;для этого трека текст не найден.]]
$suppressErrors[произошли технические шоколадки, попробуй потом]
$color[RANDOM]
$onlyIf[$voiceID!=;]
$onlyIf[$message==;]
      `}, {
name: "lyrics",
code:`$log[lyrics от $userTag: $message]
$title[$message] 
$description[$jsonRequest[https://some-random-api.ml/lyrics?title=$replaceText[$message; ; %20;-1];lyrics;текст для трека не найден]]
$suppressErrors[какая-то ошибка, попробуй потом]
$color[RANDOM]
$onlyIf[$message!=;]
`
}]