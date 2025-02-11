interface FormWithOptionsProps {
    heading: string;
    options: string[];
    minSelection?: number;
    maxSelection?: number;
}
export declare function FormWithOptions({ heading, options, minSelection, // Default value for minSelection
maxSelection, }: FormWithOptionsProps): import("react/jsx-runtime").JSX.Element;
export {};
