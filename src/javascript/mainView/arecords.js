'use strict'

import { getARecord } from '../get/arecords.js';
import { aHelper } from '../frames/arecords.js';

import { getDomainName } from '../getDomainInfo.js';

$(document).ready(function() {
  var domainName = getDomainName();
	getARecord(
		function(response)
		{
			$('#records').append(aHelper(response, JSON.parse(domainName).name));
		});
});
