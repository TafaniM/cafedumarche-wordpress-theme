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
const $8973aab45c5aa6ba$var$carousel = document.querySelector(".carousel");
const $8973aab45c5aa6ba$var$leftArrow = document.querySelector(".left-arrow");
const $8973aab45c5aa6ba$var$rightArrow = document.querySelector(".right-arrow");
let $8973aab45c5aa6ba$var$currentIndex = 0;
const $8973aab45c5aa6ba$var$totalImages = $8973aab45c5aa6ba$var$carousel.children.length;
// Fonction pour faire défiler le carousel vers la gauche
function $8973aab45c5aa6ba$var$scrollLeft() {
    if ($8973aab45c5aa6ba$var$currentIndex > 0) $8973aab45c5aa6ba$var$currentIndex--;
    else $8973aab45c5aa6ba$var$currentIndex = $8973aab45c5aa6ba$var$totalImages - 1; // Aller à la dernière image si on est à la première
    $8973aab45c5aa6ba$var$updateCarousel();
}
// Fonction pour faire défiler le carousel vers la droite
function $8973aab45c5aa6ba$var$scrollRight() {
    if ($8973aab45c5aa6ba$var$currentIndex < $8973aab45c5aa6ba$var$totalImages - 1) $8973aab45c5aa6ba$var$currentIndex++;
    else $8973aab45c5aa6ba$var$currentIndex = 0; // Revenir à la première image si on est à la dernière
    $8973aab45c5aa6ba$var$updateCarousel();
}
// Met à jour la position du carousel
function $8973aab45c5aa6ba$var$updateCarousel() {
    $8973aab45c5aa6ba$var$carousel.style.transform = `translateX(-${$8973aab45c5aa6ba$var$currentIndex * 100}%)`;
}
// Ajoutez des écouteurs d'événements de clic aux flèches
$8973aab45c5aa6ba$var$leftArrow.addEventListener("click", $8973aab45c5aa6ba$var$scrollLeft);
$8973aab45c5aa6ba$var$rightArrow.addEventListener("click", $8973aab45c5aa6ba$var$scrollRight);
// Fonction pour faire défiler le carousel vers la gauche
function $8973aab45c5aa6ba$var$scrollLeft() {
    if ($8973aab45c5aa6ba$var$currentIndex > 0) $8973aab45c5aa6ba$var$currentIndex--;
    else {
        $8973aab45c5aa6ba$var$currentIndex = $8973aab45c5aa6ba$var$totalImages - 1; // Aller à la dernière image si on est à la première
        $8973aab45c5aa6ba$var$carousel.style.transition = "none"; // Désactiver la transition pour un mouvement instantané
        $8973aab45c5aa6ba$var$carousel.style.transform = `translateX(-${$8973aab45c5aa6ba$var$totalImages * 100}%)`; // Faire avancer le carousel d'une longueur d'une image supplémentaire vers la droite
        setTimeout(()=>{
            $8973aab45c5aa6ba$var$carousel.style.transition = "transform 0.5s ease-in-out"; // Réactiver la transition pour une animation fluide
            $8973aab45c5aa6ba$var$currentIndex = $8973aab45c5aa6ba$var$totalImages - 1; // Mettre à jour l'index actuel à la dernière image
            $8973aab45c5aa6ba$var$carousel.style.transform = `translateX(-${$8973aab45c5aa6ba$var$currentIndex * 100}%)`; // Afficher la dernière image
        }, 0); // Attendre une petite période avant de réactiver la transition
    }
} // // Fonction pour faire défiler le carousel vers la droite
 // function scrollRight() {
 //   if (currentIndex < totalImages - 1) {
 //     currentIndex++;
 //   } else {
 //     currentIndex = 0; // Revenir à la première image si on est à la dernière
 //   }
 //   updateCarousel();
 // }


//# sourceMappingURL=index.43966231.js.map
