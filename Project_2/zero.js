var value = document.getElementById("value");

function updateBalance(valor)
{
    let sign = '-';
    if (valor) sign = '';
    window.location.href = 'index.html?balance=' + sign + value.value;
}

var micas = document.querySelectorAll(".mica");

function randomMica() {
    micas.forEach(mica => {
        mica.style.bottom = Math.floor(Math.random() * window.innerHeight) + "px";
        mica.style.right = Math.floor(Math.random() * window.innerWidth) + "px";
        mica.style.width = Math.floor(Math.random() * 30 + 10) + "vw";
        //mica.style.width = Math.floor(Math.random() * 15 + 10) + "vw";
        mica.style.filter = "hue-rotate(" + (Math.floor(Math.random() * 90) - 20) + "deg)";
    })
}

randomMica();
