'use strict'

$(document).ready(function()
{
    $('#login-form').on('submit', function(e)
        {
            e.preventDefault();
            var formData = $('#login-form').serializeArray();

            var login = formData[0]['value'];
            var password = formData[1]['value'];

            window.location.href = "http://localhost/pages/adminpanel.html";
            window.location.replace("http://localhost/pages/adminpanel.html");

            // $.ajax({
            //     method: "POST",
            //     data: { login: login, password: password },
            //     url: '../php/sign/signin.php',
            //     success: function(response)
            //     {
            //         if(JSON.parse(response)['Message'] == "Admin")
            //         {
            //             window.location.href = "http://localhost/pages/adminpanel.html";
            //             window.location.replace("http://localhost/pages/adminpanel.html");
            //         }
            //         console.log(JSON.parse(response)['Message']);
            //     }
            // });
        });
});
