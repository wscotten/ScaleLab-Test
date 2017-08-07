import React from 'react';
import PropTypes from 'prop-types';

const Bar = ({ topText, bottomText, height, backgroundColor }) =>
  (<div>
    <p style={{ color: backgroundColor }}>{topText}</p>
    <div
      style={{
        width: 30,
        margin: 'auto',
        height,
        backgroundColor,
      }}
    />
    <p>{bottomText}</p>
  </div>);

Bar.propTypes = {
  topText: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default Bar;
