module.exports = {
    name: "link",
    code: `
    $getObjectProperty[link]
    $onlyIf[$getObjectProperty[link]!=$message[1];Сервис не захотел укорачивать эту ссылку]
    $addObjectProperty[link;$httpRequest[https://clck.ru/--?url=$message[1];GET]]
    $createObject[{}]
    $onlyIf[$isValidLink[$message[1]]==true;Я не вижу тут ссылки 🤨]
    $onlyIf[$message[1]!=;Дай мне ссылку, чтобы я её укоротил]
    `}