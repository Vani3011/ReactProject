import React, { createContext, useState } from "react";

export const CreateSampleContext = createContext();

const CreateSampleProvider = (props) => {

const [edit,setEdit]=useState(false)
const [editData,setEditData]=useState({})

const [tabledata,setTableData] = useState([])

    return (
        <CreateSampleContext.Provider value={{edit,setEditData,tabledata,setTableData,editData,setEdit}}>
            {props.children}
        </CreateSampleContext.Provider>
    )
}
export default CreateSampleProvider
