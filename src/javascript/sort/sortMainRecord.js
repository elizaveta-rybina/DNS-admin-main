"use strict";

import { getDataSort } from '../get/sortGetRecords.js';
import { getDataSortDesc } from '../get/sortGetRecords.js';

import { domainHelper} from '../frames/domains.js';

const btn = document.getElementsByClassName("sortByName")[0];

$(document).ready(function(){
  $(".sortByName").click(function(){
    if (btn.classList == "sortByName"){
      getDataSort(
        function(response)
        {
            $('#domains').html(domainHelper(response));
            btn.classList.remove("sortByName");
            btn.classList.add("sortByNameDesc");
        }
    );
    }
    else{
      getDataSortDesc(
        function(response)
        {
            $('#domains').html(domainHelper(response));
            btn.classList.remove("sortByNameDesc");
            btn.classList.add("sortByName");
        }
      );
    }
  });
});

