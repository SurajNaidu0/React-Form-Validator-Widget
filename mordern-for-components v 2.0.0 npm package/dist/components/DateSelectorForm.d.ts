interface DateSelectorFormProps {
    heading: string;
    value: string;
    onChange: (value: string) => void;
    error?: string;
}
export declare function DateSelectorForm({ heading, value, onChange, error }: DateSelectorFormProps): import("react/jsx-runtime").JSX.Element;
export {};
