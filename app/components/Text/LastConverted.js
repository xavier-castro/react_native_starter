import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import LastConvertedText from './Text.styles';

const LastConverted = ({
  base, quote, conversionRate, date,
}) => (
  <LastConvertedText>
    {`
    1 ${base} = ${conversionRate} ${quote} as of ${moment(date).format('MMMM D, YYYY')}
    `}
  </LastConvertedText>
);

LastConverted.propTypes = {
  date: PropTypes.object,
  base: PropTypes.string,
  quote: PropTypes.string,
  conversionRate: PropTypes.number,
};

export default LastConverted;
