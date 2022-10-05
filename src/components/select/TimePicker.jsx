import { DesktopDatePicker, LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const TimePicker = () => {
    const [value, setValue] = useState(dayjs('2022-10-05T10:10:10')); // 현재로 설정?
    const handleChange = (newValue) => setValue(newValue);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
                <DateTimePicker
                    label="날짜와 시간 선택하기"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
            </Stack>
        </LocalizationProvider>
    );
}

export default TimePicker;
