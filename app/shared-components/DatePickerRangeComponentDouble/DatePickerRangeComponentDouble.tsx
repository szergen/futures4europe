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
};

export const DatePickerRangeComponentDouble: React.FC<
  DatePickerRangeComponentDoubleProps
> = ({ dateStart, dateEnd, className }) => {
  const [startDate, setStartDate] = useState(new Date('2023-2-1'));
  const [endDate, setEndDate] = useState(new Date('2023-2-1'));

  useEffect(() => {
    if (startDate >= endDate) {
      setEndDate(startDate);
      console.log('startDate >= endDate', startDate, endDate);
    }
  }, [startDate, endDate]);
  // const ref = useRef();

  return (
    <div className={classNames('flex w-1/2', className)}>
      <DatePickerComponent
        date={startDate}
        onChange={setStartDate}
        className="mx-6"
      />
      <DatePickerComponent date={endDate} onChange={setEndDate} />
    </div>
  );
};

export default DatePickerRangeComponentDouble;
