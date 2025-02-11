import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  };
  return __assign.apply(this, arguments);
};

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var EnterFormBar = function (_a) {
    var heading = _a.heading, value = _a.value, onChange = _a.onChange, error = _a.error;
    var _b = useState(false), isFocused = _b[0], setIsFocused = _b[1];
    var _c = useState(false), rippleEffect = _c[0], setRippleEffect = _c[1];
    var triggerRipple = function () {
        setRippleEffect(true);
        setTimeout(function () { return setRippleEffect(false); }, 600);
    };
    var handleChange = function (e) {
        onChange(e.target.value); // Propagate the value change to the parent
    };
    return (jsxs("div", __assign({ className: "flex flex-col items-center p-6 rounded-lg w-full bg-white relative overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.5)] transition-shadow duration-500" }, { children: [jsx("h2", __assign({ className: "text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 transform transition-transform duration-300" }, { children: heading })), jsxs("div", __assign({ className: "w-full relative group" }, { children: [jsx("label", __assign({ className: "absolute left-3 pointer-events-none transition-all duration-300 origin-left ".concat(isFocused || value
                            ? "transform -translate-y-6 scale-75 text-pink-500"
                            : "transform translate-y-2 text-gray-400") }, { children: "Enter text..." })), jsx("input", { type: "text", value: value, onChange: handleChange, onFocus: function () { return setIsFocused(true); }, onBlur: function () { return setIsFocused(false); }, onClick: triggerRipple, className: "w-full p-2 bg-transparent border-b-2 outline-none transition-all duration-300 ".concat(isFocused ? "border-pink-500" : "border-gray-200", " focus:border-pink-500 ").concat(rippleEffect ? "animate-pulse" : "", " ").concat(error ? "border-red-500" : "") }), jsx("div", { className: "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 ease-out ".concat(isFocused ? "w-full" : "w-0") }), jsx("div", { className: "absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-pink-500 transition-all duration-300 opacity-0 ".concat(isFocused ? "opacity-100" : "") }), jsx("div", { className: "absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-pink-500 transition-all duration-300 opacity-0 ".concat(isFocused ? "opacity-100" : "") })] })), error && jsx("p", __assign({ className: "text-red-500 text-sm mt-2" }, { children: error })), jsx("div", __assign({ className: "absolute inset-0 pointer-events-none" }, { children: jsx("div", { className: "absolute w-full h-full bg-[radial-gradient(circle,_transparent_10%,_#fff_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-150 group-hover:scale-100" }) }))] })));
};

function PasswordForm(_a) {
    var heading = _a.heading, value = _a.value, onChange = _a.onChange, error = _a.error;
    var _b = useState(false), isFocused = _b[0], setIsFocused = _b[1];
    var _c = useState(false), showPassword = _c[0], setShowPassword = _c[1];
    var _d = useState(0), strength = _d[0], setStrength = _d[1];
    var _e = useState({
        length: false,
        number: false,
        special: false,
        uppercase: false,
    }), checks = _e[0], setChecks = _e[1];
    useEffect(function () {
        var newChecks = {
            length: value.length >= 8,
            number: /\d/.test(value),
            special: /[!@#$%^&*(),.?":{}|<>]/.test(value),
            uppercase: /[A-Z]/.test(value),
        };
        setChecks(newChecks);
        setStrength(Object.values(newChecks).filter(Boolean).length);
    }, [value]);
    var getStrengthColor = function () {
        var colors = ["bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-green-500"];
        return colors[strength - 1] || "bg-gray-200";
    };
    return (jsxs("div", __assign({ className: "flex flex-col items-center p-6 rounded-lg w-full bg-white relative overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.5)] transition-shadow duration-500" }, { children: [jsx("h2", __assign({ className: "text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 transform transition-transform duration-300" }, { children: heading })), jsxs("div", __assign({ className: "w-full relative group" }, { children: [jsxs("div", __assign({ className: "relative" }, { children: [jsx("input", { type: showPassword ? "text" : "password", value: value, onChange: function (e) { return onChange(e.target.value); }, onFocus: function () { return setIsFocused(true); }, onBlur: function () { return setIsFocused(false); }, className: "w-full p-2 pl-3 pr-10 bg-transparent border-2 rounded-md outline-none transition-all duration-300 ".concat(isFocused ? "border-pink-500" : "border-gray-200", " focus:border-pink-500 ").concat(error ? "border-red-500" : ""), placeholder: "Enter your password" }), jsx("button", __assign({ type: "button", onClick: function () { return setShowPassword(!showPassword); }, className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-pink-500 transition-colors duration-300" }, { children: showPassword ? "🙈" : "👁️" }))] })), jsxs("div", __assign({ className: "mt-4 space-y-2" }, { children: [jsx("div", __assign({ className: "flex gap-2" }, { children: [1, 2, 3, 4].map(function (level) { return (jsx("div", { className: "h-2 flex-1 rounded-full transition-all duration-500 ".concat(strength >= level ? getStrengthColor() : "bg-gray-200") }, level)); }) })), jsx("p", __assign({ className: "text-sm transition-colors duration-300 ".concat(strength === 0
                                    ? "text-gray-400"
                                    : strength === 1
                                        ? "text-red-500"
                                        : strength === 2
                                            ? "text-orange-500"
                                            : strength === 3
                                                ? "text-yellow-500"
                                                : "text-green-500") }, { children: strength === 0
                                    ? "Enter password"
                                    : strength === 1
                                        ? "Weak"
                                        : strength === 2
                                            ? "Fair"
                                            : strength === 3
                                                ? "Good"
                                                : "Strong" }))] })), jsx("div", __assign({ className: "mt-4 space-y-2" }, { children: [
                            { key: "length", label: "At least 8 characters" },
                            { key: "number", label: "Contains a number" },
                            { key: "special", label: "Contains a special character" },
                            { key: "uppercase", label: "Contains uppercase letter" },
                        ].map(function (_a) {
                            var key = _a.key, label = _a.label;
                            return (jsxs("div", __assign({ className: "text-sm flex items-center space-x-2 transition-colors duration-300 ".concat(checks[key] ? "text-green-500" : "text-gray-400") }, { children: [jsx("div", __assign({ className: "w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-300 ".concat(checks[key]
                                            ? "border-green-500 bg-green-500"
                                            : "border-gray-300") }, { children: checks[key] && (jsx("div", { className: "w-2 h-2 bg-white rounded-full animate-fadeIn" })) })), jsx("span", { children: label })] }), key));
                        }) })), error && jsx("p", __assign({ className: "text-red-500 text-sm mt-2" }, { children: error }))] })), jsx("div", __assign({ className: "absolute inset-0 pointer-events-none" }, { children: jsx("div", { className: "absolute w-full h-full bg-[radial-gradient(circle,_transparent_10%,_#fff_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-150 group-hover:scale-100" }) }))] })));
}

// Custom hook for debouncing input value
function useDebounce(value, delay) {
    var _a = useState(value), debouncedValue = _a[0], setDebouncedValue = _a[1];
    useEffect(function () {
        var handler = setTimeout(function () {
            setDebouncedValue(value);
        }, delay);
        return function () {
            clearTimeout(handler); // Cleanup timeout on value change
        };
    }, [value, delay]);
    return debouncedValue;
}

function EmailForm(_a) {
    var heading = _a.heading, value = _a.value, onChange = _a.onChange, error = _a.error;
    var _b = useState(true), isValid = _b[0], setIsValid = _b[1];
    var _c = useState(false), isFocused = _c[0], setIsFocused = _c[1];
    var _d = useState(false), rippleEffect = _d[0], setRippleEffect = _d[1];
    var _e = useState(false), hasInteracted = _e[0], setHasInteracted = _e[1];
    var debouncedEmail = useDebounce(value, 500);
    useEffect(function () {
        if (debouncedEmail) {
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            setIsValid(emailPattern.test(debouncedEmail));
            setHasInteracted(true);
        }
    }, [debouncedEmail]);
    var handleChange = function (event) {
        onChange(event.target.value);
    };
    var triggerRipple = function () {
        setRippleEffect(true);
        setTimeout(function () { return setRippleEffect(false); }, 600);
    };
    return (jsxs("div", __assign({ className: "flex flex-col items-center p-6 rounded-lg w-full bg-white relative overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.5)] transition-shadow duration-500" }, { children: [jsx("h2", __assign({ className: "text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 transform transition-transform duration-300" }, { children: heading })), jsxs("div", __assign({ className: "w-full relative group" }, { children: [jsx("label", __assign({ className: "absolute left-3 pointer-events-none transition-all duration-300 origin-left ".concat(isFocused || value
                            ? "transform -translate-y-6 scale-75 text-pink-500"
                            : "transform translate-y-2 text-gray-400") }, { children: "Email address" })), jsx("input", { type: "email", value: value, onChange: handleChange, onFocus: function () { return setIsFocused(true); }, onBlur: function () { return setIsFocused(false); }, onClick: triggerRipple, className: "w-full p-2 bg-transparent border-b-2 outline-none transition-all duration-300 ".concat(isFocused ? "border-pink-500" : "border-gray-200", " ").concat((!isValid && hasInteracted) || error ? "border-red-500" : "", " focus:border-pink-500 ").concat(rippleEffect ? "animate-pulse" : "") }), jsx("div", { className: "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 ease-out ".concat(isFocused ? "w-full" : "w-0", " ").concat((!isValid && hasInteracted) || error ? "bg-red-500" : "") }), jsx("div", { className: "absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 ".concat((!isValid && hasInteracted) || error ? "border-red-500" : "border-pink-500", " transition-all duration-300 opacity-0 ").concat(isFocused ? "opacity-100" : "") }), jsx("div", { className: "absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 ".concat((!isValid && hasInteracted) || error ? "border-red-500" : "border-pink-500", " transition-all duration-300 opacity-0 ").concat(isFocused ? "opacity-100" : "") }), jsx("p", __assign({ className: "absolute -bottom-6 left-0 text-sm transition-all duration-300 ".concat((!isValid && hasInteracted) || error
                            ? "text-red-500 opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-2") }, { children: error || "Please enter a valid email address" }))] })), jsx("div", __assign({ className: "absolute right-4 top-1/2 -translate-y-1/2 transition-all duration-300 ".concat(isValid && hasInteracted && value ? "opacity-100 scale-100" : "opacity-0 scale-0") }, { children: jsx("svg", __assign({ className: "w-6 h-6 text-green-500", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", viewBox: "0 0 24 24", stroke: "currentColor" }, { children: jsx("path", { d: "M5 13l4 4L19 7" }) })) })), jsx("div", __assign({ className: "absolute inset-0 pointer-events-none" }, { children: jsx("div", { className: "absolute w-full h-full bg-[radial-gradient(circle,_transparent_10%,_#fff_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-150 group-hover:scale-100" }) }))] })));
}

function FormWithOptions(_a) {
    var heading = _a.heading, options = _a.options, value = _a.value, onChange = _a.onChange, error = _a.error, _b = _a.maxSelection, maxSelection = _b === void 0 ? Infinity : _b;
    var _c = useState(false), setRippleEffect = _c[1];
    var handleOptionChange = function (option) {
        var newSelected = value.includes(option)
            ? value.filter(function (item) { return item !== option; })
            : value.length < maxSelection
                ? __spreadArray(__spreadArray([], value, true), [option], false) : value;
        onChange(newSelected);
    };
    var triggerRipple = function () {
        setRippleEffect(true);
        setTimeout(function () { return setRippleEffect(false); }, 600);
    };
    return (jsxs("div", __assign({ className: "flex flex-col items-center p-6 rounded-lg w-full bg-white relative overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.5)] transition-shadow duration-500" }, { children: [jsx("h2", __assign({ className: "text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 transition-transform duration-300" }, { children: heading })), jsx("div", __assign({ className: "w-full mb-4 grid grid-cols-2 gap-4" }, { children: options.map(function (option) { return (jsxs("div", __assign({ className: "flex items-center relative group" }, { children: [jsx("input", { type: "checkbox", id: option, value: option, onChange: function () {
                                handleOptionChange(option);
                                triggerRipple();
                            }, checked: value.includes(option), disabled: value.length >= maxSelection && !value.includes(option), className: "hidden" }), jsx("label", __assign({ htmlFor: option, className: "p-2 rounded-md cursor-pointer transition-all border-2 w-full text-center ".concat(value.includes(option)
                                ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white border-transparent"
                                : "text-gray-600 border-gray-300", " ").concat(value.length >= maxSelection && !value.includes(option)
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:scale-105 hover:shadow-md") }, { children: option }))] }), option)); }) })), error && jsx("p", __assign({ className: "text-red-500 mt-2" }, { children: error })), jsx("div", __assign({ className: "absolute inset-0 pointer-events-none" }, { children: jsx("div", { className: "absolute w-full h-full bg-[radial-gradient(circle,_transparent_10%,_#fff_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-150 group-hover:scale-100" }) }))] })));
}

function DropDownForm(_a) {
    var heading = _a.heading, options = _a.options, value = _a.value, onChange = _a.onChange, error = _a.error;
    var _b = useState(false), rippleEffect = _b[0], setRippleEffect = _b[1];
    var handleChange = function (event) {
        onChange(event.target.value);
        triggerRipple();
    };
    var triggerRipple = function () {
        setRippleEffect(true);
        setTimeout(function () { return setRippleEffect(false); }, 600);
    };
    return (jsxs("div", __assign({ className: "flex flex-col items-center p-6 rounded-lg w-full bg-white relative overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.5)] transition-shadow duration-500" }, { children: [jsx("h2", __assign({ className: "text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 transition-transform duration-300" }, { children: heading })), jsx("div", __assign({ className: "relative w-full" }, { children: jsxs("select", __assign({ value: value, onChange: handleChange, className: "w-full p-2 rounded-md border-2 bg-white text-gray-700 border-gray-300 transition-all duration-300 focus:border-pink-500 focus:ring-2 focus:ring-purple-300 ".concat(rippleEffect ? "animate-pulse" : "", " ").concat(error ? "border-red-500" : "") }, { children: [jsx("option", __assign({ value: "", disabled: true }, { children: "Select an option" })), options.map(function (option) { return (jsx("option", __assign({ value: option }, { children: option }), option)); })] })) })), error && jsx("p", __assign({ className: "text-red-500 mt-2" }, { children: error })), jsx("div", __assign({ className: "absolute inset-0 pointer-events-none" }, { children: jsx("div", { className: "absolute w-full h-full bg-[radial-gradient(circle,_transparent_10%,_#fff_70%)] opacity-0 hover:opacity-100 transition-opacity duration-700 scale-150 hover:scale-100" }) }))] })));
}

function DateSelectorForm(_a) {
    var heading = _a.heading, value = _a.value, onChange = _a.onChange, error = _a.error;
    var _b = useState(false), isFocused = _b[0], setIsFocused = _b[1];
    var _c = useState(false), isHovered = _c[0], setIsHovered = _c[1];
    var handleChange = function (event) {
        onChange(event.target.value);
    };
    var formatDisplayDate = function (date) {
        if (!date)
            return "";
        var dateObj = new Date(date);
        return dateObj.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };
    return (jsxs("div", __assign({ className: "flex flex-col items-center p-6 rounded-lg w-full bg-white relative overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.5)] transition-shadow duration-500", onMouseEnter: function () { return setIsHovered(true); }, onMouseLeave: function () { return setIsHovered(false); } }, { children: [jsx("h2", __assign({ className: "text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 transform transition-transform duration-300 ".concat(isFocused ? "scale-105" : "") }, { children: heading })), jsxs("div", __assign({ className: "w-full relative group" }, { children: [jsxs("div", __assign({ className: "relative" }, { children: [jsx(Calendar, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-colors duration-300 ".concat(isFocused ? "text-pink-500" : "text-gray-400") }), jsx("input", { type: "date", value: value, onChange: handleChange, onFocus: function () { return setIsFocused(true); }, onBlur: function () { return setIsFocused(false); }, className: "w-full p-2 pl-10 bg-transparent border-2 rounded-md outline-none transition-all duration-300 ".concat(isFocused ? "border-pink-500" : "border-gray-200", " ").concat(error ? "border-red-500" : "", " focus:border-pink-500 cursor-pointer") })] })), jsx("div", { className: "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 ease-out ".concat(isFocused ? "w-full" : "w-0") }), jsx("div", { className: "absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 ".concat(error ? "border-red-500" : "border-pink-500", " transition-all duration-300 opacity-0 ").concat(isFocused ? "opacity-100" : "") }), jsx("div", { className: "absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 ".concat(error ? "border-red-500" : "border-pink-500", " transition-all duration-300 opacity-0 ").concat(isFocused ? "opacity-100" : "") }), error && jsx("p", __assign({ className: "text-red-500 text-sm mt-2" }, { children: error }))] })), value && (jsx("div", __assign({ className: "mt-6 w-full animate-fadeIn" }, { children: jsxs("div", __assign({ className: "p-3 rounded-md text-center bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 text-pink-600 transform transition-all duration-500 hover:scale-105 relative overflow-hidden" }, { children: [jsx("span", __assign({ className: "relative z-10" }, { children: formatDisplayDate(value) })), jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-pink-100/50 to-purple-100/50 transform transition-transform duration-500 ".concat(isHovered ? "translate-x-0" : "-translate-x-full") })] })) })))] })));
}

function ButtonComponent(_a) {
    var onClick = _a.onClick;
    var _b = useState(false), rippleEffect = _b[0], setRippleEffect = _b[1];
    var triggerRipple = function (event) {
        onClick();
        setRippleEffect(true);
        var ripple = event.currentTarget.getBoundingClientRect();
        var x = event.clientX - ripple.left;
        var y = event.clientY - ripple.top;
        var rippleElement = document.createElement('span');
        rippleElement.className = 'ripple';
        rippleElement.style.left = "".concat(x, "px");
        rippleElement.style.top = "".concat(y, "px");
        event.currentTarget.appendChild(rippleElement);
        setTimeout(function () {
            rippleElement.remove();
            setRippleEffect(false);
        }, 600);
    };
    return (jsxs("button", __assign({ onClick: triggerRipple, className: "w-full px-6 py-3 text-white font-semibold bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 focus:outline-none" }, { children: ["Submit", rippleEffect && jsx("span", { className: "absolute inset-0 bg-white opacity-30 rounded-full animate-ping" })] })));
}

var ConfigComponent = function (_a) {
    var config = _a.config;
    var _b = useState({}), formData = _b[0], setFormData = _b[1];
    var _c = useState({}), errors = _c[0], setErrors = _c[1];
    var handleChange = function (name, value) {
        setFormData(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[name] = value, _a)));
        });
        setErrors(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[name] = "", _a)));
        }); // Clear error when user types
    };
    var handleSubmit = function () {
        var newErrors = {};
        var isValid = true;
        // Validate required fields
        config.forEach(function (field) {
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
    var renderFormComponent = function (form, index) {
        switch (form.type) {
            case "text":
                return (jsx(EnterFormBar, { heading: form.heading, value: formData[form.heading] || "", onChange: function (value) { return handleChange(form.heading, value); }, error: errors[form.heading] }, index));
            case "password":
                return (jsx(PasswordForm, { heading: form.heading, value: formData[form.heading] || "", onChange: function (value) { return handleChange(form.heading, value); }, error: errors[form.heading] }, index));
            case "email":
                return (jsx(EmailForm, { heading: form.heading, value: formData[form.heading] || "", onChange: function (value) { return handleChange(form.heading, value); }, error: errors[form.heading] }, index));
            case "options":
                return (jsx(FormWithOptions, { heading: form.heading, options: form.options || [], maxSelection: form.maxSelection, value: formData[form.heading] || "", onChange: function (value) { return handleChange(form.heading, value); }, error: errors[form.heading] }, index));
            case "dropdown":
                return (jsx(DropDownForm, { heading: form.heading, options: form.options || [], value: formData[form.heading] || "", onChange: function (value) { return handleChange(form.heading, value); }, error: errors[form.heading] }, index));
            case "date":
                return (jsx(DateSelectorForm, { heading: form.heading, value: formData[form.heading] || "", onChange: function (value) { return handleChange(form.heading, value); }, error: errors[form.heading] }, index));
            default:
                return null;
        }
    };
    return (jsx("div", __assign({ className: "flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-50 to-purple-50 p-4" }, { children: jsxs("div", __assign({ className: "w-full max-w-2xl space-y-6" }, { children: [config.map(function (form, index) { return renderFormComponent(form, index); }), jsx(ButtonComponent, { onClick: handleSubmit })] })) })));
};

export { ButtonComponent, ConfigComponent, DateSelectorForm, DropDownForm, EmailForm, EnterFormBar, FormWithOptions, PasswordForm, useDebounce };
//# sourceMappingURL=index.esm.js.map
