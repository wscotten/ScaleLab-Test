import React from 'react';
import PropTypes from 'prop-types';

const BarText = ({ color = '#333', text }) =>
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
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const Bar = ({ topText, bottomText, height, backgroundColor }) =>
  (<div>
    <BarText color={backgroundColor} text={topText} />
    <div
      style={{
        width: 30,
        margin: 'auto',
        height,
        backgroundColor,
      }}
    />
    <BarText text={bottomText} />
  </div>);

Bar.propTypes = {
  topText: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default Bar;
