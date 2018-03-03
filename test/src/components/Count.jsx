import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createVariant from '../../../src/createVariant';

import { Button } from './Button';

export class Count extends Component {
  constructor(props) {
    super(props);
    this.state = { current: props.initial };
    this.increase = this.increase.bind(this);
  }

  increase() {
    const { increment } = this.props;
    const { current } = this.state;
    this.setState({ current: current + increment });
  }

  render() {
    const { increment } = this.props;
    const { current } = this.state;
    return (
      <div>
        <strong>{current}</strong>{' '}
        <Button onClick={this.increase}>
          increase by {increment}
        </Button>
      </div>
    );
  }
}

Count.propTypes = {
  initial: PropTypes.number.isRequired,
  increment: PropTypes.number,
};

Count.defaultProps = {
  increment: 1,
};

export const CountFrom10 = createVariant(
  Count,
  { initial: 10 },
  'CountFrom10',
);

export const CountBy5 = createVariant(
  Count,
  { increment: 5 },
  // 'CountBy5',
);
