var value = document.getElementById("value");

function updateBalance(valor)
{
    let sign = '-';
    if (valor) sign = '';
    window.location.href = 'index.html?balance=' + sign + value.value;
}