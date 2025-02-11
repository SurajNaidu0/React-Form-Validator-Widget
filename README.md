# Modern Form Components
v1.0.1 Demo -<br/>
https://react-form-validator-widget.vercel.app/<br/>
https://www.npmjs.com/package/@surajnaidu/modern-form-components/v/1.0.1?activeTab=code

v2.0.0 Demo -<br/>
https://react-form-validator-widget-3kpl.vercel.app/<br/>
https://www.npmjs.com/package/@surajnaidu/modern-form-components/v/2.0.0?activeTab=code

<br/>
Config of v1 and v2 are backward compatible.
## **Installation**

```sh
npm install @surajnaidu/modern-form-components
```

---

## **Usage**

### **Configuring the Form**

The form is configured using an array of `FormConfig` objects. Each object represents a field with specific properties:

#### **Common Configuration Fields (Available in all versions)**
- **`type`** *(string)* - The type of input field (`text`, `password`, `email`, `options`, `dropdown`, `date`).
- **`heading`** *(string)* - The label for the field.

#### **Version-Specific Fields**
- **Available from v1.0.1:**
    - `options` *(string[])* - Available for `options` and `dropdown` types, defines selectable values.
    - `minSelection` *(number)* - (Only for `options` type) Minimum number of selections allowed.
    - `maxSelection` *(number)* - (Only for `options` type) Maximum number of selections allowed.

- **Introduced in v2.0.0:**
    - `required` *(boolean)* - Marks a field as required and shows an error if left empty.

### **Example Usage**
```tsx
import { FormConfig, ConfigComponent } from "@surajnaidu/modern-form-components";

const config: FormConfig[] = [
    { required: true, type: "text", heading: "Enter Your Name" },
    { required: true, type: "password", heading: "Enter Your Password" },
    { required: true, type: "email", heading: "Enter Your Email" },
    {
        required: true,
        type: "options",
        heading: "Select your options",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        maxSelection: 1,
    },
    {
        required: true,
        type: "dropdown",
        heading: "Please select an option",
        options: ["Option A", "Option B", "Option C", "Option D"],
    },
    { required: true, type: "date", heading: "Select a Date" },
];

function App() {
    return <ConfigComponent config={config} />;
}

export default App;
```

---

## **Components**

### **ConfigComponent**
A configurable form generator that dynamically creates input fields based on the provided `FormConfig`.

### **ButtonComponent**
A reusable button component used across the form system.



### **DateSelectorForm**
Handles date input selection within the form.

**Configuration:**
- `type: "date"`
- `required: true` (from v2.0.0)

### **DropDownForm**
Manages dropdown-based selection inputs.

**Configuration:**
- `type: "dropdown"`
- `options: ["Option A", "Option B"]`
- `required: true` (from v2.0.0)

### **EmailForm**
A specialized form component for email input validation.

**Configuration:**
- `type: "email"`
- `required: true` (from v2.0.0)

### **EnterFormBar**
A UI element for entering form data efficiently.
- `type: "text"`
- `required: true` (from v2.0.0)


### **FormWithOptions**
Handles option selection where users can choose one or multiple options.

**Configuration:**
- `type: "options"`
- `minSelection`, `maxSelection`
- `required: true` (from v2.0.0)

### **PasswordForm**
A secure password input field with validation.

**Configuration:**
- `type: "password"`
- `required: true` (from v2.0.0)

### **useDebounce** (Custom Hook)
A utility hook that helps optimize performance by reducing the frequency of function calls.

### **Types**
- `FormConfig`: Defines the structure for form elements.
- `ConfigComponentProps`: Specifies the props for `ConfigComponent`.

---

## **License**
MIT

