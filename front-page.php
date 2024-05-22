<?php
/**
 * The template for displaying the front page.
 *
 * This is the template that displays the front page by default.
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context = Timber::context();

$timber_post     = new Timber\Post();
$context['post'] = $timber_post;

// Vérifier si la page actuelle est la page d'accueil
$context['is_front_page'] = is_front_page();

// Si c'est la page d'accueil, récupérer le contenu du carousel
if ($context['is_front_page']) {
    ob_start();
    include 'carousel.php'; // Inclure le fichier carousel.php
    $carousel_output = ob_get_clean();

    $context['carousel_output'] = $carousel_output;
}

// Rendre le template front-page.twig
Timber::render('front-page.twig', $context);
