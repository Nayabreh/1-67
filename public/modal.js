function showimage(x) {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
    var modal_img = document.getElementById("modal-img")
    modal_img.setAttribute("src",x)
}
function onClosedImagModal(){
    var close = document.getElementById("modal")
    close.style.display = "none"
}