import React, { useState, useRef, useEffect } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import classNames from 'classnames';

export type DatePickerRangeComponentDoubleProps = {
  date: Date;
  onChange?: (date: string) => void;
  className?: string;
};

export const dateHelper = (date: Date) =>
  new Date(date.getTime() - date.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);

// eslint-disable-next-line react/display-name
const CustomInput = React.forwardRef(({ date, onClick }: any, ref: any) => {
  const dateToString = dateHelper(date);
  const [inputState, setInputState] = useState(dateToString);

  useEffect(() => {
    setInputState(dateToString);
  }, [dateToString]);

  return (
    <div>
      <input
        type="text"
        value={inputState}
        ref={ref}
        onBlur={(event) => {
          const transformDate = dateHelper(new Date(event?.target?.value));
          setInputState(transformDate);
          console.log('OnBlur date-->', date);
        }}
        onChange={(event) => {
          setInputState(event?.target?.value);
          console.log('OnChange date-->', date);
        }}
      />
      <button onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
          />
        </svg>
      </button>
    </div>
  );
});

export const DatePickerRangeComponentDouble: React.FC<
  DatePickerRangeComponentDoubleProps
> = ({ date, onChange, className }) => {
  const [startDate, setStartDate] = useState(date);
  const [endDate, setEndDate] = useState(date);
  const ref = useRef();

  return (
    <>
      <DatePicker
        customInput={<CustomInput ref={ref} date={startDate} />}
        selected={startDate}
        onChange={(date) => setStartDate(date as Date)}
        dateFormat="yyyy-MM-dd"
        className={classNames(className)}
        preventOpenOnFocus
      />
      <DatePicker
        customInput={<CustomInput ref={ref} date={endDate} />}
        selected={endDate}
        onChange={(date) => setEndDate(date as Date)}
        dateFormat="yyyy-MM-dd"
        className={classNames(className)}
        preventOpenOnFocus
      />
    </>
  );
};

export default DatePickerRangeComponentDouble;
