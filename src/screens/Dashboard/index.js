import { Box } from "@mui/material"
import React from "react"
import { Dashboard } from "./Dashboard"
import { useStyles } from "./styles"
const DashboardParent = () => {
    const classes=useStyles()
    return (
        <Box className={`${classes.boxContentBody}`}>
        <Dashboard />
        </Box>
    )
}
export default DashboardParent