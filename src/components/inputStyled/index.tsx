import { TextField } from "@mui/material";
import { ChangeEvent } from "react";

const InputStyled = ({
  placeholder,
  rows = 0,
  width = "min(100%, 400px)",
  onChange,
  required,
}: {
  placeholder: string;
  rows?: number;
  width?: string;
  onChange?: (value: string) => void;
  required?: boolean;
}) => {
  return (
    <TextField
      id="outlined-multiline-static"
      variant="standard"
      multiline={!!rows}
      rows={rows}
      required={required}
      placeholder={placeholder}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        if (onChange) onChange(e.target.value);
      }}
      sx={({ palette, typography }) => ({
        width: width,
        backgroundColor: "rgba(0, 0, 0, 0)",
        border: "none",
        borderBottom: `2px solid ${palette.overlays?.white15}`,
        outline: "none",
        "-webkit-appearance": "none",
        verticalAlign: "middle",
        overflowClipMargin: "0px !important",
        overflow: "clip !important",
        ".MuiInputBase-input": { ...typography.h5 },
        "& .MuiInput-root": {
          py: 2,
        },
        "& .Mui-focused": {
          transform: "inherit",
        },
        "& .MuiInputBase-input::-webkit-scrollbar": {
          display: "none",
        },
        "&:hover:not(.Mui-disabled):before": {
          borderBottom: `0px solid ${palette.overlays?.white15}`,
        },
        "&.Mui-focused:before": {
          borderBottom: `0px solid ${palette.overlays?.white15}`,
        },
        "&.Mui-focused:after": {
          borderBottom: `0px solid transparent`,
        },
        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
          borderBottom: `0px solid ${palette.overlays?.white15}`,
        },

        "& .MuiInput-underline:after": {
          borderBottom: `none`,
        },
      })}
    />
  );
};

export default InputStyled;
