import React from "react";
import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import { useStyles } from "./styles";
import { Grid } from "@mui/material";
import Breadcrumbs from '@mui/material/Breadcrumbs';

// import { BreadCrumb } from "../../../components/breadCrumb/breadcrumb"


export const AllocatedDetails = () => {
    const classes = useStyles()
    const breadcrumbs = [
        <Typography key="1" color="text.primary">

            <div className={`${classes.breadcrumbText}`}>website link</div>
        </Typography>,
        <Typography key="2" color="text.primary">

            <div className={`${classes.breadcrumbText}`}>9087654321</div>


        </Typography>,
        <Typography key="3" color="text.primary">

            <div className={`${classes.breadcrumbText}`}>xyz@gmail.com</div>

        </Typography>,

    ];
    return (
        <div>
            <Typography sx={{ fontSize: 14,marginTop:"20px",marginBottom: "10px", textTransform: "upperCase", color: "black", fontWeight: "500" }}>
                Allocated Details
            </Typography>
            <Card>
                <div className={`${classes.leadDetailhdr}`}>
                <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={2}
            >
                <Grid item xs={2}>
                    <div >
                       <img className={`${classes.profileImg}`} src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" alt="profile"/>
                    </div>
                    </Grid>
                    <Grid item xs={10}>
                    <div >
                        <Typography sx={{ fontSize: 14, color: "black", fontWeight: "500" }}>
                            Tom
                        </Typography>
                    </div>
                    <div className={`${classes.breadcrumbhdr}`}>
                        <Breadcrumbs separator={<div className={`${classes.dot}`}></div>} aria-label="breadcrumb">
                            {breadcrumbs}
                        </Breadcrumbs>
                    </div>
                    </Grid>
                    
                    </Grid>
                 
                </div>
               
            </Card>
        </div>
    )
}
