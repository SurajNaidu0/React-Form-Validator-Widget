import React, { useState } from "react";
import { Calendar } from "lucide-react";

interface DateSelectorFormProps {
    heading: string;
    value: string;
    onChange: (value: string) => void;
    error?: string;
}

export function DateSelectorForm({ heading, value, onChange, error }: DateSelectorFormProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    const formatDisplayDate = (date: string) => {
        if (!date) return "";
        const dateObj = new Date(date);
        return dateObj.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    return (
        <div
            className={`flex flex-col items-center p-6 rounded-lg w-full bg-white relative overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.5)] transition-shadow duration-500`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h2
                className={`text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 transform transition-transform duration-300 ${
                    isFocused ? "scale-105" : ""
                }`}
            >
                {heading}
            </h2>

            <div className="w-full relative group">
                <div className="relative">
                    <Calendar
                        className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${
                            isFocused ? "text-pink-500" : "text-gray-400"
                        }`}
                    />
                    <input
                        type="date"
                        value={value}
                        onChange={handleChange}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        className={`w-full p-2 pl-10 bg-transparent border-2 rounded-md outline-none transition-all duration-300 ${
                            isFocused ? "border-pink-500" : "border-gray-200"
                        } ${error ? "border-red-500" : ""} focus:border-pink-500 cursor-pointer`}
                    />
                </div>
                <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 ease-out ${
                        isFocused ? "w-full" : "w-0"
                    }`}
                />
                <div
                    className={`absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 ${
                        error ? "border-red-500" : "border-pink-500"
                    } transition-all duration-300 opacity-0 ${isFocused ? "opacity-100" : ""}`}
                />
                <div
                    className={`absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 ${
                        error ? "border-red-500" : "border-pink-500"
                    } transition-all duration-300 opacity-0 ${isFocused ? "opacity-100" : ""}`}
                />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>

            {value && (
                <div className="mt-6 w-full animate-fadeIn">
                    <div
                        className={`p-3 rounded-md text-center bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 text-pink-600 transform transition-all duration-500 hover:scale-105 relative overflow-hidden`}
                    >
                        <span className="relative z-10">{formatDisplayDate(value)}</span>
                        <div
                            className={`absolute inset-0 bg-gradient-to-r from-pink-100/50 to-purple-100/50 transform transition-transform duration-500 ${
                                isHovered ? "translate-x-0" : "-translate-x-full"
                            }`}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}