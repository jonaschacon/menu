function menuShow() {
    let myBox = document.querySelector(".myBox");
    if(myBox.classList.contains("open")){
        myBox.classList.remove("open");
        document.querySelector(".image").src = "imagens/menu_48dp_FILL0_wght400_GRAD0_opsz48.png"
    } else {
        myBox.classList.add("open");
        document.querySelector(".image").src = "imagens/close_48dp_FILL0_wght400_GRAD0_opsz48.png"
    }
}