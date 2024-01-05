"use strict";

import { getDataSort } from '../get/sortGetRecords.js';
import { getDataSortDesc } from '../get/sortGetRecords.js';
import { getRecord } from '../get/records.js';

import { aHelper } from '../frames/arecords.js';
import { mxHelper } from '../frames/mxrecords.js';
import { txtHelper } from '../frames/txtrecords.js';
import { a4Helper } from '../frames/a4records.js';
import { srvHelper } from '../frames/srvrecords.js';
import { cnameHelper } from '../frames/cnamerecords.js';

const btn = document.getElementsByClassName("sortByTTL")[0];

$(document).ready(function(){
  $(".sortByTTL").click(function(){
    if (btn.classList == "sortByTTL"){
      getDataSort(
        function(response)
        {
            $('#records').html(srvHelper(response));

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
            btn.classList.remove("sortByTTL");
            btn.classList.add("sortByTTLDesc");
        }
    );
    }
    else{
      getDataSortDesc(
        function(response)
        {
            $('#records').html(srvHelper(response));

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
            btn.classList.remove("sortByTTLDesc");
            btn.classList.add("sortByTTL");
        }
    );
    }
  });
});

