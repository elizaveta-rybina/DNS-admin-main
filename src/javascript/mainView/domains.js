'use strict'

import { getDomain } from '../get/domains.js';
import { domainHelper } from '../frames/domains.js';

$(document).ready(function() {
	getDomain(
		function(response) 
		{
			$('#domains').append(domainHelper(response));
		});
});
