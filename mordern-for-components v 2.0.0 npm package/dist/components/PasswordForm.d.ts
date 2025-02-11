interface PasswordFormProps {
    heading: string;
    value: string;
    onChange: (value: string) => void;
    error?: string;
}
export declare function PasswordForm({ heading, value, onChange, error }: PasswordFormProps): import("react/jsx-runtime").JSX.Element;
export {};
