import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export  const TextArea = ({label="",onChange=()=>false,}) => {
  return (
    <TextareaAutosize
      aria-label={label}
      placeholder="Description"
      onChange = {onChange}
      minRows={8}
      style={{width:"290px",borderRadius:"5px",border:"1px solid #c4c4c4"}}
    />
  );
}
