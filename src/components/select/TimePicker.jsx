import { DesktopDatePicker, LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const TimePicker = (props) => {
    const [value, setValue] = useState(dayjs());
    const handleChange = (newValue) => setValue(newValue);
    const setTime = props.setTime;

    useEffect(() => {
        setTime(value.$y + '년 ' + value.$H + '시 ' + value.$m + '분');
    }, [value])

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
                <DateTimePicker
                    label="날짜와 시간 선택하기"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                    disablePast={true}
                />
            </Stack>
        </LocalizationProvider>
    );
}

export default TimePicker;
