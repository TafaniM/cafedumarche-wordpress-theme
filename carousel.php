<?php
/**
 * Template part for displaying carousel images.
 *
 * @package WordPress
 * @subpackage Your_Theme_Name
 * @since 1.0
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

$context['images'] = $images;

// Rendre le template carousel.twig
Timber::render( 'carousel.twig', $context );
