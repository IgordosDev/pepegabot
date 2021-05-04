module.exports = {
      name: "snapshot",
      code: `$log[Snapshot от $userTag: $message[1]]
      $if[$jsonRequest[https://api.apiflash.com/v1/urltoimage?access_key=c98a99e7c6cd4f068c8f942e96b5b642&format=png&height=1024&response_type=json&url=$message[1]&width=1280;url;Error]==Error]
      Произошла какая-то ошибка, пойди чекни https://api.apiflash.com/v1/urltoimage?access_key=c98a99e7c6cd4f068c8f942e96b5b642&format=png&height=1024&response_type=json&url=$message[1]&width=1280
      $else
      $title[Снапшот <:Okayge:816271601162649610>;$jsonRequest[https://api.apiflash.com/v1/urltoimage?access_key=c98a99e7c6cd4f068c8f942e96b5b642&format=png&height=1024&response_type=json&url=$message[1]&width=1280;url;]]
      $image[$jsonRequest[https://api.apiflash.com/v1/urltoimage?access_key=c98a99e7c6cd4f068c8f942e96b5b642&format=png&height=1024&response_type=json&url=$message[1]&width=1280;url;]]
      $footer[Вызвано $username;$authorAvatar]
$addTimestamp
$color[RANDOM]
      $endif
      $botTyping
$onlyIf[$isValidLink[$message[1]]==true;Где ссылка]
$argsCheck[>1;Введи ссылку, на неё будет сделан скриншот <:Okayga:755125944498520255>]
      `}