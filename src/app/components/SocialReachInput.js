import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SocialReachInput extends PureComponent {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
  }
  update(e) {
    this.props.modalValueChanged(this.props.platform, e.target.value);
  }
  render() {
    return (
      <input
        type="text"
        max="100000000"
        value={this.props.value}
        onChange={this.update}
      />
    );
  }
}

SocialReachInput.propTypes = {
  modalValueChanged: PropTypes.func.isRequired,
  value: PropTypes.number,
  platform: PropTypes.string.isRequired,
};

export default SocialReachInput;