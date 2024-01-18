'use strict';

import { srvHelper } from "../frames/srvrecords.js";

$(document).ready(function() {
	$('#exampleModalSRVRecord').submit(function(event) {
		let domainid = new URL(window.location.href).searchParams.get("domainid");
		event.preventDefault();

		$.ajax({
			type: 'GET',
			url: '../php/get/domainName.php',
			data: { id: new URL(window.location.href).searchParams.get("domainid") },
			success: function (domainName) {
				var SRVname = $('#SRVname').val();
        var SRVPriority = $('#SRVPriority').val();
        var SRVWeight = $('#SRVWeight').val();
        var SRVPort = $('#SRVPort').val();
        var SRVHost = $('#SRVHost').val();
        var SRVTTL = $('#SRVTTL').val();
				$.ajax({
					type: 'GET',
					url: '../php/add/srvrecord.php',
					data: { domainid: domainid, name: SRVname, priority: SRVPriority, weight: SRVWeight, port: SRVPort, host: SRVHost, TTL: SRVTTL},
					success: function () {
						$.getScript("../javascript/frames/srvrecords.js", function () {
							$('#records').prepend(srvHelper([{name: SRVname, priority: SRVPriority, weight: SRVWeight, port: SRVPort, host: SRVHost, TTL: SRVTTL}], JSON.parse(domainName).name));
						});
					}
				});
			}
		});
	});
});
