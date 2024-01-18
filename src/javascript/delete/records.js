'use strict';

export function deleteRecords(callback, value, table){
  $.ajax({
    type: "GET",
    url: "../php/delete/records.php",
    data: { table: table, id: value },
    success: function() {
      callback();
    },
    error: function() {
      console.log('Зря ты стал программистом....')
    }
  });
}
