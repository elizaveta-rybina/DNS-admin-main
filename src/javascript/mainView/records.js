'use strict'

import { getRecord } from '../get/records.js';

import { aHelper } from '../frames/arecords.js';
import { mxHelper } from '../frames/mxrecords.js';

import { getDomainName } from '../getDomainInfo.js';

$(document).ready(function() {
  var domainName = getDomainName();
  domainName = JSON.parse(domainName).name;

  //ARecord
	getRecord(
		function(response)
		{
			$('#records').append(aHelper(response, domainName));
		},
  'arecord');

  //MXRecord
  getRecord(
		function(response)
		{
			$('#records').append(mxHelper(response, domainName));
		},
  'mxrecord');
});
