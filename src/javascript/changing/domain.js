'use strict';

export function changeNameOfDomain(callback, domain_name, id){
  $.ajax({
    type: 'GET',
    url: '../php/changing/domain.php',
    data: { domain_name: domain_name, domain_id: id},
    cache: false,
    dataType: "html",
    success: function () {
      callback();
    }
  });
}
