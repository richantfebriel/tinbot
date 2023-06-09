function sendText(chatid,text,replymarkup){   
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
 
  try{
    return JSON.parse(UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data));
  }
  catch(e){
    return "{ok:false}";
  }
}

function deleteMessage(chatid,messageid){   
  var data = {   
      method: "post",   
      payload: {   
        method: "deleteMessage",   
        chat_id: String(chatid),   
        message_id : messageid 
      }   
  };   
 
  try{
    return JSON.parse(UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data));
  }
  catch(e){
    return "{ok:false}";
  }
}

function sendVideo(chatid,url){   
  var data = {   
      method: "post",   
      payload: {   
        method: "sendVideo",   
        chat_id: String(chatid),   
        video: url
      }   
  };   
 
  try{
    return JSON.parse(UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data));
  }
  catch(e){
    return "{ok:false}";
  }
}

function sendPhoto(chatid,photo,caption,replymarkup){   
  var data = {   
      method: "post",   
      payload: {   
        method: "sendPhoto",   
        chat_id: String(chatid),   
        photo: photo,
        caption : caption,
        parse_mode: "HTML",   
        reply_markup: JSON.stringify(replymarkup)   
      }   
  };   
 
  try{
    return JSON.parse(UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data));
  }
  catch(e){
    return "{ok:false}";
  }
}

function addTimestamp(e){
  var startRow = 1 ;
  var targetColumn = 20;
  var filesheet = "DATA";

  var row = e.range.getRow();
  var col = e.range.getColumn();
}
