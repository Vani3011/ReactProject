import React from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
export const SelectBox = ({
    value = "",
    onChange=()=>false,
    label="Text",
    options="Text"
   
}) =>{
return(
    <div>
         <Autocomplete
      sx={{ width: 250 }}
        //  multiple
        
        //  options={options.map((option) => option.label)}
      options={options}
      onChange={onChange}
      value={value}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
    </div>
)
}