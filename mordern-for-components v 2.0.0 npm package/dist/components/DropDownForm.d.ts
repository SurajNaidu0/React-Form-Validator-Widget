interface DropDownFormProps {
    heading: string;
    options: string[];
    value: string;
    onChange: (value: string) => void;
    error?: string;
}
export declare function DropDownForm({ heading, options, value, onChange, error }: DropDownFormProps): import("react/jsx-runtime").JSX.Element;
export {};
