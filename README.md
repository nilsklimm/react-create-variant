# React Create Variant

Create variants of a react component with predefined props.

## Installation

```shell
npm install react-create-variant
```

## Usage

```js
// Buttons.js
import React from 'react';
import { createVariant } from 'react-create-variant';

const Button = props => <button {...props} />;

export const ResetButton = createVariant(Button, {
  type: 'reset',
  className: 'btn btn-secondary',
});
export const SubmitButton = createVariant(Button, {
  type: 'submit',
  className: 'btn btn-primary',
});

// Form.js
import React from 'react';
import { ResetButton, SubmitButton } from 'react';

const Form = () => (
  <form>
    ...
    <ResetButton />
    <SubmitButton />
  </form>
);
```
