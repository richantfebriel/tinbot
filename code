var token = "6271639572:AAHQSY54BopxAhWmecSLw8jTKGf_jmDaV7s";
var url = "https://api.telegram.org/bot" + token;
var webAppUrl = "https://script.google.com/macros/s/AKfycbxingXyT0HYhs2VLAB0SHSs_9vHoi1rzBKNQIEYaRkL1G75pECuMmR5FeVkbyqWsfI/exec";

function setWebhook() {
    var response = UrlFetchApp.fetch(url + "/setWebhook?url=" + webAppUrl);
    Logger.log(response.getContentText());
}

function doPost(e) {
    var stringJson = e.postData.getDataAsString();
    var updates = JSON.parse(stringJson);

    var id = updates.message.from.id;
    var nama = updates.message.from.first_name;
    var username = updates.message.from.username;
    var textBot = updates.message.text;
    var chat_bot = textBot;
    var command_cek = chat_bot.substring(0, 1); //dicek apakah garis atau bukan
    var command = chat_bot.split(" ")[0]; // command // memisahkan kata pertama dan kedua
    var subCommand = chat_bot.split(" ")[1]; // odp // kata kedua atau subperintah
    
    if (command_cek == "/") {
        switch(command){
        case "/start" :
        let text1 = "Halo " + nama + '\n' +
        '<b>selamat datang di tin bot</b>\n' +
        '---------------------------\n' +
        '/start - info bot\n' +
        '/help - bantuan\n' +
        '/about - tentang bot\n' +
        '/deal - input deal\n' +
        'fomat deal:\n' +
        '(/deal jumlahdeal lokasi)'
        sendText(id, text1);
        break;
        case "/help" :
        let text2 = "Butuh bantuan, silahkan menghubungi ke 081249652947 "
        sendText(id, text2);
        break;
        case "/about" :
        let text3 = "Bot ini dibuat oleh richant, tanggal 24/05/23"
        sendText(id, text3);
        break;
        case "/deal" :
        save(updates);
        break;
        case "/deal1" :
          simpan(updates.message.from.id);
          var nama = "Masukkan nama anda";
          sendreply(nama, updates.message.chat.id, updates.message.message_id);
          if(idregis(updates.message.from.id) == 1){
            simpanregis(Cmd, updates.message.from.id);
            var deal = "Berapa jumlah deal yang anda lakukan hari ini?";
            sendreply(deal, updates.message.chat.id, updates.message.message_id);
          }else if(idregis(updates.message.from.id) == 2){
            simpanregis(Cmd, updates.message.from.id);
            var lokasi = "Dimana lokasi tempat anda deal?";
            sendreply(lokasi, updates.message.chat.id, updates.message.message_id);
          }else if(idregis(updates.message.from.id) == 3){
            simpanregis(Cmd, updates.message.from.id);
            sendText(updates.message.chat.id, "Terima kasih");
          }
        break;
        default:
        sendText(id,"Command yang anda kirimkan tidak ada di bot ini");   
    }
    } else {
        let error = "Ini bukan command";
        sendText(id, error);
    }
}


function save(data) {
    let id = data.message.from.id;
    var nama = data.message.from.first_name;
    var username = data.message.from.username;
    var pesan = data.message.text;
    let text = pesan;
    var now = new Date();
    var waktu = Utilities.formatDate(now, "Asia/Jakarta", "dd/mm/yyyy hh:mm:ss"); // format timestamp indonesia

    var txt1 = text.split(" ")[0]; // kata pertama/command
    var jumlah = text.split(" ")[1]; // kata kedua
    var lokasi = text.substring(8); // kata ketiga
  
    var SSID = "1cIxVnuVD_Yx0u6-E6PtUo0qLBdQ7u5_NGOL5HePxw1c"; //alamat spreadsheet untuk simpan
    var namasheet = "datadeal"; //alamat sheet pada spreadsheet
    SpreadsheetApp.openById(SSID).getSheetByName(namasheet).appendRow([waktu, id, username, nama, jumlah, lokasi]); // input log
    sendText(id, "Data berhasil disimpan");
}

function simpan(from){
    var id = from;
    var SheetID = "1cIxVnuVD_Yx0u6-E6PtUo0qLBdQ7u5_NGOL5HePxw1c";
    var rangeName = 'datadeal!A1:F';
    var dataSheet = Sheets.Spreadsheets.Values.get(SheetID, rangeName).values;

    for(var rows = 0; rows < dataSheet.length; rows++){
        if(dataSheet[rows][0] != id){
            var r = rows + 2;
        }else{
            return 0;
        }
    }
    var id = from;
    var nama;
    var deal;
    var lokasi;
    var now = new Date();
    var waktu = Utilities.formatDate(now, "Asia/Jakarta", "dd/MM/YYYY HH:mm:ss");
    var rangeName = 'datadeal';
    var SheetID = "1cIxVnuVD_Yx0u6-E6PtUo0qLBdQ7u5_NGOL5HePxw1c";
    SpreadsheetApp.openById(SheetID).getSheetByName(rangeName).appendRow([waktu, id, nama, deal, lokasi]);
}

function idregis(userid){
    var SheetID = "1cIxVnuVD_Yx0u6-E6PtUo0qLBdQ7u5_NGOL5HePxw1c"
    var rangeName = 'datadeal!A1:F';
    var dataSheet = Sheets.Spreadsheets.Values.get(SheetID, rangeName).values;

    for(var row = 0; row < dataSheet.length; row++){
        if(dataSheet[row][0] == userid){
            var data = dataSheet[row];
            return leng = data.length;
        }
    }
}

function sendText(chatid, text, replymarkup) {
    var data = {
        method: "post",
        payload: {
            method: "sendMessage",
            chat_id: String(chatid),
            text: text,
            parse_mode: "HTML",
            reply_markup: JSON.stringify(replymarkup)
        }
    };
    UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data);
}

function sendreply(text, chatid, message_id) { 
    var data = {
      method: "post",
      payload: {
        method: "sendMessage",
        chat_id: String(chatid),
        text: text,
        reply_to_message_id : String(message_id)     
      }
    };
    UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data); 
}
