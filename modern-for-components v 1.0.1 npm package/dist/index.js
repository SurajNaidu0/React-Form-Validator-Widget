'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var lucideReact = require('lucide-react');

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
    var heading = _a.heading;
    var _b = react.useState(false), isFocused = _b[0], setIsFocused = _b[1];
    var _c = react.useState(''), inputValue = _c[0], setInputValue = _c[1];
    var _d = react.useState(false), rippleEffect = _d[0], setRippleEffect = _d[1];
    var triggerRipple = function () {
        setRippleEffect(true);
        setTimeout(function () { return setRippleEffect(false); }, 600);
    };
    return (jsxRuntime.jsxs("div", __assign({ className: "flex flex-col items-center p-6 rounded-lg w-full bg-white relative overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.5)] transition-shadow duration-500" }, { children: [jsxRuntime.jsx("h2", __assign({ className: "text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 transform transition-transform duration-300" }, { children: heading })), jsxRuntime.jsxs("div", __assign({ className: "w-full relative group" }, { children: [jsxRuntime.jsx("label", __assign({ className: "absolute left-3 pointer-events-none transition-all duration-300 origin-left ".concat(isFocused || inputValue ? 'transform -translate-y-6 scale-75 text-pink-500' : 'transform translate-y-2 text-gray-400') }, { children: "Enter text..." })), jsxRuntime.jsx("input", { type: "text", value: inputValue, onChange: function (e) { return setInputValue(e.target.value); }, onFocus: function () { return setIsFocused(true); }, onBlur: function () { return setIsFocused(false); }, onClick: triggerRipple, className: "w-full p-2 bg-transparent border-b-2 outline-none transition-all duration-300 ".concat(isFocused ? 'border-pink-500' : 'border-gray-200', " focus:border-pink-500 ").concat(rippleEffect ? 'animate-pulse' : '') }), jsxRuntime.jsx("div", { className: "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 ease-out ".concat(isFocused ? 'w-full' : 'w-0') }), jsxRuntime.jsx("div", { className: "absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-pink-500 transition-all duration-300 opacity-0 ".concat(isFocused ? 'opacity-100' : '') }), jsxRuntime.jsx("div", { className: "absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-pink-500 transition-all duration-300 opacity-0 ".concat(isFocused ? 'opacity-100' : '') })] })), jsxRuntime.jsx("div", __assign({ className: "absolute inset-0 pointer-events-none" }, { children: jsxRuntime.jsx("div", { className: "absolute w-full h-full bg-[radial-gradient(circle,_transparent_10%,_#fff_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-150 group-hover:scale-100" }) }))] })));
};

function PasswordForm() {
    var _a = react.useState(""), password = _a[0], setPassword = _a[1];
    var _b = react.useState(false), isFocused = _b[0], setIsFocused = _b[1];
    var _c = react.useState(false), showPassword = _c[0], setShowPassword = _c[1];
    var _d = react.useState(0), strength = _d[0], setStrength = _d[1];
    var _e = react.useState({
        length: false,
        number: false,
        special: false,
        uppercase: false
    }), checks = _e[0], setChecks = _e[1];
    react.useEffect(function () {
        var newChecks = {
            length: password.length >= 8,
            number: /\d/.test(password),
            special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
            uppercase: /[A-Z]/.test(password)
        };
        setChecks(newChecks);
        setStrength(Object.values(newChecks).filter(Boolean).length);
    }, [password]);
    var getStrengthColor = function () {
        var colors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500'];
        return colors[strength - 1] || 'bg-gray-200';
    };
    return (jsxRuntime.jsxs("div", __assign({ className: "flex flex-col items-center p-6 rounded-lg w-full bg-white relative overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.5)] transition-shadow duration-500" }, { children: [jsxRuntime.jsx("h2", __assign({ className: "text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 transform transition-transform duration-300" }, { children: "Create Password" })), jsxRuntime.jsxs("div", __assign({ className: "w-full relative group" }, { children: [jsxRuntime.jsxs("div", __assign({ className: "relative" }, { children: [jsxRuntime.jsx("input", { type: showPassword ? 'text' : 'password', value: password, onChange: function (e) { return setPassword(e.target.value); }, onFocus: function () { return setIsFocused(true); }, onBlur: function () { return setIsFocused(false); }, className: "w-full p-2 pl-3 pr-10 bg-transparent border-2 rounded-md outline-none transition-all duration-300 ".concat(isFocused ? 'border-pink-500' : 'border-gray-200', " focus:border-pink-500"), placeholder: "Enter your password" }), jsxRuntime.jsxs("button", __assign({ type: "button", onClick: function () { return setShowPassword(!showPassword); }, className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-pink-500 transition-colors duration-300" }, { children: ["                        ", showPassword ? '🙈' : '👁️'] }))] })), jsxRuntime.jsxs("div", __assign({ className: "mt-4 space-y-2" }, { children: [jsxRuntime.jsx("div", __assign({ className: "flex gap-2" }, { children: [1, 2, 3, 4].map(function (level) { return (jsxRuntime.jsx("div", { className: "h-2 flex-1 rounded-full transition-all duration-500 ".concat(strength >= level ? getStrengthColor() : 'bg-gray-200') }, level)); }) })), jsxRuntime.jsx("p", __assign({ className: "text-sm transition-colors duration-300 ".concat(strength === 0 ? 'text-gray-400' :
                                    strength === 1 ? 'text-red-500' :
                                        strength === 2 ? 'text-orange-500' :
                                            strength === 3 ? 'text-yellow-500' :
                                                'text-green-500') }, { children: strength === 0 ? 'Enter password' :
                                    strength === 1 ? 'Weak' :
                                        strength === 2 ? 'Fair' :
                                            strength === 3 ? 'Good' :
                                                'Strong' }))] })), jsxRuntime.jsx("div", __assign({ className: "mt-4 space-y-2" }, { children: [
                            { key: 'length', label: 'At least 8 characters' },
                            { key: 'number', label: 'Contains a number' },
                            { key: 'special', label: 'Contains a special character' },
                            { key: 'uppercase', label: 'Contains uppercase letter' }
                        ].map(function (_a) {
                            var key = _a.key, label = _a.label;
                            return (jsxRuntime.jsxs("div", __assign({ className: "text-sm flex items-center space-x-2 transition-colors duration-300 ".concat(checks[key] ? 'text-green-500' : 'text-gray-400') }, { children: [jsxRuntime.jsx("div", __assign({ className: "w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-300 ".concat(checks[key]
                                            ? 'border-green-500 bg-green-500'
                                            : 'border-gray-300') }, { children: checks[key] && (jsxRuntime.jsx("div", { className: "w-2 h-2 bg-white rounded-full animate-fadeIn" })) })), jsxRuntime.jsx("span", { children: label })] }), key));
                        }) }))] })), jsxRuntime.jsx("div", __assign({ className: "absolute inset-0 pointer-events-none" }, { children: jsxRuntime.jsx("div", { className: "absolute w-full h-full bg-[radial-gradient(circle,_transparent_10%,_#fff_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-150 group-hover:scale-100" }) }))] })));
}

// Custom hook for debouncing input value
function useDebounce(value, delay) {
    var _a = react.useState(value), debouncedValue = _a[0], setDebouncedValue = _a[1];
    react.useEffect(function () {
        var handler = setTimeout(function () {
            setDebouncedValue(value);
        }, delay);
        return function () {
            clearTimeout(handler); // Cleanup timeout on value change
        };
    }, [value, delay]);
    return debouncedValue;
}

function EmailForm() {
    var _a = react.useState(""), email = _a[0], setEmail = _a[1];
    var _b = react.useState(true), isValid = _b[0], setIsValid = _b[1];
    var _c = react.useState(false), isFocused = _c[0], setIsFocused = _c[1];
    var _d = react.useState(false), rippleEffect = _d[0], setRippleEffect = _d[1];
    var _e = react.useState(false), hasInteracted = _e[0], setHasInteracted = _e[1];
    var debouncedEmail = useDebounce(email, 500);
    react.useEffect(function () {
        if (debouncedEmail) {
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            setIsValid(emailPattern.test(debouncedEmail));
            setHasInteracted(true);
        }
    }, [debouncedEmail]);
    var handleChange = function (event) {
        setEmail(event.target.value);
    };
    var triggerRipple = function () {
        setRippleEffect(true);
        setTimeout(function () { return setRippleEffect(false); }, 600);
    };
    return (jsxRuntime.jsxs("div", __assign({ className: "flex flex-col items-center p-6 rounded-lg w-full bg-white relative overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.5)] transition-shadow duration-500" }, { children: [jsxRuntime.jsx("h2", __assign({ className: "text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 transform transition-transform duration-300" }, { children: "Enter your email address" })), jsxRuntime.jsxs("div", __assign({ className: "w-full relative group" }, { children: [jsxRuntime.jsx("label", __assign({ className: "absolute left-3 pointer-events-none transition-all duration-300 origin-left ".concat(isFocused || email ? 'transform -translate-y-6 scale-75 text-pink-500' : 'transform translate-y-2 text-gray-400') }, { children: "Email address" })), jsxRuntime.jsx("input", { type: "email", value: email, onChange: handleChange, onFocus: function () { return setIsFocused(true); }, onBlur: function () { return setIsFocused(false); }, onClick: triggerRipple, className: "w-full p-2 bg-transparent border-b-2 outline-none transition-all duration-300 ".concat(isFocused ? 'border-pink-500' : 'border-gray-200', " ").concat(!isValid && hasInteracted ? 'border-red-500' : '', " focus:border-pink-500 ").concat(rippleEffect ? 'animate-pulse' : '') }), jsxRuntime.jsx("div", { className: "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 ease-out ".concat(isFocused ? 'w-full' : 'w-0', " ").concat(!isValid && hasInteracted ? 'bg-red-500' : '') }), jsxRuntime.jsx("div", { className: "absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 ".concat(!isValid && hasInteracted ? 'border-red-500' : 'border-pink-500', " transition-all duration-300 opacity-0 ").concat(isFocused ? 'opacity-100' : '') }), jsxRuntime.jsx("div", { className: "absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 ".concat(!isValid && hasInteracted ? 'border-red-500' : 'border-pink-500', " transition-all duration-300 opacity-0 ").concat(isFocused ? 'opacity-100' : '') }), jsxRuntime.jsx("p", __assign({ className: "absolute -bottom-6 left-0 text-sm transition-all duration-300 ".concat(!isValid && hasInteracted ? 'text-red-500 opacity-100 translate-y-0' : 'opacity-0 -translate-y-2') }, { children: "Please enter a valid email address" }))] })), jsxRuntime.jsx("div", __assign({ className: "absolute right-4 top-1/2 -translate-y-1/2 transition-all duration-300 ".concat(isValid && hasInteracted && email ? 'opacity-100 scale-100' : 'opacity-0 scale-0') }, { children: jsxRuntime.jsx("svg", __assign({ className: "w-6 h-6 text-green-500", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", viewBox: "0 0 24 24", stroke: "currentColor" }, { children: jsxRuntime.jsx("path", { d: "M5 13l4 4L19 7" }) })) })), jsxRuntime.jsx("div", __assign({ className: "absolute inset-0 pointer-events-none" }, { children: jsxRuntime.jsx("div", { className: "absolute w-full h-full bg-[radial-gradient(circle,_transparent_10%,_#fff_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-150 group-hover:scale-100" }) }))] })));
}

function FormWithOptions(_a) {
    var heading = _a.heading, options = _a.options, _b = _a.minSelection, minSelection = _b === void 0 ? 1 : _b, // Default value for minSelection
    _c = _a.maxSelection, // Default value for minSelection
    maxSelection = _c === void 0 ? Infinity : _c;
    var _d = react.useState([]), selectedOptions = _d[0], setSelectedOptions = _d[1];
    var _e = react.useState(false), setRippleEffect = _e[1];
    var handleOptionChange = function (value) {
        setSelectedOptions(function (prevSelected) {
            if (prevSelected.includes(value)) {
                return prevSelected.filter(function (item) { return item !== value; });
            }
            else if (prevSelected.length < maxSelection) {
                return __spreadArray(__spreadArray([], prevSelected, true), [value], false);
            }
            return prevSelected;
        });
    };
    var triggerRipple = function () {
        setRippleEffect(true);
        setTimeout(function () { return setRippleEffect(false); }, 600);
    };
    return (jsxRuntime.jsxs("div", __assign({ className: "flex flex-col items-center p-6 rounded-lg w-full bg-white relative overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.5)] transition-shadow duration-500" }, { children: [jsxRuntime.jsx("h2", __assign({ className: "text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 transition-transform duration-300" }, { children: heading })), jsxRuntime.jsx("div", __assign({ className: "w-full mb-4 grid grid-cols-2 gap-4" }, { children: options.map(function (option) { return (jsxRuntime.jsxs("div", __assign({ className: "flex items-center relative group" }, { children: [jsxRuntime.jsx("input", { type: "checkbox", id: option, value: option, onChange: function () {
                                handleOptionChange(option);
                                triggerRipple();
                            }, checked: selectedOptions.includes(option), disabled: selectedOptions.length >= maxSelection &&
                                !selectedOptions.includes(option), className: "hidden" }), jsxRuntime.jsx("label", __assign({ htmlFor: option, className: "p-2 rounded-md cursor-pointer transition-all border-2 w-full text-center ".concat(selectedOptions.includes(option)
                                ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white border-transparent"
                                : "text-gray-600 border-gray-300", " ").concat(selectedOptions.length >= maxSelection &&
                                !selectedOptions.includes(option)
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:scale-105 hover:shadow-md") }, { children: option }))] }), option)); }) })), jsxRuntime.jsxs("p", __assign({ className: "text-red-500 mt-2" }, { children: [selectedOptions.length < minSelection
                        ? "Please select at least ".concat(minSelection, " option(s)")
                        : "", selectedOptions.length > maxSelection
                        ? "You can select up to ".concat(maxSelection, " option(s)")
                        : ""] })), jsxRuntime.jsx("div", __assign({ className: "absolute inset-0 pointer-events-none" }, { children: jsxRuntime.jsx("div", { className: "absolute w-full h-full bg-[radial-gradient(circle,_transparent_10%,_#fff_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-150 group-hover:scale-100" }) }))] })));
}

function DropDownForm(_a) {
    var heading = _a.heading, options = _a.options;
    var _b = react.useState(""), selectedOption = _b[0], setSelectedOption = _b[1];
    var _c = react.useState(false), rippleEffect = _c[0], setRippleEffect = _c[1];
    var handleChange = function (event) {
        setSelectedOption(event.target.value);
        triggerRipple();
    };
    var triggerRipple = function () {
        setRippleEffect(true);
        setTimeout(function () { return setRippleEffect(false); }, 600);
    };
    return (jsxRuntime.jsxs("div", __assign({ className: "flex flex-col items-center p-6 rounded-lg w-full bg-white relative overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.5)] transition-shadow duration-500" }, { children: [jsxRuntime.jsx("h2", __assign({ className: "text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 transition-transform duration-300" }, { children: heading })), jsxRuntime.jsx("div", __assign({ className: "relative w-full" }, { children: jsxRuntime.jsxs("select", __assign({ value: selectedOption, onChange: handleChange, className: "w-full p-2 rounded-md border-2 bg-white text-gray-700 border-gray-300 transition-all duration-300 focus:border-pink-500 focus:ring-2 focus:ring-purple-300 ".concat(rippleEffect ? "animate-pulse" : "") }, { children: [jsxRuntime.jsx("option", __assign({ value: "", disabled: true }, { children: "Select an option" })), options.map(function (option) { return (jsxRuntime.jsx("option", __assign({ value: option }, { children: option }), option)); })] })) })), selectedOption && (jsxRuntime.jsxs("p", __assign({ className: "text-green-500 mt-2" }, { children: ["You selected: ", selectedOption] }))), jsxRuntime.jsx("div", __assign({ className: "absolute inset-0 pointer-events-none" }, { children: jsxRuntime.jsx("div", { className: "absolute w-full h-full bg-[radial-gradient(circle,_transparent_10%,_#fff_70%)] opacity-0 hover:opacity-100 transition-opacity duration-700 scale-150 hover:scale-100" }) }))] })));
}

function DateSelectorForm(_a) {
    var heading = _a.heading;
    var _b = react.useState(""), selectedDate = _b[0], setSelectedDate = _b[1];
    var _c = react.useState(false), isFocused = _c[0], setIsFocused = _c[1];
    var _d = react.useState(false), isHovered = _d[0], setIsHovered = _d[1];
    var handleChange = function (event) {
        setSelectedDate(event.target.value);
    };
    var formatDisplayDate = function (date) {
        if (!date)
            return '';
        var dateObj = new Date(date);
        return dateObj.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };
    return (jsxRuntime.jsxs("div", __assign({ className: "flex flex-col items-center p-6 rounded-lg w-full bg-white relative overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.5)] transition-shadow duration-500", onMouseEnter: function () { return setIsHovered(true); }, onMouseLeave: function () { return setIsHovered(false); } }, { children: [jsxRuntime.jsx("h2", __assign({ className: "text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 transform transition-transform duration-300 ".concat(isFocused ? 'scale-105' : '') }, { children: heading })), jsxRuntime.jsxs("div", __assign({ className: "w-full relative group" }, { children: [jsxRuntime.jsxs("div", __assign({ className: "relative" }, { children: [jsxRuntime.jsx(lucideReact.Calendar, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-colors duration-300 ".concat(isFocused ? 'text-pink-500' : 'text-gray-400') }), jsxRuntime.jsx("input", { type: "date", value: selectedDate, onChange: handleChange, onFocus: function () { return setIsFocused(true); }, onBlur: function () { return setIsFocused(false); }, className: "w-full p-2 pl-10 bg-transparent border-2 rounded-md outline-none transition-all duration-300 ".concat(isFocused ? 'border-pink-500' : 'border-gray-200', " focus:border-pink-500 cursor-pointer") })] })), jsxRuntime.jsx("div", { className: "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 ease-out ".concat(isFocused ? 'w-full' : 'w-0') }), jsxRuntime.jsx("div", { className: "absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-pink-500 transition-all duration-300 opacity-0 ".concat(isFocused ? 'opacity-100' : '') }), jsxRuntime.jsx("div", { className: "absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-pink-500 transition-all duration-300 opacity-0 ".concat(isFocused ? 'opacity-100' : '') })] })), selectedDate && (jsxRuntime.jsx("div", __assign({ className: "mt-6 w-full animate-fadeIn" }, { children: jsxRuntime.jsxs("div", __assign({ className: "p-3 rounded-md text-center bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 text-pink-600 transform transition-all duration-500 hover:scale-105 relative overflow-hidden" }, { children: [jsxRuntime.jsx("span", __assign({ className: "relative z-10" }, { children: formatDisplayDate(selectedDate) })), jsxRuntime.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-pink-100/50 to-purple-100/50 transform transition-transform duration-500 ".concat(isHovered ? 'translate-x-0' : '-translate-x-full') })] })) })))] })));
}

function ButtonComponent() {
    var _a = react.useState(false), rippleEffect = _a[0], setRippleEffect = _a[1];
    var triggerRipple = function (event) {
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
    return (jsxRuntime.jsxs("button", __assign({ onClick: triggerRipple, className: "w-full px-6 py-3 text-white font-semibold bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 focus:outline-none" }, { children: ["Submit", rippleEffect && jsxRuntime.jsx("span", { className: "absolute inset-0 bg-white opacity-30 rounded-full animate-ping" })] })));
}

var ConfigComponent = function (_a) {
    var config = _a.config;
    var renderFormComponent = function (form, index) {
        switch (form.type) {
            case "text":
                return jsxRuntime.jsx(EnterFormBar, { heading: form.heading }, index);
            case "password":
                return jsxRuntime.jsx(PasswordForm, {}, index);
            case "email":
                return jsxRuntime.jsx(EmailForm, {}, index);
            case "options":
                return (jsxRuntime.jsx(FormWithOptions, { heading: form.heading, options: form.options || [], minSelection: form.minSelection, maxSelection: form.maxSelection }, index));
            case "dropdown":
                return (jsxRuntime.jsx(DropDownForm, { heading: form.heading, options: form.options || [] }, index));
            case "date":
                return jsxRuntime.jsx(DateSelectorForm, { heading: form.heading }, index);
            default:
                return null;
        }
    };
    return (jsxRuntime.jsx("div", __assign({ className: "flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-50 to-purple-50 p-4" }, { children: jsxRuntime.jsxs("div", __assign({ className: "w-full max-w-2xl space-y-6" }, { children: [config.map(function (form, index) { return renderFormComponent(form, index); }), jsxRuntime.jsx(ButtonComponent, {})] })) })));
};

exports.ButtonComponent = ButtonComponent;
exports.ConfigComponent = ConfigComponent;
exports.DateSelectorForm = DateSelectorForm;
exports.DropDownForm = DropDownForm;
exports.EmailForm = EmailForm;
exports.EnterFormBar = EnterFormBar;
exports.FormWithOptions = FormWithOptions;
exports.PasswordForm = PasswordForm;
exports.useDebounce = useDebounce;
//# sourceMappingURL=index.js.map
