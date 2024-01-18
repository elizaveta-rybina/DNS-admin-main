'use strict'

import { getRecord } from '../get/records.js';

import { aHelper } from '../frames/arecords.js';
import { mxHelper } from '../frames/mxrecords.js';
import { txtHelper } from '../frames/txtrecords.js';
import { a4Helper } from '../frames/a4records.js';
import { srvHelper } from '../frames/srvrecords.js';
import { cnameHelper } from '../frames/cnamerecords.js';

import { deleteRecords } from '../delete/records.js';

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

  //Удаление DNS-записи
  $('#records').on('submit', '#openDeleteModal', function(e){
    e.preventDefault();
    var values = $('#openDeleteModal').serializeArray();

    $('#deleteRecordFormA').submit(function() {
      var value = values[0].value;
      var name = values[0].name;
      deleteRecords(
        function(){
          $('#records').remove(aHelper([{name: name}]));
        },
        value, 'arecord'
      )
      $('#openDeleteModal').modal('hide');
      location. reload()
    });
  })
});
