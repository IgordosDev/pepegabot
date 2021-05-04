module.exports = ({
    name: "now-playing",
    aliases: ['np', 'nowplaying'],
    code: `$log[Now-playing от $userTag]
    $author[$songInfo[publisher];;$songInfo[publisher_url]]
    $title[$songInfo[title];$songInfo[url]]
    $addField[Добавил(а) в плейлист:;<@!$songInfo[userID]>;yes]
    $addField[Длительность:;$replaceText[-$songInfo[duration_left]/$songInfo[duration];Seconds;секунд;-1];yes]
    $image[$songInfo[thumbnail]]
    `});