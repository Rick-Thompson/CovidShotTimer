window.addEventListener('DOMContentLoaded', function () {

    document.getElementById("save").addEventListener("click", function () {
        localStorage.setItem("username", document.getElementById("user").value);
        localStorage.setItem("password", document.getElementById("pass").value);
    });

    //  var username = localStorage.getItem("username");
    //  var password = localStorage.getItem("password");


});