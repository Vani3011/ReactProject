import React, { useContext, useEffect, useState } from "react"
import { BasicTable, BasicForm } from "./components"
import { Grid } from "@mui/material"
import { CreateSampleContext } from "./context"


export const Example = () => {

    const { tabledata} = useContext(CreateSampleContext)

    return (
        <div style={{ margin: "30px" }}>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={6}
            >
                <Grid item xs={7}><BasicTable rows={tabledata} /></Grid>
                <Grid item xs={5}><BasicForm /></Grid>

            </Grid>
        </div>
    )
}