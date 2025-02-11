export interface FormConfig {
    required: boolean;
    type: "text" | "password" | "email" | "options" | "dropdown" | "date";
    heading: string;
    options?: string[];
    maxSelection?: number;
}
export interface ConfigComponentProps {
    config: FormConfig[];
}
