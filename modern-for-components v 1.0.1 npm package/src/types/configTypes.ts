// src/types/configTypes.ts
// src/types/configTypes.ts
export interface FormConfig {
    type: "text" | "password" | "email" | "options" | "dropdown" | "date";
    heading: string;
    options?: string[]; // Array of strings
    minSelection?: number; // Optional
    maxSelection?: number; // Optional
}

export interface ConfigComponentProps {
    config: FormConfig[];
}