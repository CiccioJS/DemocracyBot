const TelegramBot = require('node-telegram-bot-api');
const TOKEN = process.env.TELEGRAM_TOKEN || '496925853:AAEHdtGHjuxhfesucxwnGc2pNAMHCbzAoyU';
const bot = new TelegramBot(TOKEN, { polling: true });

//Perosnal Message when click start to run bot /start
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "A list of command:\n/sendpic");
});

//send photo at command /sendpic
bot.onText(/\/sendpic/, (msg) => {
    bot.sendPhoto(msg.chat.id, "https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg", {
        caption: "Immagine\nA caso"
    });
});

//Reply when someone send Hi
bot.on('message', (msg) => {
    var Hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
        bot.sendMessage(msg.chat.id, "Hello " + msg - from.first_name + " " + msg.from.id);
    }

    //Reply when someone send bye even in a complex text
    var bye = "bye";
    if (msg.text.toString().toLowerCase().includes(bye)) {
        bot.sendMessage(msg.chat.id, "Hope to see you around again, Bye");
    }

    //Reply fro specific ID member federico panza: 24901304
    const ME = 123456789; //fake id i tested with mine and work
    reply_to_message_id: msg.message_id;
    if (msg.from.id == ME) {
        reply_to_message_id = msg.message_id;
        bot.sendMessage(msg.chat.id, "Cosa mi dici mai??");
    }
});

