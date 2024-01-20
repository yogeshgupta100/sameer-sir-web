import React from "react";

const Select = ({ label, optionsValue }) => {
    return (
        <div className="select">
            <label htmlFor="select label">{label}</label>
            <select name="select">
                <option className="disable"></option>
                {optionsValue &&
                    optionsValue.map((course) => (
                        <option key={course.id} value={course.id} style={{fontSize:"clamp(1rem , 1.11vw , 3rem" , minWidth:"100%"}}>
                            {course.attributes.name}
                        </option>
                    ))}
            </select>
        </div>
    );
};

export default Select;
