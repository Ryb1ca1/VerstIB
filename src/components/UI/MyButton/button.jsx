import React from "react";

export default function button ({className, children, ...props}) {
    return(
        <button {...props} className={className} >
            {children}
        </button>
    )
}