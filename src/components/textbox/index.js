import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';

export const TextBox = ({
    value = "",
    onChange=()=>false,
    label="Text",
    placeholder="Text"
}) => {
    return (
        <div >
            <div>
                <TextField
                    label={label}
                    placeholder={placeholder}
                    value={value}
                   
                    onChange={onChange}
                    size="small"
                    fullWidth
                />
            </div>
        </div>
    )
}
