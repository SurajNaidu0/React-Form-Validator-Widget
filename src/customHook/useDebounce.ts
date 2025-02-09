import { useState, useEffect } from "react";

// Custom hook for debouncing input value
export function useDebounce(value: string, delay: number): string {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler); // Cleanup timeout on value change
        };
    }, [value, delay]);

    return debouncedValue;
}
