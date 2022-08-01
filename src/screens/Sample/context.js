import React, { createContext, useState } from "react";

export const CreateSampleContext = createContext();

const CreateSampleProvider = (props) => {
const [TableData, setTableData] = useState([
    {
      
        Name: "Ajay",
        Role: "student",
        Number: 9815215233
      },
      {
        
        Name: "Arjun",
        Role: "student",
        Number: 9815215233
      }
])
const [open,setOpen]=useState(false)

    return (
        <CreateSampleContext.Provider value={{TableData, setTableData ,open,setOpen}}>
            {props.children}
        </CreateSampleContext.Provider>
    )
}
export default CreateSampleProvider
