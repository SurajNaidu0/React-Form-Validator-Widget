interface FormWithOptionsProps {
    heading: string;
    options: string[];
    value: string[];
    onChange: (value: string[]) => void;
    error?: string;
    minSelection?: number;
    maxSelection?: number;
}
export declare function FormWithOptions({ heading, options, value, onChange, error, maxSelection, }: FormWithOptionsProps): import("react/jsx-runtime").JSX.Element;
export {};
