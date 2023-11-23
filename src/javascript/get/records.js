"use strict";

import { getDomainId } from "../getDomainInfo.js";
import { getDomainName } from "../getDomainInfo.js";

export function getRecord(callback, tableName){
  var domain_id = getDomainId();
  var domain_name = getDomainName();
  $.ajax({
    type: "GET",
    url: "../php/get/records.php",
    dataType: "html",
    data: { table: tableName, domainid: domain_id },
    success: function (response) {
      callback(JSON.parse(response), JSON.parse(domain_name).name);
    },
  });
};

