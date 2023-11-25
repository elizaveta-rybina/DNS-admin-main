'use strict'

export function getJson(inputBox, callback)
{
	$.ajax({
		type: 'GET',
		url: '../php/search/searchDomain.php',
		data: { inputBox: inputBox },
		success: function(json)
		{
			callback(JSON.parse(json));
		},
    error: function(json){
      console.log(json.responseText);
    }
	});
}
