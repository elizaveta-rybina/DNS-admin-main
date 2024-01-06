$(document).ready(function() {
  const myForm = document.getElementById('addFileZone');
  const inpFile = document.getElementById('inpFile');

  myForm.addEventListener("submit", e => {
    e.preventDefault();
    const endpoint = "../php/zones/upload.php";
    const formData = new FormData();

    formData.append("inpFile", inpFile.files[0]);

    fetch(endpoint, {
      method: "post",
      body: formData
    }).catch(console.log("Пизда"));

  });
});
