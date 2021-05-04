module.exports = ({
    name: "ytsearch",
    aliases: ['yts', 'yt-search', 'youtube'],
    code: `
$replaceText[$jsonRequest[http://api.somecool.repl.co/yt-search?search=$replaceText[$message; ;%20;-1];url;хз ошибка какая-то, url нету];youtube.com/watch?v=;youtu.be/;1]
$onlyIf[$jsonRequest[http://api.somecool.repl.co/yt-search?search=$replaceText[$message; ;%20;-1];message;всё ок]==всё ок;Запрос не найден]
$argsCheck[>1;Введи запрос для поиска на ютубе]
`});
