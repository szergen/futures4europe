import React, { useState, useRef, useEffect } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import classNames from 'classnames';
import DatePickerComponent, {
  DatePickerComponentProps,
} from '../DatePickerComponent/DatePickerComponent';

export type DatePickerRangeComponentDoubleProps = {
  dateStart?: Date;
  dateEnd?: Date;
  // onChange?: (date: string) => void;
  className?: string;
  handleUpdateStartDate?: (date: Date) => void;
  handleUpdateEndDate?: (date: Date) => void;
};

export const DatePickerRangeComponentDouble: React.FC<
  DatePickerRangeComponentDoubleProps
> = ({
  dateStart,
  dateEnd,
  className,
  handleUpdateStartDate,
  handleUpdateEndDate,
}) => {
  const [startDate, setStartDate] = useState(dateStart || new Date());
  const [endDate, setEndDate] = useState(dateEnd || new Date());

  useEffect(() => {
    if (startDate >= endDate) {
      setEndDate(startDate);
      console.log('startDate >= endDate', startDate, endDate);
    }
  }, [startDate, endDate]);
  // const ref = useRef();

  return (
    <div className={classNames('flex w-1/2 items-center', className)}>
      <DatePickerComponent
        date={startDate}
        onChange={(value) => {
          setStartDate(value);
          handleUpdateStartDate && handleUpdateStartDate(value);
        }}
      />
      <span className="mx-4">-</span>
      <DatePickerComponent
        date={endDate}
        onChange={(value) => {
          setEndDate(value);
          handleUpdateEndDate && handleUpdateEndDate(value);
        }}
      />
    </div>
  );
};

export default DatePickerRangeComponentDouble;
