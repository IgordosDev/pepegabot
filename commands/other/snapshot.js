require('dotenv').config();
module.exports = {
      name: "snapshot",
      code: `$log[Snapshot от $userTag: $message[1]]
      $title[Снапшот <:Okayge:816271601162649610>;]
      $image[$getObjectProperty[image]]
      $footer[Вызвано $username;$authorAvatar]
$addTimestamp
$color[RANDOM]
      $addObjectProperty[$jsonRequest[https://api.imgbb.com/1/upload?key=${process.env.IMGHOST}&image=$getObjectProperty[snapshot]&expiration=2678400;url;];image] // загрузка снапшота на сервер в целях безопасности (( чтобы не украли ключ доступа ))
      $addObjectProperty[$jsonRequest[https://api.apiflash.com/v1/urltoimage?access_key=${process.env.SNAPSHOT}&format=png&height=1024&response_type=json&url=$message[1]&width=1280;url;];snapshot] // снапшот с разрешением 1280x1024
      $createObject[{}]
      $botTyping
$onlyIf[$isValidLink[$message[1]]==true;Где ссылка]
$argsCheck[>1;Введи ссылку, на неё будет сделан скриншот <:Okayga:755125944498520255>]
      `}
