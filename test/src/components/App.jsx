import React, { Fragment } from 'react';

import { Button, SubmitButton, ResetButton, PredefinedTextButton } from './Button';
import { Count, CountFrom10, CountBy5 } from './Count';

export default (
  <Fragment>
    <h1>Functional Components</h1>

    <Button>Button</Button>
    <SubmitButton>Submit Button</SubmitButton>
    <ResetButton>Reset Button</ResetButton>
    <PredefinedTextButton>Individual Text</PredefinedTextButton>
    <PredefinedTextButton />

    <h1>Class Components</h1>

    <Count initial={0} />
    <CountFrom10 />
    <CountBy5 initial={0} />
  </Fragment>
);
