function convertTimestamp(timestamp) {
    var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
        yyyy = d.getFullYear(),
        mm = ('0' + (d.getMonth() + 1)).slice(-2),  // Months are zero based. Add leading 0.
        dd = ('0' + d.getDate()).slice(-2),         // Add leading 0.
        hh = d.getHours(),
        h = hh,
        min = ('0' + d.getMinutes()).slice(-2),     // Add leading 0.
        ampm = 'AM',
        time;

    if (hh > 12) {
        h = hh - 12;
        ampm = 'PM';
    } else if (hh === 12) {
        h = 12;
        ampm = 'PM';
    } else if (hh == 0) {
        h = 12;
    }

    // ie: 2014-03-24, 3:00 PM
    time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;
    return time;
}

module.exports = {
      name: "info",
      aliases: ['stats', 'bs', 'stata', 'стата'],
      code: `$log[info от $userTag]
$color[RANDOM]
      $author[Техническая инфа]
$title[${require ('os').hostname}]
$addField[CPU;$cpu%\nCPU модель: $djsEval[require ('os').cpus()[0].model;yes];yes]
$addField[Платформа;${require ('os').type} $djsEval[require('os').arch;yes];yes]
$addField[RAM;$ram MB/$maxRam MB;yes]
$addField[🏓 Пинг;\`$botPing\` ms\nWebsocket - \`$ping\` ms;yes]
$addField[Библиотеки;Aoi.js - $packageVersion\nNodeJS - $getObjectProperty[nodev]\nDiscord.js - $djsEval[d.object.nodev = process.version
d.object.discordv = require('discord.js').version;yes];yes]
$footer[Дизайн украден у бота $userTag[736963755904335942], но слегка переделан | Сервер запущен;$userAvatar[736963755904335942]]
$addTimestamp[${convertTimestamp(require('os').uptime)}]
$description[#️⃣ $channelCount: ⌨️ $channelCount[text]; 🔊 $channelCount[voice]\n👥 $membersCount: 🟢  $membersCount[$guildID;online]; ⛔ $membersCount[$guildID;dnd]; 🌙 $membersCount[$guildID;idle]; ⚫ $membersCount[$guildID;offline]; 🤖 $botCount]
`}
