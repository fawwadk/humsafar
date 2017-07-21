<?php
/**
 * @file
 * The primary PHP file for this theme.
 */


function bootstrap_subtheme_preprocess_page(&$variables, $hook) {
    if (drupal_is_front_page()) {
       $variables['title'] = '';//$variables['node']->title;
    }
}