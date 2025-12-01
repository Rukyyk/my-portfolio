import React from "react";



function Button(props) {
    const {name, style} = props;
    return (
        <button className={`${style} text-black rounded-sm`}>
            {name}
        </button>
    )
}
export default Button;