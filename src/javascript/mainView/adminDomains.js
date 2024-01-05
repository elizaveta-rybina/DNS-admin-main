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
