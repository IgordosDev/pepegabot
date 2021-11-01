module.exports = {
      name: "eval",
      code: `
      $eval[$message]
      $argsCheck[>1;Введи что-нибудь]
      $onlyForIDs[$botOwnerID[;];]`
}