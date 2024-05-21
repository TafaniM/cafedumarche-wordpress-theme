var $8973aab45c5aa6ba$exports = {};
//burgermenu
//burgermenu
//burgermenu
//burgermenu
// Sélectionnez le bouton du menu burger
const $8973aab45c5aa6ba$var$menuToggle = document.querySelector(".menu-toggle");
// Sélectionnez le menu déroulant
const $8973aab45c5aa6ba$var$menuDropdown = document.querySelector(".menu-dropdown");
// Sélectionnez l'image de la croix pour fermer le menu déroulant
const $8973aab45c5aa6ba$var$closeButton = document.querySelector(".menu-dropdown img");
// Ajoutez un écouteur d'événements de clic au bouton du menu burger
$8973aab45c5aa6ba$var$menuToggle.addEventListener("click", function() {
    // Affichez ou masquez le menu déroulant
    $8973aab45c5aa6ba$var$menuDropdown.style.display === "none" ? $8973aab45c5aa6ba$var$menuDropdown.style.display = "block" : $8973aab45c5aa6ba$var$menuDropdown.style.display = "none";
    // Ajoutez ou supprimez la classe pour bloquer le défilement
    document.body.classList.toggle("disable-scroll");
});
// Ajoutez un écouteur d'événements de clic à l'image de la croix
$8973aab45c5aa6ba$var$closeButton.addEventListener("click", function() {
    // Masquez le menu déroulant lorsque vous cliquez sur la croix
    $8973aab45c5aa6ba$var$menuDropdown.style.display = "none";
    // Supprimez la classe pour bloquer le défilement
    document.body.classList.remove("disable-scroll");
});
// Sélectionnez tous les liens dans le menu déroulant
const $8973aab45c5aa6ba$var$menuLinks = document.querySelectorAll(".menu-dropdown a");
// Parcourir tous les liens et ajouter un gestionnaire d'événements de clic
$8973aab45c5aa6ba$var$menuLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        // Masquez le menu déroulant lorsque vous cliquez sur un lien
        $8973aab45c5aa6ba$var$menuDropdown.style.display = "none";
        // Supprimez la classe pour bloquer le défilement
        document.body.classList.remove("disable-scroll");
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
