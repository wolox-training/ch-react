import React from 'react';
import PropTypes from 'prop-types';

const Square = props => (
  <button className="square" onClick={() => props.onClick()}>
    {props.value}
  </button>
);

Square.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.number
};

export default Square;
