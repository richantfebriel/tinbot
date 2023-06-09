function periksaText(updates) {
  var state = getUserState(updates.message.from.id);
  switch(state){
    case "NEWDATA":
      saveUserData(updates.message.from.id,updates.message.text,"F");
      saveUserState(updates.message.from.id,"NEWDATA2");
      sendText(updates.message.from.id,
      // "Tgl Input (dd/mm/yyyy) : " + updates.message.text + "\n" + 
      "Nama CAM : ");
      break;
    case "NEWDATA2":
      var userrow = getData(updates.message.from.id,0,"USER");
      saveUserData(updates.message.from.id,updates.message.text,"G");
      saveUserState(updates.message.from.id,"NEWDATA3");
      sendText(updates.message.from.id,
      // "Tgl Input (dd/mm/yyyy) : " + userrow[5] + "\n" + 
      // "Nama CAM : " + updates.message.text + "\n" + 
      "Nama LOP : ");
      break;
    case "NEWDATA3":
      var userrow = getData(updates.message.from.id,0,"USER");
      saveUserData(updates.message.from.id,updates.message.text,"H");
      saveUserState(updates.message.from.id,"NEWDATA4");
      sendText(updates.message.from.id,
      // "Tgl Input (dd/mm/yyyy) : " + userrow[5] + "\n" + 
      // "Nama CAM : " + userrow[6] + "\n" + 
      // "Nama LOP : " + updates.message.text + "\n" + 
      "Keterangan : ");
      break;
    case "NEWDATA4":
      var userrow = getData(updates.message.from.id,0,"USER");
      saveUserData(updates.message.from.id,updates.message.text,"I");
      saveUserState(updates.message.from.id,"NEWDATA5");
      sendText(updates.message.from.id,
      // "Tgl Input (dd/mm/yyyy) : " + userrow[5] + "\n" + 
      // "Nama CAM : " + userrow[6] + "\n" + 
      // "Nama LOP : " + userrow[7] + "\n" + 
      // "Keterangan : " + updates.message.text + "\n\n" +
      "Upload 1 foto evidence");   
      break;  
    case "NEWDATA5":                  
      sendText(updates.message.from.id,"Hanya dikirim dengan format foto");      
      break; 
    default:      
      sendText(updates.message.from.id,"Perintah tidak dikenali, untuk mengulangi laporan kirim /input");
  }
}
