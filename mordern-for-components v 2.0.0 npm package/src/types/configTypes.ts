// src/types/configTypes.ts
// src/types/configTypes.ts
export interface FormConfig {
    required: boolean;
    type: "text" | "password" | "email" | "options" | "dropdown" | "date";
    heading: string;
    options?: string[]; // Array of strings
    maxSelection?: number; // Optional
}

export interface ConfigComponentProps {
    config: FormConfig[];
}