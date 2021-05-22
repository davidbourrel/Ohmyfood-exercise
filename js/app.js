let heartSvg = document.querySelectorAll(".fa-heart");

heartSvg.forEach(element => {
    element.addEventListener("click", function(e) {
        element.classList.toggle("liked");
        e.preventDefault();
        e.stopPropagation();
    });
});



    

