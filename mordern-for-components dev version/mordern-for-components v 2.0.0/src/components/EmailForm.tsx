import React, { useEffect, useState } from "react";
import { useDebounce } from "../customHook/useDebounce.ts";

interface EmailFormProps {
    heading: string;
    value: string;
    onChange: (value: string) => void;
    error?: string;
}

export function EmailForm({heading, value, onChange, error }: EmailFormProps) {
    const [isValid, setIsValid] = useState(true);
    const [isFocused, setIsFocused] = useState(false);
    const [rippleEffect, setRippleEffect] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    const debouncedEmail = useDebounce(value, 500);

    useEffect(() => {
        if (debouncedEmail) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            setIsValid(emailPattern.test(debouncedEmail));
            setHasInteracted(true);
        }
    }, [debouncedEmail]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    const triggerRipple = () => {
        setRippleEffect(true);
        setTimeout(() => setRippleEffect(false), 600);
    };

    return (
        <div className="flex flex-col items-center p-6 rounded-lg w-full bg-white relative overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.5)] transition-shadow duration-500">
            <h2 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 transform transition-transform duration-300">
                {heading}
            </h2>
            <div className="w-full relative group">
                <label
                    className={`absolute left-3 pointer-events-none transition-all duration-300 origin-left ${
                        isFocused || value
                            ? "transform -translate-y-6 scale-75 text-pink-500"
                            : "transform translate-y-2 text-gray-400"
                    }`}
                >
                    Email address
                </label>
                <input
                    type="email"
                    value={value}
                    onChange={handleChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onClick={triggerRipple}
                    className={`w-full p-2 bg-transparent border-b-2 outline-none transition-all duration-300 ${
                        isFocused ? "border-pink-500" : "border-gray-200"
                    } ${
                        (!isValid && hasInteracted) || error ? "border-red-500" : ""
                    } focus:border-pink-500 ${rippleEffect ? "animate-pulse" : ""}`}
                />
                <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 ease-out ${
                        isFocused ? "w-full" : "w-0"
                    } ${(!isValid && hasInteracted) || error ? "bg-red-500" : ""}`}
                />
                <div
                    className={`absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 ${
                        (!isValid && hasInteracted) || error ? "border-red-500" : "border-pink-500"
                    } transition-all duration-300 opacity-0 ${isFocused ? "opacity-100" : ""}`}
                />
                <div
                    className={`absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 ${
                        (!isValid && hasInteracted) || error ? "border-red-500" : "border-pink-500"
                    } transition-all duration-300 opacity-0 ${isFocused ? "opacity-100" : ""}`}
                />
                <p
                    className={`absolute -bottom-6 left-0 text-sm transition-all duration-300 ${
                        (!isValid && hasInteracted) || error
                            ? "text-red-500 opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-2"
                    }`}
                >
                    {error || "Please enter a valid email address"}
                </p>
            </div>
            <div
                className={`absolute right-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                    isValid && hasInteracted && value ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
            >
                <svg
                    className="w-6 h-6 text-green-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M5 13l4 4L19 7"></path>
                </svg>
            </div>
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className={`absolute w-full h-full bg-[radial-gradient(circle,_transparent_10%,_#fff_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-150 group-hover:scale-100`}
                />
            </div>
        </div>
    );
}