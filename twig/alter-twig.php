<?php

require_once __DIR__ . '/extensions/Attribute.php';
require_once __DIR__ . '/extensions/Drupal.php';

/**
 * @param Twig_Environment $env - The Twig Environment - https://twig.symfony.com/api/1.x/Twig_Environment.html
 * @param $config - Config of `@basalt/twig-renderer`
 */
function addCustomExtension(\Twig_Environment &$env, $config) {

  $env->addFunction(new \Twig_SimpleFunction('create_attribute', '\Tanager\PatternLibrary\Attribute::create'));
  $env->addFilter(new \Twig_SimpleFilter('t', '\Tanager\PatternLibrary\Drupal::t', ['is_safe' => ['html']]));
  $env->addGlobal('pattern_assets_dir', 'global');

  /*
   * Reverse a string
   * @param string $theString
   * @example `<p>{{ reverse('abc') }}</p>` => `<p>cba</p>`
   */
//  $env->addFunction(new \Twig_SimpleFunction('reverse', function ($theString) {
//    return strrev($theString);
//  }));


//  $env->addExtension(new \My\CustomExtension());

//  `{{ foo }}` => `bar`
//  $env->addGlobal('foo', 'bar');

  // example of enabling the Twig debug mode extension (ex. {{ dump(my_variable) }} to check out the template's available data) -- comment out to disable
  // $env->addExtension(new \Twig_Extension_Debug());

}
