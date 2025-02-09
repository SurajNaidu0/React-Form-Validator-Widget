// src/App.tsx
import ConfigComponent from "./components/ConfigComponent";
import { FormConfig } from "./types/configTypes";

export function  App(){
    const config: FormConfig[] = [
        { required:true, type: "text", heading: "Enter Your Name" },
        { required:true, type: "password", heading: "Enter Your Password" },
        { required:true, type: "email", heading: "Enter Your Email" },
        {    required:true,
            type: "options",
            heading: "Select your options",
            options: ["Option 1", "Option 2", "Option 3","Option 4"],
            maxSelection: 1,
        },
        {   required:true,
            type: "dropdown",
            heading: "Please select an option",
            options: ["Option A", "Option B", "Option C","Option D"],
        },
        {   required:true,
            type: "date",
            heading: "Select a Date" },
    ];

    return <ConfigComponent config={config} />;
};

