module.exports = {
      name: "snapshot",
      aliases: ['screenshot', 'ss'],
      code: `
      $attachment[$jsonRequest[https://api.apiflash.com/v1/urltoimage?access_key=${process.env.SNAPSHOT}&format=png&height=1024&response_type=json&url=$message[1]&width=1280;url;]]
      $botTyping
$onlyIf[$isValidLink[$message[1]]==true;Где ссылка]
$argsCheck[>1;Введи ссылку, на неё будет сделан скриншот]
$onlyIf[${process.env.SNAPHOT}!=;]
      `}