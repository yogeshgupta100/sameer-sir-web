import React from "react";

const Input = ({ label, type = "text" }) => {
    return (
        <div className="input">
            <label htmlFor={label}>{label}</label>
            <input type={type} id={label} />
        </div>
    );
};

export default Input;
