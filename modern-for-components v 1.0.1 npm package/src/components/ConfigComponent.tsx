import React from "react";
import { FormConfig, ConfigComponentProps } from "../types/configTypes";
import {EnterFormBar} from "./EnterFormBar";
import {PasswordForm} from "./PasswordForm";
import {EmailForm} from "./EmailForm";
import { FormWithOptions } from "./FormWithOptions";
import { DropDownForm } from "./DropDownForm";
import {DateSelectorForm} from "./DateSelectorForm";
import {ButtonComponent} from "./ButtonComponent";

const ConfigComponent: React.FC<ConfigComponentProps> = ({ config }) => {
    const renderFormComponent = (form: FormConfig, index: number) => {
        switch (form.type) {
            case "text":
                return <EnterFormBar key={index} heading={form.heading} />;
            case "password":
                return <PasswordForm key={index} />;
            case "email":
                return <EmailForm key={index} />;
            case "options":
                return (
                    <FormWithOptions
                        key={index}
                        heading={form.heading}
                        options={form.options || []}
                        minSelection={form.minSelection}
                        maxSelection={form.maxSelection}
                    />
                );
            case "dropdown":
                return (
                    <DropDownForm key={index} heading={form.heading} options={form.options || []} />
                );
            case "date":
                return <DateSelectorForm key={index} heading={form.heading} />;
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-50 to-purple-50 p-4">
            <div className="w-full max-w-2xl space-y-6">
                {config.map((form, index) => renderFormComponent(form, index))}
                <ButtonComponent />
            </div>
        </div>
    );
};

export default ConfigComponent;