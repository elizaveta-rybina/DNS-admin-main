'use strict';

function gen_password(len){
  var password = "";
  var symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!№;%:?*()_+=";
  for (var i = 0; i < len; i++){
      password += symbols.charAt(Math.floor(Math.random() * symbols.length));
  }
  return password;
}

$(document).ready(function(){
  $("#addUser-btn").click(function(){
    
  });
});
