function periksaPhoto(updates) {
  var state = getUserState(updates.message.from.id);
  switch(state){
      case "NEWDATA5":     
        var fileId = updates.message.photo[updates.message.photo.length - 1]["file_id"];
        var url = 'https://api.telegram.org/bot' + token + '/' + 'getFile?file_id=' + fileId
        var response = UrlFetchApp.fetch(url);
        response = JSON.parse(response.getContentText());
        var urlPhoto = 'https://api.telegram.org/file/bot' + token + '/' + response.result["file_path"];
        saveUserData(updates.message.from.id,updates.message.photo[0].file_id,"K");
        saveUserData(updates.message.from.id,urlPhoto,"L");
        saveUserState(updates.message.from.id,"FINALIZE");
        var userrow = getData(updates.message.from.id,0,"USER");
        sendPhoto(updates.message.chat.id,userrow[10], "Tgl Input : "+ userrow[5] + "\n" + 
        "Nama CAM : " + userrow[6] + "\n" + 
        "Nama LOP : " + userrow[7] + "\n" + 
        "Keterangan : " + userrow[8] +"\n\n" +
        "Klik /finish untuk submit data dan share ke grup");             
      break;
      default:
      sendText(updates.message.from.id,"Belum saatnya kamu kirim foto");
  }
}
