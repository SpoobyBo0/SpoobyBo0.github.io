var btn = document.getElementById("bokBtn");

btn.onclick = function (event) {
    event.preventDefault();

    var modal = document.getElementById('myModal');
    modal.style.display = "block";

    setTimeout(function () {
        window.location.href = "index.html";
    }, 3000);
}