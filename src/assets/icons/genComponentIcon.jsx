import React from 'react';
import PropTypes from 'prop-types';

export default function genComponentIcon(children, viewBox, defaulSize) {
  function Icon({ size, color }) {
    return (
      <svg viewBox={viewBox} height={size} width={size} fill={color}>
        {children}
      </svg>
    );
  }
  Icon.defaultProps = {
    size: defaulSize,
    color: '#000',
  };
  Icon.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
  };
  return Icon;
}
