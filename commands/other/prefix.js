module.exports = ({
    name: "prefix",
    code: `$log[Prefix set on "$noMentionMessage[1]" by $userTag]
    Префикс установлен на \`$noMentionMessage[1]\`.
    $onlyForIDs[$ownerID;разрешено только владельцу сервера]
    `
    });