let DragonAzul = document.getElementsByClassName ("Dragon-Azul");

function MoverScroll () {
    let scrollTop = document.documentElement.scrollTop

    for (var i=0; i < DragonAzul.length; i++ ) {
        let alturaDragonAzul = DragonAzul[i].offsetTop;
        if (alturaDragonAzul - 200 < scrollTop){
            DragonAzul[i].style.opacity = 1;
            
        }
    }
}
window.addEventListener("scroll");

