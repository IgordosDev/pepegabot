module.exports = {
      name: "info",
      aliases: ['stats'],
      code: `$log[info от $userTag]
$color[RANDOM]
      $title[Техническая инфа]
      $description[CPU - $cpu%\nCPU модель: $djsEval[require ('os').cpus()[0].model;yes]\nПлатформа: $djsEval[require ('os').platform();yes]\nRAM - $ram MB/$maxRam MB\nBot ping - \`$botPing\` ms\nWebsocket - \`$ping\` ms\nAoi.js - $packageVersion\nNodeJS - $getObjectProperty[nodev]\nDiscord.js - $djsEval[d.object.nodev = process.version
d.object.discordv = require('discord.js').version;yes]] $footer[Аптайм: $uptime]
$addField[#️⃣ $channelCount;⌨️ $channelCount[text]\n🔊 $channelCount[voice];yes]
$addField[👥 $membersCount;🟢  $membersCount[$guildID;online]\n⛔ $membersCount[$guildID;dnd]\n🌙 $membersCount[$guildID;idle]\n⚫ $membersCount[$guildID;offline]\n🤖 $botCount;yes]
$addField[Инфа о сервере:;$if[$serverBoostCount==0]
$else
Кол-во бустов: $serverBoostCount(<:pepeScoots:816301320285847553>)\n
$endif
Высшая роль сервера: <@&$highestServerRole>;yes]
`}
