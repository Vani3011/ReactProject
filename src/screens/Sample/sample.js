import React ,{useContext} from "react"
import { Table } from "./components"
import CreateSampleContext from "./context"

export const Sample = () => {
    const test = useContext(CreateSampleContext)

    // const TableData = useContext(CreateSampleContext)
    console.log("Table",test)
    return (
        <div>
           hi
        </div>
    )
}
