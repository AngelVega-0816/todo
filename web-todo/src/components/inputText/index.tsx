import { TextField, TextFieldProps } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";

const InputText = ({
  maxRows = 2,
  getChanges,
  ...rest
}: {
  maxRows?: number;
  getChanges?: (event: ChangeEvent<HTMLInputElement>) => void;
} & TextFieldProps) => {
  return (
    <TextField multiline maxRows={maxRows} onChange={getChanges} {...rest} />
  );
};

export default InputText;
