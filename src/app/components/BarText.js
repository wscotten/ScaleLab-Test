import React from 'react';
import PropTypes from 'prop-types';

const BarText = ({ color, text }) =>
  (<p
    style={{
      textAlign: 'center',
      marginTop: 5,
      marginBottom: 5,
      color,
    }}
  >{text}
  </p>);

BarText.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};

BarText.defaultProps = {
  color: '#333',
  text: '',
};

export default BarText;
