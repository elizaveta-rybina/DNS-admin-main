"use strict"

$(document).ready(function(){
  
    const record = document.getElementById("ARecord");
    const modal = document.getElementById("exampleModalARecord");
    const error = document.getElementById("error");

    modal.addEventListener("sumbit", (e) => {
      const errors = [];

      if (record.length > 12){
        errorMsgs.push("Too long!");
      }

      if(errors.length > 0){
        e.preventDefault();
        error.toggleAttribute('hidden');
        error.innerHTML = errors.join(', ');
      }
    });

    const input = document.getElementsByClassName("form-control");
    const button = document.getElementsByClassName("btn-primary");

    button.disabled = true;

    //input.addEventListener("input", function() {
    //  button.disabled = !this.value.length;
    //});

  $('.delete').click(function (){
    var row = $(this);
    $('#sure_delete').click(function(){
      row.closest('.form-body', row).remove();
      $('#exampleModal').modal('toggle');
    });
  });
});
