module.exports = {
      name: "info",
      aliases: ['stats', 'bs', 'stata', 'стата'],
      code: `$log[info от $userTag]
$color[RANDOM]
      $author[Техническая инфа]
      $title[Сервер: ${require ('os').hostname}]
      $thumbnail[$userAvatar[$clientID]]
$addField[Библиотеки(и нода);Aoi.js - $packageVersion\nNodeJS - $getObjectProperty[nodev]\nDiscord.js - $djsEval[d.object.nodev = process.version
d.object.discordv = require('discord.js').version;yes];yes]
$addField[🏓 Пинг;\`$botPing\` ms\nWebsocket - \`$ping\` ms;yes]
$addField[RAM;$ram MB/$maxRam MB;yes]
$addField[Платформа;${require ('os').type} $djsEval[require('os').arch;yes];yes]
$addField[CPU;$cpu%\nCPU модель: $djsEval[require ('os').cpus()[0].model;yes];yes]
$addField[Инфо бота;Серверов − $serverCount\nЮзеров − $membersCount;no]
$footer[Пепега: $userTag[$botOwnerID] | Бот запущен;$userAvatar[$botOwnerID]]
$addTimestamp[${Date.now() - process.uptime().toFixed(0) * 1000}]
`}
