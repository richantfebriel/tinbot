function periksaPerntah(updates){
  var comand = updates.message.text.split(" ");
  var state = getUserState(updates.message.from.id);
 
  switch(comand[0].toLowerCase()){
 
    case "/start":
      saveUser(updates.message.from,comand[1]); 
      sendText(updates.message.chat.id,"Haii, Masukan data dengan klik \n\n/input");
      break;

    case "/input":
      saveUserState(updates.message.from.id,"NEWDATA");
      sendText(updates.message.chat.id,"Tgl Input (dd/mm/yyyy) : ");
      break;

    case "/finish":
      if(state=="FINALIZE"){
        var userrow = getData(updates.message.from.id,0,"USER");
        saveData(updates.message.from,userrow);
        sendText(updates.message.chat.id,"Terimakasih, submit data berhasil, gunakan /start untuk memulai baru");     
        saveUserState(updates.message.from.id,"MAIN");
        sendText("-800805572","Tgl Input : " + userrow[5] + "\n" + 
        "Nama CAM : " + userrow[6] + "\n" + 
        "Nama LOP :  " + userrow[7] + "\n" + 
        "Keterangan : " + userrow[8]);
        sendPhoto("-800805572",userrow[10],userrow[11]);             
      }else{
        sendText(updates.message.chat.id,"Data yang kamu input belum selesai");
      }
      break;

    default:
      var datarow = getData(comand[0].substring(1),4,"DATA");
  }
}
