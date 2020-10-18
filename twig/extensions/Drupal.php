<?php

namespace Tanager\PatternLibrary;

class Drupal
{

	public static function t($string, array $args = [], array $options = []) {
		// Just a pass through, pretending to be Drupal.
		return $string;
	}

}
