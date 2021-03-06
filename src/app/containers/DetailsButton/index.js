import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.css';
import { toggleDetailsButton } from './actions';

class style extends PureComponent {
  handleClick = () => this.props.detailsButtonClicked();
  render() {
    const { detailsShown } = this.props;
    return (
      <div className={'details-button-container'}>
        <div
          role="button"
          tabIndex={0}
          className={'detailsButton'}
          onClick={this.handleClick}
        >Details&nbsp;
          <svg>
            {detailsShown
              ? <path d="M0 0 L8 10 L16 0" />
              : <path d="M0 10 L8 0 L16 10" />
            }
          </svg>
        </div>
      </div>
    );
  }
}

style.propTypes = {
  detailsShown: PropTypes.bool.isRequired,
  detailsButtonClicked: PropTypes.func.isRequired,
};

const mapStateToProps = ({ detailsShown }) => ({
  detailsShown,
});

const mapDispatchToProps = dispatch => ({
  detailsButtonClicked: () => {
    dispatch(toggleDetailsButton());
  },
});

const DetailsButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(style);

export default DetailsButtonContainer;
