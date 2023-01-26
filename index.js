const TelegramApi = require('node-telegram-bot-api')
const debug = require("./helpers")

const token = "5803275171:AAEow7ZrOp3OUPiTVdy9RsbpGOibFTZ19pI";

const bot = new TelegramApi(token, {polling: true});


bot.setMyCommands([
    {command: "/start", description: "Начальное приветствие"},
    {command: "/info", description: "Получить информацию о пользователе"}
])


bot.onText(/\/start/, msg => {
    bot.sendMessage(msg.chat.id, debug(msg));
})


bot.onText(/\/info (.+)/, (msg, [source, match]) => {
    bot.sendMessage(msg.chat.id, debug(match));
})

//
// bot.on("message", msg => {
//     const id = msg.chat.id;
//
//     bot.sendMessage(id, debug(msg))
//         .then(() => {
//             console.log("Message has been send");
//         })
//         .catch((error) => {
//             console.log(error);
//         });
//
//     console.log(msg)
// })