function alturaMinima() {
    var altura = document.documentElement.clientHeight - 50;

    document.getElementById("content").style.minHeight = altura+"px";
}

window.onload = alturaMinima();

function toggle() {
    document.getElementById("menuContainer").style.display = "flex";
}