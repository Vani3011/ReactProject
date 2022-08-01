import { Box } from "@mui/system"
import { Button, Grid } from "@mui/material"
import React, { useState, useContext, useEffect } from "react"
import { TextBox } from "../../../components"
import { useStyles } from "./styles"
import { CreateSampleContext } from "../context"
import axios from "axios"
import { apiUrl } from "../../config"

export const BasicForm = () => {
    const classes = useStyles()
    const state = {
        Name: "",
        salary: "",
        city: "",
        Number: "",

    }
    const [data, setData] = useState({ ...state })
    const { edit, setTableData, editData, setEditData, setEdit } = useContext(CreateSampleContext)



    // update function
    const updateFunction = (key, value) => {
        setData({ ...data, [key]: value })
    }

    //useEffect
    useEffect(() => {
        setData(editData)
    }, [])

    //getApi
    const getTableData = () => {
        axios.get(`${apiUrl}/crudapp`).then((res) => {
            setTableData(res.data)

        })
    }
    //submitform
    const submitForm = () => {

        //update
        if (edit === true) {
            axios.put(`${apiUrl}/crudapp/${editData.id}`, data).then((res) => {
                getTableData()
                setEditData([])
                setData([])
                setEdit(false)


            })
        }
        //add
        else {
            axios.post(`${apiUrl}/crudapp`, data).then((res) => {
                getTableData()
                setData([])

            }
            )
        }
    }
    return (
        <Box className={`${classes.BoxStyle}`}>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={2}
                className={`${classes.gridStyle}`}
            >
                <Grid item xs={8}>
                    <TextBox
                        label="Name"
                        placeholder="Enter Name"
                        value={data?.Name ?? editData?.Name ?? ""}
                        fullwidth
                        onChange={(e) => { updateFunction('Name', e?.target?.value) }}
                    />
                </Grid>

                <Grid item xs={8}>
                    <TextBox
                        label="City"
                        placeholder="Enter City"
                        value={data?.city ?? editData?.city ?? ""}
                        fullwidth
                        onChange={(e) => { updateFunction('city', e?.target?.value) }}
                    />
                </Grid>

                <Grid item xs={8}>
                    <TextBox
                        label="Mobile Number"
                        placeholder="Enter Number"
                        value={data?.Number ?? editData?.Number ?? ""}
                        fullwidth
                        onChange={(e) => { updateFunction('Number', e?.target?.value) }}
                    />
                </Grid>
                <Grid item xs={8}>
                    <TextBox
                        label="Salary"
                        placeholder="Enter Salary"
                        value={data?.salary ?? editData?.salary ?? ""}
                        fullwidth
                        onChange={(e) => { updateFunction('salary', e?.target?.value) }}
                    />
                </Grid>
                <Grid item xs={8}>
                    <Button variant="contained" size="large" className={`${classes.submitbtn}`} onClick={() => submitForm()}>
                        {edit === true ? "Update" : "Submit"}
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}