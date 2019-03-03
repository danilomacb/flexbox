function alturaMinima() {
    var altura = document.documentElement.clientHeight - 50;

    document.getElementById("content").style.minHeight = altura+"px";
}

window.onload = alturaMinima();