
import Button from "@mui/material/Button"
import React, { useContext } from "react"
import { TableList } from "../../../components"
import { CreateSampleContext } from "../context"

export const Table = () =>{
    const {TableData,setOpen} = useContext(CreateSampleContext)

return(
    <>
    <Button variant="contained" sx={{float:"right",marginBottom:"15px"}} onClick={()=>{setOpen(true)}}>+ Add</Button>
    <TableList data={TableData}/>
    </>
)
}