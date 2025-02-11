interface EmailFormProps {
    heading: string;
    value: string;
    onChange: (value: string) => void;
    error?: string;
}
export declare function EmailForm({ heading, value, onChange, error }: EmailFormProps): import("react/jsx-runtime").JSX.Element;
export {};
