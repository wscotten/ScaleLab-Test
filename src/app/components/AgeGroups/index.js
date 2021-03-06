import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Bar from '../Bar';
import './style.css';

const ageGroupConverter = {
  13: '13-17',
  18: '18-24',
  25: '25-34',
  35: '35-34',
  45: '45-54',
  55: '55+',
};

class AgeGroups extends PureComponent {
  render() {
    const { barColors, ageGroups } = this.props;
    return (
      <div className={'age-group-container'}>
        <h4>Age Groups</h4>
        <div className={'age-group-bar-container'}>
          {Object.keys(ageGroups).map(ageGroup =>
            (<Bar
              key={ageGroup}
              topText={`${Math.round(ageGroups[ageGroup])}%`}
              bottomText={ageGroupConverter[ageGroup]}
              height={Math.ceil(ageGroups[ageGroup] > 50 ? 50 : ageGroups[ageGroup])}
              backgroundColor={barColors[ageGroup]}
            />),
          )}
        </div>
      </div>
    );
  }
}

AgeGroups.propTypes = {
  barColors: PropTypes.shape({
    13: PropTypes.string.isRequired,
    18: PropTypes.string.isRequired,
    25: PropTypes.string.isRequired,
    35: PropTypes.string.isRequired,
    45: PropTypes.string.isRequired,
    55: PropTypes.string.isRequired,
  }).isRequired,
  ageGroups: PropTypes.shape({
    13: PropTypes.number.isRequired,
    18: PropTypes.number.isRequired,
    25: PropTypes.number.isRequired,
    35: PropTypes.number.isRequired,
    45: PropTypes.number.isRequired,
    55: PropTypes.number.isRequired,
  }).isRequired,
};

export default AgeGroups;
