import { useEffect, useState } from "react";

interface PasswordType {
    heading: string;
    value: string;
    onChange: (value: string) => void;
    error?: string;
}

export function PasswordForm({ heading, value, onChange, error }: PasswordType) {
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [strength, setStrength] = useState(0);
    const [checks, setChecks] = useState({
        length: false,
        number: false,
        special: false,
        uppercase: false
    });

    useEffect(() => {
        const newChecks = {
            length: value.length >= 8,
            number: /\d/.test(value),
            special: /[!@#$%^&*(),.?":{}|<>]/.test(value),
            uppercase: /[A-Z]/.test(value)
        };
        setChecks(newChecks);
        setStrength(Object.values(newChecks).filter(Boolean).length);
    }, [value]);

    const getStrengthColor = () => {
        const colors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500'];
        return colors[strength - 1] || 'bg-gray-200';
    };

    return (
        <div className="flex flex-col items-center p-6 rounded-lg w-full bg-white relative overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.5)] transition-shadow duration-500">
            <h2 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 transform transition-transform duration-300">
                {heading}
            </h2>
            <div className="w-full relative group">
                <div className="relative">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        className={`w-full p-2 pl-3 pr-10 bg-transparent border-2 rounded-md outline-none transition-all duration-300 ${isFocused ? 'border-pink-500' : 'border-gray-200'} focus:border-pink-500`}
                        placeholder="Enter your password"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-pink-500 transition-colors duration-300"
                    >
                        {showPassword ? '🙈' : '👁️'}
                    </button>
                </div>

                {/* Password Strength Indicator */}
                <div className="mt-4 space-y-2">
                    <div className="flex gap-2">
                        {[1, 2, 3, 4].map((level) => (
                            <div
                                key={level}
                                className={`h-2 flex-1 rounded-full transition-all duration-500 ${
                                    strength >= level ? getStrengthColor() : 'bg-gray-200'
                                }`}
                            />
                        ))}
                    </div>
                    <p className={`text-sm transition-colors duration-300 ${
                        strength === 0 ? 'text-gray-400' :
                            strength === 1 ? 'text-red-500' :
                                strength === 2 ? 'text-orange-500' :
                                    strength === 3 ? 'text-yellow-500' :
                                        'text-green-500'
                    }`}>
                        {strength === 0 ? 'Enter password' :
                            strength === 1 ? 'Weak' :
                                strength === 2 ? 'Fair' :
                                    strength === 3 ? 'Good' :
                                        'Strong'}
                    </p>
                </div>

                {/* Password Requirements */}
                <div className="mt-4 space-y-2">
                    {[
                        { key: 'length', label: 'At least 8 characters' },
                        { key: 'number', label: 'Contains a number' },
                        { key: 'special', label: 'Contains a special character' },
                        { key: 'uppercase', label: 'Contains uppercase letter' }
                    ].map(({ key, label }) => (
                        <div
                            key={key}
                            className={`text-sm flex items-center space-x-2 transition-colors duration-300 ${
                                checks[key as keyof typeof checks] ? 'text-green-500' : 'text-gray-400'
                            }`}
                        >
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                                checks[key as keyof typeof checks]
                                    ? 'border-green-500 bg-green-500'
                                    : 'border-gray-300'
                            }`}>
                                {checks[key as keyof typeof checks] && (
                                    <div className="w-2 h-2 bg-white rounded-full animate-fadeIn" />
                                )}
                            </div>
                            <span>{label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Error Message */}
            {error && <p className="mt-4 text-red-500 text-sm">{error}</p>}

            {/* Interactive particles on hover */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-full h-full bg-[radial-gradient(circle,_transparent_10%,_#fff_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-150 group-hover:scale-100" />
            </div>
        </div>
    );
}
