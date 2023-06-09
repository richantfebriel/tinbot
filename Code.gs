var SheetID = "<INPUT_YOUR_GSHEET_ID>"; 
var token = "<INPUT_YOUR_BOT_TOKEN>";
var telegramUrl = "https://api.telegram.org/bot" + token;
var webAppUrl = "<INPUT_YOUR_GOOGLE_SCRIPT_DEPLOY>";

function setWebhook(){
  var url = telegramUrl + "/setWebhook?url=" + webAppUrl;
  var response  = UrlFetchApp.fetch(url);
  Logger.log(response.getContentText());
}

function doPost(e) {    
  var stringJson = e.postData.getDataAsString();    
  var updates = JSON.parse(stringJson);    
  
  if(updates.callback_query){ 
    //handling callback query dari inline keyboard 
  }else if(updates.message){ 
  if(updates.message.new_chat_participant){    
      //kirim pesan welcome ke updates.message.chat.id    
    }else if(updates.message.left_chat_participant){    
      //kirim pesan goodbye ke updates.message.chat.id    
    }else if(updates.message.photo){  

      periksaPhoto(updates);

    }else if(updates.message.text){    
      if(updates.message.text[0]=="/"){      
        //kirim pesan balasan command 
        periksaPerntah(updates); 
      }else{    
        periksaText(updates); 
        //balas pesan reguler 
      }    
    }
  }
}
