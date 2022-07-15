import React, { createContext, useState } from "react";

export const CreateSampleContext = createContext();

const CreateSampleProvider = (props) => {
const [TableData, setTableData] = useState([
    {
        id: "E101",
        Name: "Ajay",
        price: 500000,
        Property_Name: 9815215233
      },
      {
        id: "E101",
        Name: "Arjun",
        price: 500000,
        Property_Name: 9815215233
      }
])
const test="hi"

    return (
        <CreateSampleContext.Provider value={{TableData, setTableData ,test}}>
            {props.children}
        </CreateSampleContext.Provider>
    )
}
export default CreateSampleProvider
