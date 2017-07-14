<?php

/**
 $form, &$form_state
 */

function my_form($form, &$form_state){
   $form['fname'] = array(
    '#type' => 'textfield',
    '#title' => t('First Name'),
   );
   $form['lname'] = array(
    '#type' => 'textfield',
    '#title' => t('Last Name'),
   );
   
    $form['#attached']['css']=array(
        drupal_get_path('module','my_module').'/css/mycss.css',
    );
    
    $form['#attached']['js']=array(
        
        drupal_get_path('module','my_module').'/js/myscript.js',
    );
    return $form;   
}




