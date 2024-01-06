'use strict'

import { getJson as domainSearchJson } from '../get/searchMain.js';
import { domainHelper as domainsCreateView} from '../frames/admin.js';

$(document).ready(function()
{
 	$('.search-box').submit(function(event)
	{
		event.preventDefault();

    var searchInput = $('#inputBox').val();
		domainSearchJson(searchInput, function(json)
		{
      $('#domains').html("");
			$('#domains').append(domainsCreateView(json));
		});
	});
});
