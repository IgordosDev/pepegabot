module.exports = {
      name: "ip",
aliases:['IP', 'Ip'],
      code: `
      $title[$jsonRequest[$getObjectProperty[link];query;Nothing]]
$description[Континент: $jsonRequest[$getObjectProperty[link];continent;Nothing]
Страна: :flag_$toLowercase[$jsonRequest[$getObjectProperty[link];countryCode;white]]: $jsonRequest[$getObjectProperty[link];country;Nothing]
Регион: ($jsonRequest[$getObjectProperty[link];region;Nothing]) $jsonRequest[$getObjectProperty[link];regionName;Nothing]
Город: $jsonRequest[$getObjectProperty[link];city;Nothing]
Индекс: $jsonRequest[$getObjectProperty[link];zip;Nothing]
Широта: $jsonRequest[$getObjectProperty[link];lat;Nothing]/Долгота: $jsonRequest[$getObjectProperty[link];lon;Nothing]
Таймзона: $jsonRequest[$getObjectProperty[link];timezone;Nothing]
ISP: $jsonRequest[$getObjectProperty[link];isp;Nothing]
Организация: $jsonRequest[$getObjectProperty[link];org;Nothing]]
$color[RANDOM]

$onlyIf[$jsonRequest[$getObjectProperty[link];status;]==success;Неудачный запрос, возможно адрес неверный \¯\\\_\(\ツ\)\_\/\¯]
$addObjectProperty[link;http://ip-api.com/json/$message[1]?fields=18575359]
$createObject[{}]
$botTyping
$argsCheck[>1;Введи IP или адрес, который нужно проверить]
      `}