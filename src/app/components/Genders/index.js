import React from 'react';
import PropTypes from 'prop-types';
import Bar from '../Bar';
import './style.css';

const Genders = ({ barColors, genders }) =>
  (<div className={'genders-container'}>
    <h4>Genders</h4>
    <div className={'genders-bar-container'}>
      {Object.keys(genders).map(gender =>
        (<Bar
          key={gender}
          topText={`${Math.round(genders[gender])}%`}
          bottomText={gender}
          height={Math.ceil(genders[gender] > 50 ? 50 : genders[gender])}
          backgroundColor={barColors[gender]}
        />),
      )}
    </div>
  </div>);

Genders.propTypes = {
  barColors: PropTypes.shape({
    male: PropTypes.string.isRequired,
    female: PropTypes.string.isRequired,
  }).isRequired,
  genders: PropTypes.shape({
    male: PropTypes.number.isRequired,
    female: PropTypes.number.isRequired,
  }).isRequired,
};

export default Genders;
