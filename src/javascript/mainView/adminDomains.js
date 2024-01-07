'use strict'

import { getDomain } from '../get/getAdminDomains.js';
import { domainHelper } from '../frames/admin.js';

import { addDomain } from '../add/domain.js';
import { deleteDomain } from '../delete/domain.js';
import { changeNameOfDomain } from '../changing/domain.js';


$(document).ready(function() {
	getDomain(
		function(response)
		{
			$('#domains').prepend(domainHelper(response));
	  }
  );

  $('#domains').on('submit', '#openDeleteModal', function(e){
    e.preventDefault();
    var values = $('#openDeleteModal').serializeArray();
    $('#deleteDomainForm').submit(function() {
      var value = values[0].value;
      var name = values[0].name;
      deleteDomain(
        function(){
          $('#domains').remove(domainHelper([{name: name}]));
        },
        value
      )
      $('#openDeleteModal').modal('hide');
    });

  })

  $('#domains').on('submit', '#changeNameOfDomainForm', function(e){
    e.preventDefault();
    var values = $('#changeNameOfDomainForm').serializeArray();
    $('#changeNameOfDomain').submit(function() {

      var input = $('#changeNameInput').val();

      var id = values[0].name;
      changeNameOfDomain(
        function()
        {
          $('#domain').html(domainHelper([{name: input}]))
        },
        input, id
      );
      $('#changeNameOfDomainForm').modal('hide');
      location. reload();
      getDomain(function(response)
      {
        $('#domains').prepend(domainHelper(response));
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
    location. reload();
    getDomain(function(response)
		{
			$('#domains').prepend(domainHelper(response));
	  });
  })
});
