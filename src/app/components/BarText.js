import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class BarText extends PureComponent {
  render() {
    const { color, text } = this.props;
    return (
      <p
        style={{
          textAlign: 'center',
          marginTop: 5,
          marginBottom: 5,
          color,
        }}
      >{text}
      </p>
    );
  }
}

BarText.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};

BarText.defaultProps = {
  color: '#333',
  text: '',
};

export default BarText;
