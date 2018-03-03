# React Create Variant

Create variants of a react component with predefined props.

```js
import { createVariant } from 'react-create-variant';

const Button = props => <button {...props} />;

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
  type: 'button',
}

const SubmitButton = createVariant(Button, { type: 'submit' });
```
