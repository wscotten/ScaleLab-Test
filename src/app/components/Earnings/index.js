import React from 'react';
import PropTypes from 'prop-types';
import Bar from '../Bar';
import './style.css';

const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
  'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'n/a',
];

const Earnings = ({ barColor, earnings }) => {
  const grossPerMonthArray = earnings.map(month => month.gross);
  const highestMonth = Math.max(...grossPerMonthArray);
  return (
    <div className={'earnings-container'}>
      <h4>Earnings</h4>
      <div className={'earnings-bar-container'}>
        {earnings.map(({ month, gross, id }) =>
          (<Bar
            key={id}
            topText={`$${gross.toLocaleString()}`}
            bottomText={months[month - 1]}
            height={Math.ceil(gross === highestMonth ? 50 : (gross / highestMonth) * 50)}
            backgroundColor={barColor}
          />),
        )}
      </div>
    </div>
  );
};

Earnings.propTypes = {
  barColor: PropTypes.string.isRequired,
  earnings: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    channel_id: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    gross: PropTypes.number.isRequired,
  })).isRequired,
};

export default Earnings;
