import React from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
  
export const MultiSelect = ({
    value = [],
    onChange=()=>false,
    label="Text",
    options="Text"
   
}) =>{
return(
    <div>
   <Autocomplete
        multiple
        options={options}
        onChange={onChange}
        getOptionLabel={(option) => option.name}
        defaultValue={value}
        renderInput={(params) => (
          <TextField
            {...params}
            // variant="standard"
            label={label}
            placeholder="Places"
          />
          )}
          />
    </div>
)
}