module.exports = {
      name: "info",
      aliases: ['stats', 'bs', 'stata', 'стата'],
      code: `
$color[RANDOM]
      $author[Техническая информация]
      $title[Сервер: ${require ('os').hostname}]
      $thumbnail[$userAvatar[$clientID]]
$addField[Библиотеки(и нода);Aoi.js - $packageVersion\nNodeJS - $getObjectProperty[nodev]\nDiscord.js - $djsEval[d.object.nodev = process.version
d.object.discordv = require('discord.js').version;yes];yes]
$addField[Платформа;${require ('os').type} $djsEval[require('os').arch;yes];yes]
$addField[RAM;$ram MB/$maxRam MB;yes]
$addField[CPU;$cpu%\nCPU модель: $djsEval[require ('os').cpus()[0].model;yes];yes]
$addField[🏓 Пинг;\`$botPing\` ms\nWebsocket - \`$ping\` ms;no]
$addField[Инфо бота;Серверов − $serverCount\nЮзеров − $allMembersCount;yes]
$footer[Пепега: $userTag[$botOwnerID] | Бот запущен;$userAvatar[$botOwnerID]]
$addTimestamp[${Date.now() - process.uptime().toFixed(0) * 1000}]
`}