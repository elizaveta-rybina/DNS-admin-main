'use strict';

export function deleteDomain(callback, value){
  $.ajax({
    type: "GET",
    url: "../php/delete/domain.php",
    data: { id: value },
    success: function() {
      callback();
    },
    error: function() {
      console.log('Зря ты стал программистом....')
    }
  });
}
