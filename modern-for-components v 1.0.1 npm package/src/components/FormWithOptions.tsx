import React,{ useState } from "react";

interface FormWithOptionsProps {
    heading: string;
    options: string[]; // Updated to match `FormConfig`
    minSelection?: number; // Optional
    maxSelection?: number; // Optional
}

export function FormWithOptions({
                                    heading,
                                    options,
                                    minSelection = 1, // Default value for minSelection
                                    maxSelection = Infinity, // Default value for maxSelection
                                }: FormWithOptionsProps) {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [, setRippleEffect] = useState(false);

    const handleOptionChange = (value: string) => {
        setSelectedOptions((prevSelected) => {
            if (prevSelected.includes(value)) {
                return prevSelected.filter((item) => item !== value);
            } else if (prevSelected.length < maxSelection) {
                return [...prevSelected, value];
            }
            return prevSelected;
        });
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
            <div className="w-full mb-4 grid grid-cols-2 gap-4">
                {options.map((option) => (
                    <div key={option} className="flex items-center relative group">
                        <input
                            type="checkbox"
                            id={option}
                            value={option}
                            onChange={() => {
                                handleOptionChange(option);
                                triggerRipple();
                            }}
                            checked={selectedOptions.includes(option)}
                            disabled={
                                selectedOptions.length >= maxSelection &&
                                !selectedOptions.includes(option)
                            }
                            className="hidden"
                        />
                        <label
                            htmlFor={option}
                            className={`p-2 rounded-md cursor-pointer transition-all border-2 w-full text-center ${
                                selectedOptions.includes(option)
                                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white border-transparent"
                                    : "text-gray-600 border-gray-300"
                            } ${
                                selectedOptions.length >= maxSelection &&
                                !selectedOptions.includes(option)
                                    ? "opacity-50 cursor-not-allowed"
                                    : "hover:scale-105 hover:shadow-md"
                            }`}
                        >
                            {option}
                        </label>
                    </div>
                ))}
            </div>
            <p className="text-red-500 mt-2">
                {selectedOptions.length < minSelection
                    ? `Please select at least ${minSelection} option(s)`
                    : ""}
                {selectedOptions.length > maxSelection
                    ? `You can select up to ${maxSelection} option(s)`
                    : ""}
            </p>
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className={`absolute w-full h-full bg-[radial-gradient(circle,_transparent_10%,_#fff_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-150 group-hover:scale-100`}
                />
            </div>
        </div>
    );
}