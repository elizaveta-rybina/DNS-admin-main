"use strict";

// $(document).ready(function () {
// 	let domainid = new URL(window.location.href).searchParams.get("domainid");

// 	$.ajax({
// 		type: 'GET',
// 		url: '../php/get/domainName.php',
// 		data: { id: new URL(window.location.href).searchParams.get("domainid") },
// 		success: function (domainName) {
// 			$.ajax({
// 				type: "GET",
// 				url: "../php/get/records.php",
// 				dataType: "html",
// 				data: { table: "arecord", domainid: domainid },
// 				success: function (response) {
// 					$.getScript("../javascript/frames/arecords.js", function () {
// 						$('#records').append(aHelper(JSON.parse(response), JSON.parse(domainName).name));
// 					});
// 				},
// 			});
// 		}
// 	});
// });

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

// export function getARecord(callback){
//   var domainid = getDomainId();
//   $.ajax({
//     		type: 'GET',
//     		url: '../php/get/domainName.php',
//     		data: { id: domainid},
//     		success: function (domainName) {
//           getRecord(domainid, domainName, callback)
//     		}
//     	});
// };

