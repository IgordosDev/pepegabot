module.exports = {
      name: "ip",
aliases:['IP'],
      code: `$log[ip от $userTag: $message[1]]
      $title[$jsonRequest[$getObjectProperty[link];query;Nothing]]
$description[Континент: $jsonRequest[$getObjectProperty[link];continent;Nothing]
Страна: :flag_$toLowercase[$jsonRequest[$getObjectProperty[link];countryCode;white]]: $jsonRequest[$getObjectProperty[link];country;Nothing]
Регион: ($jsonRequest[$getObjectProperty[link];region;Nothing]) $jsonRequest[http://ip-api.com/json/$message[1]?fields=18575359;regionName;Nothing]
Город: $jsonRequest[$getObjectProperty[link];city;Nothing]
Индекс: $jsonRequest[$getObjectProperty[link];zip;Nothing]
Широта: $jsonRequest[$getObjectProperty[link];lat;Nothing]/Долгота: $jsonRequest[http://ip-api.com/json/$message[1]?fields=18575359;lon;Nothing]
Таймзона: $jsonRequest[$getObjectProperty[link];timezone;Nothing]
ISP: $jsonRequest[$getObjectProperty[link];isp;Nothing]
Организация: $jsonRequest[$getObjectProperty[link];org;Nothing]]
$color[RANDOM]

$onlyIf[$jsonRequest[$getObjectProperty[link];status;]==success;Неверный адрес, или апи сдохло, статус неверный \¯\\\_\(\ツ\)\_\/\¯]
$addObjectProperty[link;http://ip-api.com/json/$message[1]?fields=18575359]
$createObject[{}]
$botTyping
$argsCheck[>1;Введи IP или адрес, который нужно проверить]
      `}
