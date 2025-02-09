import React, { useState } from "react";
import { FormConfig, ConfigComponentProps } from "../types/configTypes";
import {EnterFormBar} from "./EnterFormBar";
import {PasswordForm} from "./PasswordForm";
import {EmailForm} from "./EmailForm";
import { FormWithOptions } from "./FormWithOptions";
import { DropDownForm } from "./DropDownForm";
import {DateSelectorForm} from "./DateSelectorForm";
import {ButtonComponent} from "./ButtonComponent";

const ConfigComponent: React.FC<ConfigComponentProps> = ({ config }) => {
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (name: string, value: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error when user types
    };

    const handleSubmit = () => {
        const newErrors: Record<string, string> = {};
        let isValid = true;

        // Validate required fields
        config.forEach((field) => {
            if (field.required && !formData[field.heading]) {
                newErrors[field.heading] = "This field is required";
                isValid = false;
            }
        });

        if (!isValid) {
            setErrors(newErrors);
            return;
        }

        // Log all form data to the console
        console.log("Form Data:", formData);
    };

    const renderFormComponent = (form: FormConfig, index: number) => {
        switch (form.type) {
            case "text":
                return (
                    <EnterFormBar
                        key={index}
                        heading={form.heading}
                        value={formData[form.heading] || ""}
                        onChange={(value) => handleChange(form.heading, value)}
                        error={errors[form.heading]}
                    />
                );
            case "password":
                return (
                    <PasswordForm
                        heading={form.heading}
                        key={index}
                        value={formData[form.heading] || ""}
                        onChange={(value) => handleChange(form.heading, value)}
                        error={errors[form.heading]}
                    />
                );
            case "email":
                return (
                    <EmailForm
                        heading={form.heading}
                        key={index}
                        value={formData[form.heading] || ""}
                        onChange={(value) => handleChange(form.heading, value)}
                        error={errors[form.heading]}
                    />
                );
            case "options":
                return (
                    <FormWithOptions
                        key={index}
                        heading={form.heading}
                        options={form.options || []}
                        maxSelection={form.maxSelection}
                        value={formData[form.heading] || ""}
                        onChange={(value) => handleChange(form.heading, value)}
                        error={errors[form.heading]}
                    />
                );
            case "dropdown":
                return (
                    <DropDownForm
                        key={index}
                        heading={form.heading}
                        options={form.options || []}
                        value={formData[form.heading] || ""}
                        onChange={(value) => handleChange(form.heading, value)}
                        error={errors[form.heading]}
                    />
                );
            case "date":
                return (
                    <DateSelectorForm
                        key={index}
                        heading={form.heading}
                        value={formData[form.heading] || ""}
                        onChange={(value) => handleChange(form.heading, value)}
                        error={errors[form.heading]}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-50 to-purple-50 p-4">
            <div className="w-full max-w-2xl space-y-6">
                {config.map((form, index) => renderFormComponent(form, index))}
                <ButtonComponent onClick={handleSubmit} />
            </div>
        </div>
    );
};

export default ConfigComponent;