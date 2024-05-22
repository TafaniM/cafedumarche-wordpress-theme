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

// Récupérer les images associées à la taxonomie 'recipe'
$args = array(
    'post_type'      => 'attachment',
    'post_status'    => 'inherit',
    'posts_per_page' => -1,
    'tax_query'      => array(
        array(
            'taxonomy' => 'recipe',
            'field'    => 'slug',
            'terms'    => 'recipe',
        ),
    ),
);

$images_query = new WP_Query( $args );

$images = array();

if ( $images_query->have_posts() ) {
    while ( $images_query->have_posts() ) {
        $images_query->the_post();
        $images[] = array(
            'url'  => wp_get_attachment_url(),
            'alt'  => get_post_meta( get_the_ID(), '_wp_attachment_image_alt', true ),
        );
    }
}

// Récupérer les données du post principal (front page)
$front_page_post = new Timber\Post();

// Filtrer les images du contenu principal
$front_page_post->content = filter_content_images($front_page_post->content);

// Ajouter les données du post principal au contexte
$context['front_page_post'] = $front_page_post;

// Ajouter les images au contexte
$context['images'] = $images;

// Rendre le template front-page.twig
Timber::render( 'front-page.twig', $context );

// Définition de la fonction pour filtrer les images
function filter_content_images($content) {
    // Supprimer toutes les balises d'image du contenu
    $content = preg_replace('/<img[^>]+>/', '', $content);
    return $content;
}
