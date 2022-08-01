import { Box, Typography } from "@mui/material"
import React from "react"
import { TreeViewComponent } from "./components"
import { UserManagementStyles } from "./styles"
export const UserManagement = () => {
    const classes = UserManagementStyles()
    return (
        <Box className={`${classes.userRoot}`}>
        <Box display={"flex"} justifyContent={"space-between"}>
            <Box>
                <Typography>Repository</Typography>
            </Box>
            <Box display={"flex"}>
                <Typography className={`${classes.methods}`}>Create</Typography>
                <Typography className={`${classes.methods}`}>Read</Typography>
                <Typography className={`${classes.methods}`}>Update</Typography>
                <Typography className={`${classes.methods}`}>Delete</Typography>
            </Box>
        </Box>
        <Box className={`${classes.TreeSection}`}>
            <TreeViewComponent  isCheckbox/>
        </Box>
        </Box>
    )
}