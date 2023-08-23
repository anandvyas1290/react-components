import React from "react";

export function PrimaryBtn({ children, className }) {
    return (
        <button
            className={`px-11 py-2.5 flex align-middle justify-center text-base font-semibold bg-primaryBtn text-white1 font-jakarta border-2 rounded-full hover:bg-opacity-95 transition-all duration-300 ${className}`}
        >
            {children}
        </button>
    );
}

export function SecondaryBtn({ children, bgColor, className }) {
    return (
        <button
            className={`px-11 py-2.5 flex align-middle justify-center text-base font-semibold border-gray-300 text-gray-700 outline-none font-jakarta ${bgColor} border-2 rounded-full hover:bg-opacity-95 transition-all duration-300 ${className}`}
        >
            {children}
        </button>
    );
}
export function SecondaryBtn2({ children, bgColor, className }) {
    return (
        <button
            className={`px-11 py-2.5 flex align-middle justify-center text-base font-semibold bg-white border-gray-300 text-gray-700 outline-none font-jakarta ${bgColor} border-2 rounded-full hover:bg-opacity-95 transition-all duration-300 ${className}`}
        >
            {children}
        </button>
    );
}
