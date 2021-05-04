module.exports = {
      name: "ip",
aliases:['IP'],
      code: `$log[ip от $userTag: $message[1]]
      $title[$jsonRequest[http://ip-api.com/json/$message[1]?fields=18575359;query;Nothing]]
$description[Континент: $jsonRequest[http://ip-api.com/json/$message[1]?fields=18575359;continent;Nothing]
Страна: :flag_$toLowercase[$jsonRequest[http://ip-api.com/json/$message[1]?fields=18575359;countryCode;white]]: $jsonRequest[http://ip-api.com/json/$message[1]?fields=18575359;country;Nothing]
Регион: ($jsonRequest[http://ip-api.com/json/$message[1]?fields=18575359;region;Nothing]) $jsonRequest[http://ip-api.com/json/$message[1]?fields=18575359;regionName;Nothing]
Город: $jsonRequest[http://ip-api.com/json/$message[1]?fields=18575359;city;Nothing]
Индекс: $jsonRequest[http://ip-api.com/json/$message[1]?fields=18575359;zip;Nothing]
Широта: $jsonRequest[http://ip-api.com/json/$message[1]?fields=18575359;lat;Nothing]/Долгота: $jsonRequest[http://ip-api.com/json/$message[1]?fields=18575359;lon;Nothing]
Таймзона: $jsonRequest[http://ip-api.com/json/$message[1]?fields=18575359;timezone;Nothing]
ISP: $jsonRequest[http://ip-api.com/json/$message[1]?fields=18575359;isp;Nothing]
Организация: $jsonRequest[http://ip-api.com/json/$message[1]?fields=18575359;org;Nothing]]
$color[RANDOM]

$onlyIf[$jsonRequest[http://ip-api.com/json/$message[1]?fields=18575359;status;]==success;Неверный адрес, или апи сдохло, статус неверный \¯\_(ツ)_/¯]
$botTyping
$argsCheck[>1;Введи IP или адрес, который нужно проверить]
      `}

//{"status":"success","continent":"North America","country":"United States","countryCode":"US","region":"IL","regionName":"Illinois","city":"Chicago","district":"","zip":"60666","lat":41.8781,"lon":-87.6298,"timezone":"America/Chicago","isp":"Cloudflare, Inc.","org":"Cloudflare, Inc.","as":"AS13335 Cloudflare, Inc.","mobile":false,"proxy":false,"hosting":true,"query":"104.21.10.121"}