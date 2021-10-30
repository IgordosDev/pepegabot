const Aoijs = require("aoi.js")
require('dotenv').config();

const bot = new Aoijs.Bot({
  sharding: false, //true or false 
  shardAmount: 2, //Shard amount 
  mobile: false, //true or false - Discord Mobile Status
  //dbhToken: "API KEY", Remove // if using, get an API Key from their Server
  token: process.env.TOKEN, //Discord Bot Token
  prefix: ["$getServerVar[prefix]"] //Change PREFIX to your Prefix
})
//переменные
bot.variables({
    prefix: "p!",
    chatbot: "off",
    chatbot_channel: "",
    webhook_id: "0",
    webhook_token: "",
    pause: "0",
    weather: "off"
})
//ивенты
bot.musicStartCommand({
 channel: "$channelID", 
 code: `$log[$songInfo[title]]
Сейчас играет "**$songInfo[title]**"
`})
bot.musicEndCommand({ 
channel: "$channelID", 
code: `Очередь кончилась`})

 
bot.onMessage() // Allows Commands to Executed
bot.loadCommands(`./commands/`) //Allows Commands executed by `commands` folder
bot.readyCommand({ //проверка на наличие новой версии библиотеки
  channel: "753673183298846730",
  code: `<@!$botOwnerID>, доступна новая версия библиотеки aoi.js \`$jsonRequest[https://api.leref.ga/package/version;version;]\`, желательно поменять её в **package.json** или вырезать эту строчку об напоминании
  $onlyIf[$jsonRequest[https://api.leref.ga/package/version;version;$packageVersion]>$packageVersion;]
  $onlyIf[$jsonRequest[https://api.leref.ga/package/version;status;]==200;Сделать запрос на наличие новой версии библиотеки не удалось.]
$else
$endif
`})
bot.command({
name: "ping", 
code: `
$title[🏓 Pong!]
$description[\`$botPing\` ms.
Websocket: \`$ping\` ms.]
$footer[Uptime: $uptime]
$color[DD2E44]
` 
})
//реакции на ass и sus
bot.command({
name: "$alwaysExecute",
code: `$addCmdReactions[♂️]
$onlyIfMessageContains[$noMentionMessage;ass;]
` 
})
bot.command({
  name: "$alwaysExecute",
  code: `$addCmdReactions[😂]
  $onlyIfMessageContains[$noMentionMessage;sus;]
  `})
//предупреждение рейтлимитов
bot.rateLimitCommand({ 
channel: "753673183298846730",
code: `$title[Рейтлимиты!]
$description[Limit: $rateLimit[limit]
Method: $rateLimit[method]
Path: $rateLimit[path]
Route: $rateLimit[route]]
$addTimestamp
`
})
bot.onRateLimit()
// Status
bot.status({
  text: "raifu_hardwave",
  type: "STREAMING",
  url: "https://twitch.tv/raifu_hardwave",
  time: 120
});
bot.status({
    text: "Lords of Lockerroom",
    type: "WATCHING",
    time: 120
});
bot.status({
    text: "Need For Speed Most Wanted: Pepega Edition",
    type: "PLAYING",
    time: 180
});
