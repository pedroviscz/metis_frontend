import { TextInputProps } from "react-native";

// Caso para estado simples (apenas string)
export interface TextInputRegularPropsSimple extends TextInputProps {
    value: string;
    setFunction: (value: string) => void;
}

// Caso para formulário (objeto)
export interface TextInputRegularPropsForm<T extends object> extends TextInputProps {
    value: string;
    setFunction: (value: string, field: keyof T) => void;
    field: keyof T;
}

export type TextInputRegularProps<T extends object | string> =
    T extends object ? TextInputRegularPropsForm<T> : TextInputRegularPropsSimple;