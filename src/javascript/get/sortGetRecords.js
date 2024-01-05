"use strict";

import { getDomainId } from "../getDomainInfo.js";
import { getDomainName } from "../getDomainInfo.js";

var domain_id = getDomainId();
var domain_name = getDomainName();

export function getDataSort(callback){
  $.ajax({
    type: "GET",
    url: "../php/sort/recordTTL.php",
    dataType: "html",
    data: { domainid: domain_id },
    success: function (response) {
      callback(JSON.parse(response), JSON.parse(domain_name).name);
    },
  });
};

export function getDataSortDesc(callback){
  $.ajax({
    type: "GET",
    url: "../php/sort/recordsDesc.php",
    dataType: "html",
    data: { domainid: domain_id },
    success: function (response) {
      callback(JSON.parse(response), JSON.parse(domain_name).name);
    },
  });
};
