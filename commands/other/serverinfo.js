module.exports = ({
name: "serverinfo",
  aliases: ['server-info', 'server', 'сервер'],
  code: `$author[Инфо о сервере]
  $title[$serverName;https://discord.com/channels/$guildID]
  $thumbnail[$serverIcon]
  $addField[Кол-во эмоутов;$emoteCount]
  $addField[#️⃣ Каналов: $channelCount;⌨️ Текстовых: $channelCount[text]\n🔊 Войсов: $channelCount[voice];yes]
  $addField[👥 Участников: $membersCount/$maximumMembers;🟢 Онлайн: $membersCount[$guildID;online]\n⛔ DnD: $membersCount[$guildID;dnd]\n🌙 Не активны: $membersCount[$guildID;idle]\n⚫ $membersCount[$guildID;offline]\n🤖 $botCount $else $endif;yes]
  $footer[Пепега сервера: $userTag[$ownerID] | Сервер создан;$userAvatar[$ownerID]]
$addTimestamp[${Date.now() - message.guild.createdTimestamp().toFixed(0) * 1000}]`});
