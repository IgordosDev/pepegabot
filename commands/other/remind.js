module.exports = ({
 name: "reminder",
 aliases: ["remindme", "remind", "напомни", "напоминание"],
 code: `$log[remind от $userTag: $message]
$sendDM[$authorID;{title:Напоминание}{description:\`\`\`\n$messageSlice[1]\n\`\`\`}{color:RANDOM}]
$onlyIf[$isUserDMEnabled[$authorID]==true;<@$authorID>{color:RANDOM}{title:Напоминание}{description:\`\`\`
$messageSlice[1]
\`\`\`}]
$wait[$getObjectProperty[duration]ms]
$sendMessage[{color:RANDOM}{description:Напоминание создано <:Okayge:816271601162649610>}{field:Текст напоминания:$messageSlice[1]:yes}{field:Срок:$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getObjectProperty[durationdone];year;год];months;месяцев];weeks;недель];days;дней];hours;часов];and;y];seconds;секунд];week;неделю];day;день];hour;час];years;лет];month;месяц];minute;минуту];minutes;минут];second;секунду]:yes};no]
$suppressErrors[{color:RED}{description:Произошла какая-то ошибка, убедись что ты правильно ввёл аргументы :Okayge: \n\`\`\`\n$getServerVar[prefix]remind <время> <напоминание>\n\`\`\`}]
$djsEval[const util = require('dbd.js-utils')

d.object.durationdone = util.parseMS("$getObjectProperty[duration]")
] 
$djsEval[const util = require('dbd.js-utils')

d.object.duration = util.parseToMS("$message[1]")
] 
$createObject[{}]
$argsCheck[>2;{color:RED}{description:Мало аргументов\n **Правильное использование:**\n\`\`\`\n$getServerVar[prefix]remind <время> <напоминание>\n\`\`\`}]`
});