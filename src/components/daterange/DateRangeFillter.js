import React, { useState } from "react";
import PropTypes from "prop-types";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "../daterange/date-range.scss";

import { DateRangePicker } from "react-date-range";
import { subDays } from "date-fns";

const DateRangeFilter = ({ onChange }) => {
  const [state, setState] = useState([
    {
      startDate: subDays(new Date(), 7),
      endDate: new Date(),
      key: "selection"
    }
  ]);

  const handleOnChange = ranges => {
    const { selection } = ranges;
    onChange(selection);
    setState([selection]);
  };

  return (
    <DateRangePicker
      onChange={handleOnChange}
      rangeColors={'rgba(55, 176, 76, 1)'}
      showSelectionPreview={true}
      moveRangeOnFirstSelection={false}
      months={2}
      ranges={state}
      direction="horizontal"
    />
  );
};

DateRangeFilter.propTypes = {
  onChange: PropTypes.func
};

export default DateRangeFilter;
