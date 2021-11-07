module.exports = {
      name: "ip",
aliases:['IP', 'Ip'],
      code: `
      $title[$jsonRequest[$getObjectProperty[link];query;]]
$description[Континент: $jsonRequest[$getObjectProperty[link];continent;]
Страна: :flag_$toLowercase[$jsonRequest[$getObjectProperty[link];countryCode;white]]: $jsonRequest[$getObjectProperty[link];country;]
Регион: ($jsonRequest[$getObjectProperty[link];region;]) $jsonRequest[$getObjectProperty[link];regionName;]
Город: $jsonRequest[$getObjectProperty[link];city;]
Индекс: $jsonRequest[$getObjectProperty[link];zip;]
Широта: $jsonRequest[$getObjectProperty[link];lat;]/Долгота: $jsonRequest[$getObjectProperty[link];lon;]
Таймзона: $jsonRequest[$getObjectProperty[link];timezone;]
ISP: $jsonRequest[$getObjectProperty[link];isp;]
Организация: $jsonRequest[$getObjectProperty[link];org;]]
$color[RANDOM]

$onlyIf[$jsonRequest[$getObjectProperty[link];status;]==success;Неудачный запрос, возможно адрес неверный \¯\\\_\(\ツ\)\_\/\¯]
$addObjectProperty[link;http://ip-api.com/json/$message[1]?fields=18575359]
$createObject[{}]
$botTyping
$argsCheck[>1;Введи IP или адрес, который нужно проверить]
      `}