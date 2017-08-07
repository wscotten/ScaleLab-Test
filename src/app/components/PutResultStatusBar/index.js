import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import './style.css';

const style = ({ putResultStatus }) =>
  (putResultStatus !== null ?
    (<div className={'put-result-status-container'}>
      {putResultStatus &&
        <Alert bsStyle="success">
        Success!
        </Alert>
      }
      {!putResultStatus &&
        <Alert bsStyle="danger">
        Error!
        </Alert>
      }
    </div>)
  : null);

style.defaultProps = {
  putResultStatus: null,
};

style.propTypes = {
  putResultStatus: PropTypes.bool,
};

const mapStateToProps = ({ putResultStatus }) => ({
  putResultStatus,
});

const PutResultStatusBar = connect(
  mapStateToProps,
)(style);

export default PutResultStatusBar;
