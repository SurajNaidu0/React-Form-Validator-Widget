import React, { useState } from "react";

interface DropDownFormProps {
    heading: string;
    options: string[];
    value: string;
    onChange: (value: string) => void;
    error?: string;
}

export function DropDownForm({ heading, options, value, onChange, error }: DropDownFormProps) {
    const [rippleEffect, setRippleEffect] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value);
        triggerRipple();
    };

    const triggerRipple = () => {
        setRippleEffect(true);
        setTimeout(() => setRippleEffect(false), 600);
    };

    return (
        <div className="flex flex-col items-center p-6 rounded-lg w-full bg-white relative overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.5)] transition-shadow duration-500">
            <h2 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 transition-transform duration-300">
                {heading}
            </h2>
            <div className="relative w-full">
                <select
                    value={value}
                    onChange={handleChange}
                    className={`w-full p-2 rounded-md border-2 bg-white text-gray-700 border-gray-300 transition-all duration-300 focus:border-pink-500 focus:ring-2 focus:ring-purple-300 ${
                        rippleEffect ? "animate-pulse" : ""
                    } ${error ? "border-red-500" : ""}`}
                >
                    <option value="" disabled>
                        Select an option
                    </option>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className={`absolute w-full h-full bg-[radial-gradient(circle,_transparent_10%,_#fff_70%)] opacity-0 hover:opacity-100 transition-opacity duration-700 scale-150 hover:scale-100`}
                />
            </div>
        </div>
    );
}