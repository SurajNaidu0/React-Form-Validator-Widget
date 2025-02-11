export interface FormConfig {
    type: "text" | "password" | "email" | "options" | "dropdown" | "date";
    heading: string;
    options?: string[];
    minSelection?: number;
    maxSelection?: number;
}
export interface ConfigComponentProps {
    config: FormConfig[];
}
