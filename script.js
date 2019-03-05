function alturaMinima() {
    var altura = document.documentElement.clientHeight - 50;

    document.getElementById("content").style.minHeight = altura+"px";
}

window.onload = alturaMinima();

function toggle() {
    if (document.querySelector("#menuContainer").style.display == 'flex') {
        document.querySelector("#menuContainer").style.display = 'none';
    }
    else {
        document.querySelector("#menuContainer").style.display = 'flex';
    }
}