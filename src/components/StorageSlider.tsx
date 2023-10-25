import * as React from "react"
import Box from "@mui/material/Box"
import Slider from "@mui/material/Slider"
import { styled } from '@mui/material/styles';

const marks = [
    {
        value: 20,
        label: "1GB",
    },
    {
        value: 40,
        label: "250GB",
    },
    {
        value: 60,
        label: "500GB",
    },
    {
        value: 80,
        label: "1TB",
    },
    {
        value: 100,
        label: "5TB",
    },
]

const StSlider = styled(Slider)({
    color: "#7D65F4",
    "& .MuiSlider-thumb": {
        height: 36,
        width: 36,
        backgroundColor: "#7D65F4",
        border: "6px solid white",
        boxShadow: "0px 2px 7px rgba(0, 0, 0, 0.25)",
        "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
            boxShadow: "0px 2px 7px rgba(0, 0, 0, 0.25)",
        },
        "&:before": {
            display: "none",
        },
    },
    '& .MuiSlider-track': {
      height: 28,
    },
    '& .MuiSlider-rail': {
      color: '#D9D9D9',
      opacity: 1,
      height: 28,
      width: '104%'
    },
})

export default function StorageSlider() {

    return (
        <Box sx={{ width: 650 }}>
            <StSlider defaultValue={0} step={1} marks={marks} />
        </Box>
    )
}
