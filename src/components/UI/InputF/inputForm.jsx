import React from "react";

export default function inputForm ({className, placeholder, ...props}) {
    return (
        <input {...props} className={className} placeholder={placeholder} />
    )
}