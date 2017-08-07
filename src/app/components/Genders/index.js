import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Bar from '../Bar';
import './style.css';

const style = ({ barColors, genders }) =>
  (<div className={'genders-container'}>
    <h4>Genders</h4>
    <div className={'genders-bar-container'}>
      {Object.keys(genders).map(gender =>
        (<Bar
          key={gender}
          topText={`${Math.round(genders[gender])}%`}
          bottomText={gender}
          height={genders[gender] > 60 ? 40 : 10 + ((1 / 2) * genders[gender])}
          backgroundColor={barColors[gender]}
        />),
      )}
    </div>
  </div>);

style.propTypes = {
  barColors: PropTypes.shape({
    male: PropTypes.string.isRequired,
    female: PropTypes.string.isRequired,
  }).isRequired,
  genders: PropTypes.shape({
    male: PropTypes.number.isRequired,
    female: PropTypes.number.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ genders }) => ({
  genders,
});

const Genders = connect(
  mapStateToProps,
)(style);

export default Genders;
