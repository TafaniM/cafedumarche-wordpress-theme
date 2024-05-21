var $8973aab45c5aa6ba$exports = {};
//burgermenu
//burgermenu
//burgermenu
//burgermenu
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuDropdown = document.querySelector(".menu-dropdown");
    const closeButton = document.querySelector(".menu-dropdown .close-button");
    const menuLinks = document.querySelectorAll(".menu-dropdown a");
    const body = document.body;
    if (!menuToggle || !menuDropdown || !closeButton) {
        console.error("Un ou plusieurs \xe9l\xe9ments n\xe9cessaires n'ont pas \xe9t\xe9 trouv\xe9s.");
        return;
    }
    console.log("Tous les \xe9l\xe9ments n\xe9cessaires ont \xe9t\xe9 trouv\xe9s.");
    function isMenuOpen() {
        return menuDropdown.style.display === "block";
    }
    function openMenu() {
        console.log("Ouverture du menu");
        menuDropdown.style.display = "block";
        body.classList.add("disable-scroll");
        console.log("Classe 'disable-scroll' ajout\xe9e au body");
    }
    function closeMenu() {
        console.log("Fermeture du menu");
        menuDropdown.style.display = "none";
        body.classList.remove("disable-scroll");
        console.log("Classe 'disable-scroll' retir\xe9e du body");
    }
    menuToggle.addEventListener("click", function() {
        if (isMenuOpen()) closeMenu();
        else openMenu();
    });
    closeButton.addEventListener("click", closeMenu);
    menuLinks.forEach(function(link) {
        link.addEventListener("click", closeMenu);
    });
    menuDropdown.addEventListener("click", function(event) {
        if (event.target === menuDropdown) closeMenu();
    });
});
//carousel
//carousel
//carousel
//carousel
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".carousel img");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    let currentIndex = 0;
    function showImage(index) {
        images.forEach((img, i)=>{
            img.style.display = i === index ? "inline" : "none";
        });
    }
    prevButton.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });
    nextButton.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });
    // Initial display
    showImage(currentIndex);
});


//# sourceMappingURL=index.js.map
