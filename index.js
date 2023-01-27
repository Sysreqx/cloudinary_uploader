const TelegramApi = require('node-telegram-bot-api')
const debug = require("./helpers")

const token = "5803275171:AAEow7ZrOp3OUPiTVdy9RsbpGOibFTZ19pI";

const bot = new TelegramApi(token, {polling: true});


bot.setMyCommands([
    {command: "/start", description: "Начальное приветствие"},
    {command: "/info", description: "Получить информацию о пользователе"}
])


bot.on("message", msg => {

    const chatId = msg.chat.id;

    bot.sendMessage(chatId, "Inline keyboard", {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "Google",
                        url: "https://google.com"
                    }
                ],
                [
                    {
                        text: "Reply",
                        callback_data: "reply"
                    },
                    {
                        text: "Forward",
                        callback_data: "forward"
                    }
                ]
            ]
        }
    })

})

bot.on("callback_query", query => {
    // bot.sendMessage(query.message.chat.id, debug(query))

    bot.answerCallbackQuery(query.id, `${query.data}`)
})