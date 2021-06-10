module.exports = ({
name: "serverinfo",
  aliases: ['server-info', 'server', 'сервер'],
  code: `$author[Инфо о сервере]
  $title[$serverName;https://discord.com/channels/$guildID]
  $thumbnail[$serverIcon]
  $if[$serverBoostCount!=0] $description[Бустов: $serverBoostCount] $else $endif
  $addField[#️⃣ Каналов: $channelCount;⌨️ Текстовых: $channelCount[text]\n🔊 Войсов: $channelCount[voice];yes]
  $addField[👥 Участников: $membersCount/$maximumMembers;🟢 Онлайн: $membersCount[$guildID;online]\n⛔ DnD: $membersCount[$guildID;dnd]\n🌙 Не активны: $membersCount[$guildID;idle]\n⚫ Оффлайн: $membersCount[$guildID;offline]\n🤖 Ботов: $botCount;yes]
  $footer[Пепега сервера: $userTag[$ownerID] | Сервер создан;$userAvatar[$ownerID]]
  $color[$getRoleColor[$highestServerRole]]
$addTimestamp[$djsEval[message.guild.createdTimestamp;yes]]`});
