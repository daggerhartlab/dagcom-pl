<?php

namespace Tanager\PatternLibrary;

class Attribute implements \IteratorAggregate, \Countable {

	protected $items;

	public function __construct( $items = [] ) {
		$this->items = $items;
	}

	/**
	 * @param mixed $items
	 *
	 * @return array|static
	 */
	public static function create( $items = [] ) {
		if ( is_array( $items ) ) {
			return new static( $items );
		}

		// If it's not an array, then it should be a string or a drupal Attribute object.
		return $items;
	}

	/**
	 * @param $name
	 *
	 * @return mixed
	 */
	public function __get( $name ) {
		return $this->items[ $name ];
	}

	/**
	 * @param $name
	 * @param $value
	 */
	public function __set( $name, $value ) {
		$this->items[ $name ] = $value;
	}

	/**
	 * Convert the store of items into a string of HTML attributes.
	 *
	 * @return string
	 */
	public function __toString() {
		$attributes = [];

		foreach ($this->items as $name => $value) {
			if ( is_array( $value ) ) {
				$value = implode( ' ', $value );
			}
			$attributes[] = "{$name}='{$value}'";
		}

		if ( empty( $attributes ) ) {
			return '';
		}

		return ' ' . implode(' ', $attributes);
	}

	/**
	 * {@inheritDoc}
	 */
	public function getIterator() {
		return new \ArrayIterator( $this->items );
	}

	/**
	 * Counts all the results collected by the iterators.
	 *
	 * @throws \Exception
	 */
	public function count() {
		return iterator_count( $this->getIterator() );
	}

}
