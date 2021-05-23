module.exports = {
      name: "info",
      aliases: ['stats', 'bs', 'stata', 'стата'],
      code: `$log[info от $userTag]
$color[RANDOM]
      $author[Техническая инфа]
$title[${require ('os').hostname}]
$addField[CPU;$cpu%\nCPU модель: $djsEval[require ('os').cpus()[0].model;yes];yes]
$addField[Платформа: ${require ('os').type} $djsEval[require('os').arch;yes];yes]
$addField[RAM;$ram MB/$maxRam MB;yes]
$addField[🏓 Пинг;\`$botPing\` ms\nWebsocket - \`$ping\` ms;yes]
$addField[Библиотеки;Aoi.js - $packageVersion\nNodeJS - $getObjectProperty[nodev]\nDiscord.js - $djsEval[d.object.nodev = process.version
d.object.discordv = require('discord.js').version;yes];yes]
$addField[Аптайм;$replaceText[$replaceText[$replaceText[$replaceText[$uptime;d ;:;1];h ;:;1];m ;:;1];s ;:;1];yes]
$footer[Дизайн украден у бота $userTag[736963755904335942], но слегка переделан;$userAvatar[736963755904335942]]
$description[#️⃣ $channelCount: ⌨️ $channelCount[text]; 🔊 $channelCount[voice]\n👥 $membersCount: 🟢  $membersCount[$guildID;online]; ⛔ $membersCount[$guildID;dnd]; 🌙 $membersCount[$guildID;idle]; ⚫ $membersCount[$guildID;offline]; 🤖 $botCount]
`}
