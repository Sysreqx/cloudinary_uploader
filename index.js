const TelegramApi = require('node-telegram-bot-api')
const debug = require("./helpers")

const token = "5803275171:AAEow7ZrOp3OUPiTVdy9RsbpGOibFTZ19pI";

const bot = new TelegramApi(token, {polling: true});

bot.on("inline_query", query => {

    let results = [];

    for (let i = 0; i < 5; i++) {
        results.push({
            type: "article",
            id: i.toString(),
            title: `title #${i + 1}`,
            input_message_content: {
                message_text: `article #${i + 1}`
            }
        })
    }

    bot.answerInlineQuery(query.id, results).then();

})