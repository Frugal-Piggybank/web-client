import React, { FC } from "react";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

interface LineItemInputProps {
  inputId: string;
  inputType: string;
  labelText: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  helperText?: string;
  errorMessage?: string;
}

const LineItemInput: FC<LineItemInputProps> = ({
  inputId,
  inputType,
  labelText,
  onChange,
}) => {
  return (
    <FormControl>
      <FormLabel htmlFor={inputId}>{labelText}</FormLabel>
      <Input name={inputId} type={inputType} onChange={onChange} />
    </FormControl>
  );
};

export default LineItemInput;
