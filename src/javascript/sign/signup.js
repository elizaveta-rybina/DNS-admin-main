'use strict'

$(document).ready(function()
{
    $('#addUser').on('submit', function(e)
        {
            e.preventDefault();
            var formData = $('#addUser').serializeArray();

            var name = formData[0]['value'];
            var lastName = formData[1]['value'];
            var FatherName = formData[2]['value'];
            var email = formData[3]['value'];
            var login = formData[4]['value'];
            var password = formData[5]['value'];

            $.ajax({
                type: 'POST',
                data: { name: name, lastName: lastName, FatherName: FatherName, email: email, login: login, password: password},
                url: '../php/sign/signup.php',
                success: function(response)
                {
                  location. reload()
                }
            });
        });
});


//cGPtUlOA
