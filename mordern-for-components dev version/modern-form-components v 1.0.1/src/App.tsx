// src/App.tsx
import ConfigComponent from "./components/ConfigComponent";
import { FormConfig } from "./types/configTypes";

export function  App(){
    const config: FormConfig[] = [
        { type: "text", heading: "Enter Your Name" },
        { type: "password", heading: "Enter Your Password" },
        { type: "email", heading: "Enter Your Email" },
        {
            type: "options",
            heading: "Select your options",
            options: ["Option 1", "Option 2", "Option 3","Option 4"],
            minSelection: 1,
            maxSelection: 3,
        },
        {
            type: "dropdown",
            heading: "Please select an option",
            options: ["Option A", "Option B", "Option C","Option D"],
        },
        { type: "date", heading: "Select a Date " },
    ];

    return <ConfigComponent config={config} />;
};

