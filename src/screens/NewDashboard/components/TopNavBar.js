import NotificationsIcon from '@mui/icons-material/Notifications';
import { AppBar, Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { SearchBox } from "../../../components";
import { DashboardStyles } from "./styles";


export const TopNavBar = () => {
    const classes = DashboardStyles()
    return (

        <Box display="flex" flexDirection="row">

            <AppBar elevation={0} position="sticky" className={`${classes.TopNavroot}`}>
               
                   <Box display={"flex"} justifyContent={"space-between"}>
                    <Box display={"flex"}>
                        <Typography className={`${classes.title}`}>Productivity FrameWork</Typography>
                        <Box className={`${classes.searchBox}`}>
                          <SearchBox width="300px"/>
                        </Box>
                    </Box>
                    <Box display={"flex"} justifyContent={"end"}>
                    <NotificationsIcon className={`${classes.NotificationsIcon}`}/>
                    <Avatar className={`${classes.avatar}`}/>
                    </Box>
                    </Box>
                  
            
            </AppBar>

        </Box>
    )
}