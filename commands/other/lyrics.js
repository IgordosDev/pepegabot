module.exports = [{
      name: "lyrics",
      code: `
      $title[$jsonRequest[https://some-random-api.ml/lyrics?title=$replaceText[$songInfo[title]; ; %20;-1];title;название песни не найдено]]
$description[$jsonRequest[https://some-random-api.ml/lyrics?title=$replaceText[$songInfo[title]; ; %20;-1];lyrics;для этого трека текст не найден.]]
$suppressErrors[Произошла какая-то ошибка, попробуйте позже]
$color[RANDOM]
$botTyping
$onlyIf[$voiceID!=;]
$argsCheck[0;]
      `}, {
name: "lyrics",
code:`
$title[$jsonRequest[https://some-random-api.ml/lyrics?title=$replaceText[$message; ; %20;-1];title;название песни не найдено]]
$description[$jsonRequest[https://some-random-api.ml/lyrics?title=$replaceText[$message; ; %20;-1];lyrics;текст для трека не найден]]
$suppressErrors[Какая-то ошибка, попробуйте позже]
$color[RANDOM]
$botTyping
$onlyIf[$message!=;]
`
}]