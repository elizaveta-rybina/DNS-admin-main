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

	// $('#domainDeleteModal').submit(function(event) {
	// 	event.preventDefault();

	// 	var input = $('#deleteDomain').val();
	// 	$.ajax({
	// 		type: 'GET',
	// 		url: '../php/delete/domain.php',
	// 		data: { domain_name: input },
	// 		success: function () {
	// 			$.getScript("../javascript/delete/domains.js", function () {
	// 				$('#domains').remove(domainHelper([{name: input}]));
	// 			});
	// 		}
	// 	});

// $('#deleteDomainBtn').submit(function(event){
//   event.preventDefault();
//   var id = $(this).attr('value');
//   console.log('Да');
//   $.ajax({
//     type: "POST",
//     url: "test.php",
//     data: { id: id },
//     success: function(response) {
//       // Обработка успешного ответа от сервера
//     },
//     error: function() {
//       // Обработка ошибки запроса
//     }
//   });
// });
