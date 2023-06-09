function saveUser(from,reffid){ 
   
  var rownum = getUserRow(from.id); 
  if(rownum==0){ 
    var datauser = [   
      [   
        from.id,from.username,from.first_name,reffid,"MAIN"   
      ]   
    ];   
   
    var rangeName = 'USER!A2:D';   
    var valueRange = Sheets.newValueRange();   
   
    valueRange.values = datauser;   
    var result = Sheets.Spreadsheets.Values.append(valueRange, SheetID, rangeName,{valueInputOption:'USER_ENTERED'}); 
  }else{ 
   
    var datauser = [   
      [   
        from.id,from.username,from.first_name 
      ]   
    ];   
     
    var rangeName = 'USER!A'+rownum+':C'+rownum;   
    var valueRange = Sheets.newValueRange();   
     
    valueRange.values = datauser;   
    var result = Sheets.Spreadsheets.Values.update(valueRange, SheetID, rangeName,{valueInputOption:'USER_ENTERED'});        
  }     
}

function getUserRow(userid){ 
  var rangeName = 'USER!A2:D';   
  var users = Sheets.Spreadsheets.Values.get(SheetID, rangeName).values;   
   
  if(!users){ 
    return 0; 
  }else{ 
    for (var row = 0; row < users.length; row++) {   
      if(users[row][0]==userid){     
        return row+2; 
      }   
    }  
    return 0; 
  } 
}

function getUserState(userid){ 
  var rangeName = 'USER!A2:F';   
  var users = Sheets.Spreadsheets.Values.get(SheetID, rangeName).values;   
   
  if(!users){ 
    return "MAIN"; 
  }else{ 
    for (var row = 0; row < users.length; row++) {   
      if(users[row][0]==userid){     
        return users[row][4]; 
      }   
    }  
    return "MAIN"; 
  } 
}

function saveUserState(userid,state){ 
  var rangeName = 'USER!A2:F';   
  var users = Sheets.Spreadsheets.Values.get(SheetID, rangeName).values;   
   
  if(!users){

  }else{ 
    for (var row = 0; row < users.length; row++) {   
      if(users[row][0]==userid){
        var rownum = row+2;
        var datauser = [   
            [   
              state 
            ]   
        ];   
  
    var rangeName = 'USER!E'+rownum;   
    var valueRange = Sheets.newValueRange();   
     
    valueRange.values = datauser;   
    var result = Sheets.Spreadsheets.Values.update(valueRange, SheetID, rangeName,{valueInputOption:'USER_ENTERED'}); 

      }   
    }  
  } 
}

function saveUserData(userid,state,field){ 
  var rangeName = 'USER!A2:Z';   
  var users = Sheets.Spreadsheets.Values.get(SheetID, rangeName).values;   
   
  if(!users){

  }else{ 
    for (var row = 0; row < users.length; row++) {   
      if(users[row][0]==userid){
        var rownum = row+2;
        var datauser = [   
            [   
              state 
            ]   
        ];   
     
    var rangeName = 'USER!'+field+rownum;   
    var valueRange = Sheets.newValueRange();   
     
    valueRange.values = datauser;   
    var result = Sheets.Spreadsheets.Values.update(valueRange, SheetID, rangeName,{valueInputOption:'USER_ENTERED'}); 

      }   
    }  
  } 
} 

function saveData(from,userData){ 
  
  var datauser = [   
    [   
    from.id,
      userData[5],
      userData[6],
      userData[7],
      userData[8],
      userData[9],
      userData[10],
      userData[11],
      userData[12],
      userData[13],
      userData[14],
      userData[15],
      userData[16],
      userData[17],
      userData[18],
      userData[19],
      userData[20],
      userData[21],
      userData[22],
      userData[23]
    ]   
  ];   
   
  var rangeName = 'DATA!A2:E';   
  var valueRange = Sheets.newValueRange();   
    
  valueRange.values = datauser;   
  var result = Sheets.Spreadsheets.Values.append(valueRange, SheetID, rangeName,{valueInputOption:'USER_ENTERED'}); 
}

function getData(searchdata,searchcol,searchsheet){ 
  var rangeName = searchsheet+'!A2:Z';   
  var datas = Sheets.Spreadsheets.Values.get(SheetID, rangeName).values;   
   
  if(!datas){ 
    return 0; 
  }else{ 
    for (var row = 0; row < datas.length; row++) {   
      if(datas[row][searchcol]==searchdata){     
        return datas[row]; 
      }   
    }  
    return 0; 
  } 
}

function addTimestamp(e){
  var startRow = 1 ;
  var targetColumn = 20;
  var filesheet = "DATA";

  var row = e.range.getRow();
  var col = e.range.getColumn();
  
  if(col === targetColumn && row >= startRow && e.source.getActiveSheet().getName() === filesheet ){    
    var currentDate = new Date();
    var currentDate = new Date();
    e.source.getActiveSheet().getRange(row,21).setValue(new Date());
    if(e.source.getActiveSheet().getRange(row,22).getValue() == ""){
      e.source.getActiveSheet().getRange(row,22).setValue(new Date());    
    }
  }
}
