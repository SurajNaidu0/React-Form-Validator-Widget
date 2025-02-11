import React,{ useState } from "react";

interface EnterFormBarProps {
    heading: string;
    value: string;
    onChange: (value: string) => void;
    error?: string;
}

export const EnterFormBar = ({ heading, value, onChange, error }: EnterFormBarProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [rippleEffect, setRippleEffect] = useState(false);

    const triggerRipple = () => {
        setRippleEffect(true);
        setTimeout(() => setRippleEffect(false), 600);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value); // Propagate the value change to the parent
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
                    Enter text...
                </label>
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onClick={triggerRipple}
                    className={`w-full p-2 bg-transparent border-b-2 outline-none transition-all duration-300 ${
                        isFocused ? "border-pink-500" : "border-gray-200"
                    } focus:border-pink-500 ${rippleEffect ? "animate-pulse" : ""} ${
                        error ? "border-red-500" : ""
                    }`}
                />
                <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 ease-out ${
                        isFocused ? "w-full" : "w-0"
                    }`}
                />
                <div
                    className={`absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-pink-500 transition-all duration-300 opacity-0 ${
                        isFocused ? "opacity-100" : ""
                    }`}
                />
                <div
                    className={`absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-pink-500 transition-all duration-300 opacity-0 ${
                        isFocused ? "opacity-100" : ""
                    }`}
                />
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className={`absolute w-full h-full bg-[radial-gradient(circle,_transparent_10%,_#fff_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-150 group-hover:scale-100`}
                />
            </div>
        </div>
    );
};