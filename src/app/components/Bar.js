import React from 'react';
import PropTypes from 'prop-types';
import BarText from './BarText';

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

Bar.defaultProps = {
  topText: '',
  bottomText: '',
};

Bar.propTypes = {
  topText: PropTypes.string,
  bottomText: PropTypes.string,
  height: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default Bar;
