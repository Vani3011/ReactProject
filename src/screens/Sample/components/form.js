import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Drawer from '@mui/material/Drawer';
import React, { useContext, useState } from "react";
import { TextBox } from "../../../components";
import { CreateSampleContext } from "../context";
import { useStyles } from "./styles";
export const Form = () => {
    const classes = useStyles()
    const { open, setOpen, TableData, setTableData } = useContext(CreateSampleContext)
    const state = {
        Name: "",
        Role: "",
        Number: "",

    }
    const [data, setData] = useState({ ...state })
    // update function
    const updateFunction = (key, value) => {
        setData({ ...data, [key]: value })
    }
    // form submit function
    const submitHandler = () => {
        setTableData([...TableData, data])
        setOpen(false)
    }
    return (
        <>
            <Drawer
                anchor="right"
                open={open}
                onClose={() => { setOpen(false) }}
            >
                <div className={`${classes.formComponent}`}>
                    <Typography className={`${classes.inputbox}`}>Add Member </Typography>
                    <div className={`${classes.inputbox}`}>
                        <TextBox
                            label="Name"
                            placeholder="Enter Name"
                            value={data?.Name ?? ""}
                            // defaultValue={"A"}
                            onChange={(e) => { updateFunction('Name', e?.target?.value) }}
                        />
                    </div>

                    <div className={`${classes.inputbox}`}>
                        <TextBox
                            label="Role"
                            placeholder="Enter Role"
                            value={data?.Role ?? ""}
                            // defaultValue={"A"}
                            onChange={(e) => { updateFunction('Role', e?.target?.value) }}
                        />
                    </div>
                    <div className={`${classes.inputbox}`}>
                        <TextBox
                            label="Number"
                            placeholder="Enter Number"
                            value={data?.Number ?? ""}
                            // defaultValue={"A"}
                            onChange={(e) => { updateFunction('Number', e?.target?.value) }}
                        />
                    </div>
                    <div>
                        <Button variant="contained" onClick={() => submitHandler()} className={`${classes.submitbtn}`}>Submit</Button>
                    </div>
                </div>
            </Drawer>
        </>
    )
}