'use strict';

export function addDomain(callback, input){
  $.ajax({
    type: 'GET',
    url: '../php/add/domain.php',
    data: { domain_name: input },
    cache: false,
    dataType: "html",
    success: function () {
      callback();
    }
  });
}


