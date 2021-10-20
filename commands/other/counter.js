module.exports = [{
name: "$alwaysExecute",
code: `$if[$sum[$getServerVar[count];1]==$message[1]]
$setServerVar[count;$message[1]]
$else
$deletecommand
$endif
$onlyIf[$getServerVar[count_channel]==$channelID;]
`}, {
    name: 'count',
    code: `  $if[$noMentionMessage[1]==off]
    Счётчик ❎
  $setServerVar[count_channel;0]
  $onlyIf[$hasRoles[$authorID;821236913725243412]==true;Это могут делать только модераторы]
  $elseIf[$noMentionMessage[1]==channel]
  Счётчик ✅
  $setServerVar[count_channel;$message[2]]
  $onlyIf[$findServerChannel[$message[2]]!=undefined;Канал на сервере не найден.]
  $onlyIf[$getServerVar[count_channel==0;Уже выключено.]
  $onlyIf[$hasRoles[$authorID;821236913725243412]==true;Это могут делать только модераторы]
  $elseIf[$noMentionMessage[1]==count]
  Число счётчика изменено на **$noMentionMessage**. ✅
  $setServerVar[count;$noMentionMessage[2]]
  $onlyIf[$isNumber[$noMentionMessage[2]]==true;Заданный аргумент не является цифрой.]
  $onlyIf[$hasRoles[$authorID;821236913725243412]==true;Это могут делать только модераторы]
  $endelseIf
  $else
  Аргументы не приянты пашол нахуй
  $endif
  $onlyIf[$message[1]!=;Сначала ты должен написать то что ты хочешь изменить: \`channel\`/\`count\`/\`off\` {title:Примеры:} {field:channel:\`$getServerVar[prefix]count channel $randomChannelID\`\n\`$getServerVar[prefix]count channel #$channelName[$randomChannelID]\`\nМеняет канал-счётчик на сервере. **Введите \`0\` для сброса.**:no} {field:count:\`$getServerVar[prefix]count count $random[1;100]\`\nМеняет значение последней цифры в канале.:no} {field:on/off:\`$getServerVar[prefix]count off\`\nВыключает счётчик.\n**Для включения - укажите новый канал в \`$getServerVar[prefix]count channel\`.**:no}]
  `}]
