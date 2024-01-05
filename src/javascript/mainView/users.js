'use strict'

import { getUsers } from '../get/getUsers.js';
import { usersHelper } from '../frames/users.js';

$(document).ready(function() {
	getUsers(
		function(response)
		{
			$('#users').prepend(usersHelper(response));
	  }
  );
});
