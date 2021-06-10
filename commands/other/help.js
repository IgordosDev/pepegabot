module.exports = {
      name: "help",
      code: `$log[Help от $userTag]
      $title[Команды, они внизу]
      $description[Это все мои команды, типа. Префикс - \`$getServerVar[prefix]\`.]
      $color[RANDOM]
      $addField[Мьюзик;\`play\`, \`skip\`, \`skipTo\`, \`queue\`, \`stop\`, \`pause\`(\`resume\`), \`now-playing\`(\`np\`), \`loop\`;no]
$addField[Остальное;\`info\`, \`ping\`, \`remind\`(\`reminder\`), \`chatbot\`, \`snapshot\`, \`ip\`, \`commandlist\`(для либы [aoi.js](https://aoi.js.org/)), \`serverinfo\`, \`yt-search\`]
      `}
