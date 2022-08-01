import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import LooksIcon from '@mui/icons-material/Looks';
import SettingsIcon from '@mui/icons-material/Settings';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { AppBar, Box, Typography } from "@mui/material";
import React from "react";
import { DashboardStyles } from "./styles";

export const SideNavBar = () => {
    const classes = DashboardStyles()
    return (
        <Box display="flex" flexDirection="row">
            <Box flexGrow={0}>
                <AppBar elevation={0} position="sticky" className={`${classes.root}`}>
                <Box display={"flex"} justifyContent={"center"}>
                        <AllInclusiveIcon className={`${classes.infiniteicon}`} />
                    </Box>
                    <Box display={"flex"} justifyContent={"center"} marginBottom={"20px"}>
                        <Box>
                        <LocalFireDepartmentIcon className={`${classes.icon}`} />  
                        <Typography className={`${classes.label}`}>Actions</Typography>
                        </Box>
                       
                    </Box>
                    <Box display={"flex"} justifyContent={"center"} marginBottom={"20px"}>
                        <Box>
                        <LooksIcon className={`${classes.icon}`} />  
                        <Typography className={`${classes.label}`}>Goals</Typography>
                        </Box>
                       
                    </Box>
                    <Box display={"flex"} justifyContent={"center"} marginBottom={"20px"}>
                        <Box>
                        <TextSnippetIcon className={`${classes.icon}`} />  
                        <Typography className={`${classes.label}`}>Docs</Typography>
                        </Box>
                       
                    </Box>
                    <Box display={"flex"} justifyContent={"center"} marginBottom={"20px"}>
                        <Box>
                        <HourglassBottomIcon className={`${classes.icon}`} />  
                        <Typography className={`${classes.label}`}>Canvas</Typography>
                        </Box>
                       
                    </Box>
                    <Box display={"flex"} justifyContent={"center"} marginTop={"120px"}>
                        <Box>
                        <SettingsIcon className={`${classes.icon}`} />  
                        <Typography className={`${classes.label}`}>Settings</Typography>
                        </Box>
                       
                    </Box>
                   
                   
                </AppBar>
            </Box>
        </Box>
    )
}