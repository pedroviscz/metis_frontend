import React from "react";
import { TextInput } from "react-native";
import type { TextInputRegularProps } from "@/src/types/TextInputRegularProps";

const DinamicTextInput = <T extends object | string>(props: TextInputRegularProps<T>) => {
  const { value, setFunction, ...textInputProps } = props;

  const handleChange = (text: string) => {
    if ("field" in props) {
      setFunction(text, props.field);
    } else {
      (setFunction as (value: string) => void)(text);
    }
  };

  return (
    <TextInput
      {...textInputProps}
      value={value}
      onChangeText={handleChange}
    />
  );
}

export default DinamicTextInput;