import { TextField, TextFieldProps } from "@mui/material";
import { ChangeEvent, useState } from "react";

const InputText = ({
  maxRows = 2,
  getChanges,
  ...rest
}: {
  maxRows?: number;
  getChanges?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
} & TextFieldProps) => {
  const [value, setValue] = useState("" || rest.value);

  return (
    <TextField
      multiline
      maxRows={maxRows}
      onChange={(e) => {
        setValue(e.target.value);
        getChanges && getChanges(e);
      }}
      {...rest}
      value={value}
    />
  );
};

export default InputText;
