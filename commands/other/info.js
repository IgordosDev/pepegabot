module.exports = {
      name: "info",
      aliases: ['stats', 'bs', 'stata', 'стата'],
      code: `$log[info от $userTag]
$color[RANDOM]
      $author[Техническая инфа]
$title[${require ('os').hostname}]
$addField[Библиотеки;Aoi.js - $packageVersion\nNodeJS - $getObjectProperty[nodev]\nDiscord.js - $djsEval[d.object.nodev = process.version
d.object.discordv = require('discord.js').version;yes];yes]
$addField[🏓 Пинг;\`$botPing\` ms\nWebsocket - \`$ping\` ms;yes]
$addField[RAM;$ram MB/$maxRam MB;yes]
$addField[Платформа;${require ('os').type} $djsEval[require('os').arch;yes];yes]
$addField[CPU;$cpu%\nCPU модель: $djsEval[require ('os').cpus()[0].model;yes];yes]
$footer[Дизайн украден у бота $userTag[736963755904335942], но слегка переделан | Сервер запущен;$userAvatar[736963755904335942]]
$addTimestamp[${Date.now() - require('os').uptime().toFixed(0) * 1000}]
$description[#️⃣ $channelCount: ⌨️ $channelCount[text]; 🔊 $channelCount[voice]\n👥 $membersCount: 🟢  $membersCount[$guildID;online]; ⛔ $membersCount[$guildID;dnd]; 🌙 $membersCount[$guildID;idle]; ⚫ $membersCount[$guildID;offline]; 🤖 $botCount]
`}
