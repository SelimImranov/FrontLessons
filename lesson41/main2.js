var free = document.querySelectorAll(".ring")

free.forEach(iki => {
    iki.addEventListener("click", function () {
        console.log()
        var deyisen = iki.firstElementChild.firstElementChild.nextElementSibling.firstElementChild
        

        deyisen.classList.remove("d-none")

    });
})
// firstElementChild.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling