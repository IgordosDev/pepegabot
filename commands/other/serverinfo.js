module.exports = ({
name: "serverinfo",
  aliases: ['server-info', 'server', 'сервер'],
  code: `$author[Инфо о сервере]
  $color[$replaceText[$getRoleColor[$highestServerRole];#000000;RANDOM;1]]
  $title[$serverName;https://discord.com/channels/$guildID]
  $thumbnail[$replaceText[$serverIcon;null;https://sun9-37.userapi.com/impg/SuZlHrMLzMLrs1Z_EPTVxciSZ9db_I591Ix-MQ/j_vBAIIyBFI.jpg?size=937x720&quality=96&sign=0eba1fd70f1dd5577de9ae378db44cc9&type=album;1]]
  $if[$serverBoostCount!=0] $description[Бустов: $serverBoostCount] $else $endif
  $addField[#️⃣ Каналов: $channelCount;⌨️ Текстовых: $channelCount[text]\n🔊 Войсов: $channelCount[voice];yes]
  $addField[👥 Участников: $membersCount/$maximumMembers;🟢 Онлайн: $membersCount[$guildID;online]\n⛔ DnD: $membersCount[$guildID;dnd]\n🌙 Не активны: $membersCount[$guildID;idle]\n⚫ Оффлайн: $membersCount[$guildID;offline]\n🤖 Ботов: $botCount;yes]
  $footer[Пепега сервера: $userTag[$ownerID] | Сервер создан;$userAvatar[$ownerID]]
$addTimestamp[$djsEval[message.guild.createdTimestamp;yes]]`});