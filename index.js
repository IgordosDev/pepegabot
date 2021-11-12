const aoijs = require("aoi.js")
require('dotenv').config();

const bot = new aoijs.Bot({
  sharding: false, //true or false 
  shardAmount: 2, //Shard amount 
  mobile: false, //true or false - Discord Mobile Status
  //dbhToken: "API KEY", // Remove // if using, get an API Key from their Server
  token: process.env.TOKEN, //Discord Bot Token
  prefix: ["$getServerVar[prefix]"], //Change PREFIX to your Prefix
  respondOnEdit: {command:true,alwaysExecute:false,nonPrefixed:false,timeLimit:60000},
  intents: ["GUILDS","GUILD_MESSAGES"],
  autoUpdate:true
})
//переменные
bot.variables({
    prefix: "p!",
    chatbot: "off",
    chatbot_channel: "",
    webhook_id: "0",
    webhook_token: "",
    pause: "0"
})
//ивенты
/* bot.musicStartCommand({
 channel: "$channelID", 
 code: `
Сейчас играет "**$songInfo[title]**"
`})
bot.musicEndCommand({ 
channel: "$channelID", 
code: ``}) */
 
bot.onMessage() // Allows Commands to Executed
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")
// bot.loadCommands(`./commands/`)
/* bot.readyCommand({ //проверка на наличие новой версии библиотеки при каждом запуске бота
  channel: "906867817545084938",
  code: `<@!$botOwnerID>, доступна новая версия библиотеки aoi.js \`$jsonRequest[https://api.leref.ga/package/version;version;]\`, желательно поменять её в **package.json** или вырезать эту строчку об напоминании
  $onlyIf[$jsonRequest[https://api.leref.ga/package/version;version;$packageVersion]!=5.0.1;Ещё один блядский запуск бота с версией 4.6.0]
  $onlyIf[$jsonRequest[https://api.leref.ga/package/version;version;$packageVersion]!=$packageVersion;]
  $onlyIf[$jsonRequest[https://api.leref.ga/package/version;status;]==200;Сделать запрос на наличие новой версии библиотеки не удалось.]
`}) */
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
//реакции(не все) Tanaka#7762
bot.command({
name: "$alwaysExecute",
code: `$addCmdReactions[♂️]
$onlyIfMessageContains[$noMentionMessage;ass;fuck;master;]
` 
}, {
  name: "$alwaysExecute",
  code: `$addCmdReactions[😂]
  $onlyIfMessageContains[$toLowercase[$noMentionMessage];sus;]
  `}, {
    name: "$alwaysExecute",
    code: `$addCmdReactions[🇺🇦]
    $onlyIfMessageContains[$noMentionMessage;228;]
    `}, {
      name: "$alwaysExecute",
      code: `Привет
      $onlyIfMessageContains[$toLowercase[$noMentionMessage];привет;]
      `})
//предупреждение рейтлимитов
/* bot.onRateLimit({ 
channel: "906868027398692904",
code: `$title[Рейтлимиты!]
$description[Limit: $rateLimit[limit]
Method: $rateLimit[method]
Path: $rateLimit[path]
Route: $rateLimit[route]]
$addTimestamp
`
}) */
// Status
bot.status({
  text: "raifu_hardwave",
  type: "STREAMING",
  url: "https://twitch.tv/raifu_hardwave",
  time: 120
})
bot.status({
    text: "Lords of Lockerroom",
    type: "WATCHING",
    time: 120
})
bot.status({
    text: "Need For Speed Most Wanted: Pepega Edition",
    type: "PLAYING",
    time: 180
})
bot.status({
  text: "прочитанных шутках кота джокера",
  type: "COMPETING",
  time: 120
})
