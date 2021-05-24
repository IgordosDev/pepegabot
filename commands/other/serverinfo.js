//module.exports = ({
name: "serverinfo",
  aliases: ['server-info', 'server', 'сервер'],
  code: `
  $title[Инфо о сервере]
  $thumbnail[$serverIcon[$guildID]]
  $addField[#️⃣ $channelCount;⌨️ $channelCount[text]\n🔊 $channelCount[voice];yes]
  $addField[👥 $membersCount;🟢  $membersCount[$guildID;online]\n⛔ $membersCount[$guildID;dnd]\n🌙 $membersCount[$guildID;idle]\n⚫ $membersCount[$guildID;offline]\n🤖 $botCount;yes]
  `});
