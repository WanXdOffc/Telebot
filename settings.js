const fs = require("fs");
const {
   indonesia
} = require("./language");

// Website Api (jgn di ganti biar gk eror)
global.APIs = {
   alfa: 'https://api.zeeoneofc.my.id', //apabila link api eror, segera laporkan ke owner
}

//buy apikey premium 0887435047326
// Free apikey (silahkan login terus ganti Your Key dgn apikey lu)
global.APIKeys = {
   'https://api.zeeoneofc.my.id': 'Un9ZJlKvzWIQhev', // 👉 login https://api.zeeoneofc.my.id to get apikey
}

//language 
global.language = indonesia //change indonesia to english if you don't understand the language used by the bot

global.BOT_TOKEN = "5802475550:AAHJqUo64YfRAGC62kk2Ts9j_5afg5CVFWA" //create bot here https://t.me/BotFather and get the bot token
global.BOT_NAME = "WannBotz" //your bot name
global.OWNER_NAME = "WanXD Official" //your name
global.OWNER_NUMBER = "6285757338680" //your telegram number
global.OWNER = ["https://t.me/wanxdofficial", "https://t.me/wanxdofficial"] // pastikan username sudah sesuai agar fitur khusus owner bisa di pakai
global.THUMBNAIL = "./lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.DONASI = "./donasi.jpg" // foto donasi di folder image
global.lang = language //don't change
