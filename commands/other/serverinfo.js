module.exports = ({
name: "serverinfo",
  aliases: ['server-info', 'server', 'сервер'],
  code: `$author[Инфо о сервере]
  $title[$serverName ;https://discord.com/channels/$guildID]
  $thumbnail[$serverIcon]
  $if[$serverBoostCount!=0] $description[Бустов: $serverBoostCount] $else $endif
  $addField[Кол-во эмоутов;$emoteCount]
  $addField[#️⃣ Каналов: $channelCount;⌨️ Текстовых: $channelCount[text]$if[$channelCount[voice]!=0]\n🔊 Войсов: $channelCount[voice] $else $endif;yes]
  $addField[👥 Участников: $membersCount/$maximumMembers;$if[$membersCount[$guildID;online]!=0]🟢 Онлайн: $membersCount[$guildID;online] $else $endif $if[$membersCount[$guildID;dnd]!=0]\n⛔ DnD: $membersCount[$guildID;dnd] $else $endif $if[$membersCount[$guildID;idle]!=0]\n🌙 Не активны: $membersCount[$guildID;idle]$else $endif $if[$membersCount[$guildID;offline]!=0]\n⚫ $membersCount[$guildID;offline] $else $endif $if[$botCount!=0]\n🤖 $botCount $else $endif;yes]
  $footer[Пепега сервера: $userTag[$ownerID] | Сервер создан;$userAvatar[$ownerID]]
$addTimestamp[${Date.now() - message.guild.createdTimestamp().toFixed(0) * 1000}]`});
