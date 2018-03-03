import React from 'react';
import PropTypes from 'prop-types';
import propsSummary from './utils/propsSummary';

/**
 * @typedef {Object} Options
 * @property {Node} [before]
 * @property {Node} [after]
 */

/**
 * @param {Function} Component
 * @param {Object} props
 * @param {string} name
 * @param {Options} [options]
 */
export default function createVariant(
  Component,
  props,
  name,
  options = {},
) {
  const { children: defaultChildren, ...defaultProps } = props;
  const { before, after } = options;

  const Variant = ({ children: indvChildren, ...indvProps }) => (
    <Component {...defaultProps} {...indvProps}>
      {before}
      {indvChildren || defaultChildren}
      {after}
    </Component>
  );

  Variant.propTypes = {
    children: PropTypes.node,
  };

  Variant.defaultProps = {
    children: undefined,
  };

  const generatedName = `Variant(${
    Component.displayName ||
    Component.name ||
    'Component'
  }(${propsSummary(props)}))`;

  Variant.displayName = name || generatedName;

  return Variant;
}
