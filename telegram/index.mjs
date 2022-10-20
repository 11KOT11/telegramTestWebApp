import Telegram from "node-telegram-bot-api";
import * as dotenv from "dotenv";
dotenv.config();

const token = process.env.TOKEN;
const bot = new Telegram(token, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const message = msg.text;
  if (message == "/start") {
    bot.sendMessage(chatId, "123123", {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Найти ближайший магазин",
              web_app: { url: "https://youtube.com/" },
            },
          ],
        ],
      },
    });
  }
});
