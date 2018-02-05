function toggleMenu(){
    var element = document.querySelector(".dropdown");
    element.classList.toggle("show");

    element = document.querySelector("main");
    element.classList.toggle("fade")
}