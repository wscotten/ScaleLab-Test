import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.css';

const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
  'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'n/a',
];

const grossToHeightConverter = (currentMonth, highestMonth) =>
  (currentMonth / highestMonth < 0.5 ? 30 : 30 + ((currentMonth / highestMonth) * 30));

const style = ({ barColor, monthsToShow, earnings }) => {
  const grossPerMonthArray = earnings.map(month => month.gross);
  const highestMonth = Math.max(...grossPerMonthArray);
  return (
    <div className={'earnings-container'}>
      <h4>Earnings</h4>
      <div className={'earnings-bar-container'}>
        {earnings.length > 0 &&
          earnings.slice(earnings.length - monthsToShow).map(({ month, gross, id }) =>
          (<div key={id}>
            <p style={{ color: barColor }}>
              {`$${gross.toLocaleString()}`}
            </p>
            <div
              style={{
                height: grossToHeightConverter(gross, highestMonth),
                width: 30,
                margin: 'auto',
                backgroundColor: barColor,
              }}
            />
            <p>{months[month - 1]}</p>
          </div>),
        )}
      </div>
    </div>
  );
};

style.propTypes = {
  barColor: PropTypes.string.isRequired,
  monthsToShow: PropTypes.number.isRequired,
  earnings: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    channel_id: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    gross: PropTypes.number.isRequired,
  })).isRequired,
};

const mapStateToProps = ({ earnings }) => ({
  earnings,
});

const Earnings = connect(
  mapStateToProps,
  null,
)(style);

export default Earnings;
