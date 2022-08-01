import React from "react"
import { Form, Table } from "./components"
import { useStyles } from "./styles"

export const Sample = () => {
    const classes=useStyles()
    return (
        <div className={`${classes.tableMain}`}>
           <Table/>
           <Form/>
        </div>
    )
}
