'use strict'

import { getDomain } from '../get/getAdminDomains.js';
import { domainHelper } from '../frames/admin.js';

import { addDomain } from '../add/domain.js';


$(document).ready(function() {
	getDomain(
		function(response)
		{
			$('#domains').prepend(domainHelper(response));
	  }
  );

  $('#domains').on('submit', '.deleteDomainForm', function(e){
    e.preventDefault();
    $('.btnDelete').click(function() {
      var value = $(this).val();
      $(this).css('background-color', 'red');
      $.ajax({
            type: "GET",
            url: "../php/delete/domain.php",
            data: { id: value },
            success: function() {
              location. reload()
            },
            error: function() {
              console.log('error')
            }
          });
    });
  })

  $('#domains').on('submit', '.changeNameOfDomain', function(e){
    e.preventDefault();
    const inp = document.querySelector('#changeNameInput');
    $('.changeNameBtn').click(function() {
      var value = $(this).val();
      console.log(value);
    })
  })


  $('#AddDomain').submit(function(event) {
    event.preventDefault();

    var input = $('#domainInput').val();

    addDomain(
      function()
      {
        $('#domain').html(domainHelper([{name: input}]))
      },
      input
    );
    $('#AddDomain').modal('hide');
    getDomain(function(response)
		{
			$('#domains').prepend(domainHelper(response));
	  });
  })
});
