import React from 'react';
import PropTypes from 'prop-types';
import createVariant from '../../../src/createVariant';

export const Button = props => <button {...props} />;

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
  type: 'button',
};

export const SubmitButton = createVariant(
  Button,
  { type: 'submit' },
  'SubmitButton',
  { after: <span> &#8658;</span> },
);

export const ResetButton = createVariant(
  Button,
  { type: 'reset' },
  'ResetButton',
  { before: <span>&#8634; </span> },
);

export const PredefinedTextButton = createVariant(
  Button,
  { children: 'Predefined Text' },
  'PredefinedTextButton',
);
