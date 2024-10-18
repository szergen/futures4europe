import React, { useState, useRef, useEffect } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import classNames from 'classnames';
import DatePickerComponent from '../DatePickerComponent/DatePickerComponent';

export type DatePickerRangeComponentDoubleProps = {
  dateStart?: Date | null;
  dateEnd?: Date | null;
  // onChange?: (date: string) => void;
  className?: string;
  handleUpdateStartDate?: (date: Date) => void;
  handleUpdateEndDate?: (date: Date) => void;
  dateFormate?:
    | 'YYYY-MM-dd'
    | 'YYYY'
    | 'YYYY-MM'
    | 'YYYY-MMMM'
    | 'YYYY MMMM'
    | 'YYYY-MM-DD HH:mm';
  placeholderStartDate?: string;
  placeholderEndDate?: string;
};

export const DatePickerRangeComponentDouble: React.FC<
  DatePickerRangeComponentDoubleProps
> = ({
  dateStart,
  dateEnd,
  className,
  handleUpdateStartDate,
  handleUpdateEndDate,
  dateFormate,
  placeholderEndDate,
  placeholderStartDate,
}) => {
  const [startDate, setStartDate] = useState<Date | null>(dateStart || null);
  const [endDate, setEndDate] = useState<Date | null>(dateEnd || null);

  useEffect(() => {
    if (startDate && endDate && startDate >= endDate) {
      setEndDate(startDate);
      console.log('startDate >= endDate', startDate, endDate);
    }
  }, [startDate, endDate]);
  // const ref = useRef();

  return (
    <div className={classNames('flex items-center', className)}>
      <DatePickerComponent
        date={startDate}
        onChange={(value) => {
          setStartDate(value);
          handleUpdateStartDate && handleUpdateStartDate(value);
        }}
        dateFormate={dateFormate}
        placeholder={placeholderStartDate}
      />
      <span className="mx-4">-</span>
      <DatePickerComponent
        date={endDate}
        onChange={(value) => {
          setEndDate(value);
          handleUpdateEndDate && handleUpdateEndDate(value);
        }}
        dateFormate={dateFormate}
        placeholder={placeholderEndDate}
      />
    </div>
  );
};

export default DatePickerRangeComponentDouble;
