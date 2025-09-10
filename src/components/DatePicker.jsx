import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DatePickerValue = ({ parentDate }) => {
    const [value, setValue] = React.useState(dayjs('YYYY-MM-DD'));

    const dateHandle = (newValue) => {
        setValue(newValue);
        parentDate(value);
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker', 'DatePicker']}>
                <DatePicker
                    value={value}
                    onChange={dateHandle}
                    className='outline-none border-none w-full p-0'
                />
            </DemoContainer>
        </LocalizationProvider>
    );
}
export default DatePickerValue;