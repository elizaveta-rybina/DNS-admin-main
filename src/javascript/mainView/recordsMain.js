'use strict'

import { getRecord } from '../get/records.js';

import { aHelper } from '../framesMain/arecords.js';
import { mxHelper } from '../framesMain/mxrecords.js';
import { txtHelper } from '../framesMain/txtrecords.js';
import { a4Helper } from '../framesMain/a4records.js';
import { srvHelper } from '../framesMain/srvrecords.js';
import { cnameHelper } from '../framesMain/cnamerecords.js';

$(document).ready(function() {
  //ARecord
	getRecord(
		function(response)
		{
			$('#records').append(aHelper(response));
		},
  'arecord');

  //MXRecord
  getRecord(
		function(response)
		{
			$('#records').append(mxHelper(response));
		},
  'mxrecord');

  //SRVRecord
  getRecord(
		function(response)
		{
			$('#records').append(srvHelper(response));
		},
  'srvrecord');

  //TXTRecord
  getRecord(
		function(response)
		{
			$('#records').append(txtHelper(response));
		},
  'txtrecord');

  //A4Record
  getRecord(
		function(response)
		{
			$('#records').append(a4Helper(response));
		},
  'a4record');

  //CNAMERecord
  getRecord(
		function(response)
		{
			$('#records').append(cnameHelper(response));
		},
  'cnamerecord');

  //Изменение значений для А записи

});
