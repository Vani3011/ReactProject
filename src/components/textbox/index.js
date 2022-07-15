import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';

export const TextBox = ({
    value = "",
    defaultValue="",
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
                    defaultValue={defaultValue}
                    onChange={onChange}
                    size="small"
                    fullWidth
                />
            </div>
        </div>
    )
}
