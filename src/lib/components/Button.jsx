import React from "react";

const buttonStyles =
    "flex align-middle justify-center px-11 py-2.5 text-base font-semibold border-2 rounded-2xl transition-all duration-300 hover:bg-opacity-95";

const Button = ({ children, className, onClick }) => {
    return (
        <button
            className={`${buttonStyles} text-white bg-rwc-primary1 ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
export default Button;
