module.exports = ({
    name: "ytsearch",
    aliases: ['yts', 'yt-search', 'youtube'],
    code: `
$replaceText[$jsonRequest[http://api.somecool.repl.co/yt-search?search=$replaceText[$noMentionMessage; ;%20;-1];url;Запрос не найден];youtube.com/watch?v=;youtu.be/;1]
$botTyping
$argsCheck[>1;Введи запрос для поиска на ютубе]
`});
