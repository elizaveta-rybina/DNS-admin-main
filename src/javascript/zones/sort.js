"use strict";

import { getDataZones } from '../get/sortGetDomain.js';
import { getDataSortZonesDesc } from '../get/sortGetDomain.js';
import { domainHelperZones } from '../frames/zones.js';

const btn = document.getElementsByClassName("sortByName")[0];

$(document).ready(function(){
  $(".sortByName").click(function(){
    if (btn.classList == "sortByName"){
      getDataZones(
        function(response)
        {
            $('#domains').html(domainHelperZones(response));
            btn.classList.remove("sortByName");
            btn.classList.add("sortByNameDesc");
        }
    );
    }
    else{
      getDataSortZonesDesc(
        function(response)
        {
            $('#domains').html(domainHelperZones(response));
            btn.classList.remove("sortByNameDesc");
            btn.classList.add("sortByName");
        }
      );
    }
  });
});

