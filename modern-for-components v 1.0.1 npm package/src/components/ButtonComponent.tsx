import  React,{useState} from "react";

export function ButtonComponent() {
    const [rippleEffect, setRippleEffect] = useState(false);

    const triggerRipple = (event:any) => {
        setRippleEffect(true);
        const ripple = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - ripple.left;
        const y = event.clientY - ripple.top;

        const rippleElement = document.createElement('span');
        rippleElement.className = 'ripple';
        rippleElement.style.left = `${x}px`;
        rippleElement.style.top = `${y}px`;
        event.currentTarget.appendChild(rippleElement);

        setTimeout(() => {
            rippleElement.remove();
            setRippleEffect(false);
        }, 600);
    };

    return (
        <button
            onClick={triggerRipple}
            className="w-full px-6 py-3 text-white font-semibold bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 focus:outline-none"
        >
            Submit
            {rippleEffect && <span className="absolute inset-0 bg-white opacity-30 rounded-full animate-ping" />}
        </button>
    );
}