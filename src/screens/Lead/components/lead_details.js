import React from "react";
import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import { useStyles } from "./styles"
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Divider from '@mui/material/Divider';

export const LeadDetails = () => {
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
            <Typography sx={{ fontSize: 14, marginBottom: "10px", textTransform: "upperCase", color: "black", fontWeight: "500" }}>
                Lead Details
            </Typography>
            <Card>
                <div className={`${classes.leadDetailhdr}`}>
                    <div >
                        <Typography sx={{ fontSize: 14, color: "black", fontWeight: "500" }}>
                            Tom Crusie Jackson
                        </Typography>
                    </div>
                    <div className={`${classes.breadcrumbhdr}`}>
                        <Breadcrumbs separator={<div className={`${classes.dot}`}></div>} aria-label="breadcrumb">
                            {breadcrumbs}
                        </Breadcrumbs>
                    </div>
                </div>
                <div><Divider /></div>
                <div className={`${classes.leadDetailhdr}`}>
                    <div>
                        <Typography sx={{ fontSize: 11, color: "gray", fontWeight: "500", textTransform: "upperCase" }}>
                            Description / Requirement
                        </Typography>
                    </div>
                    <div className={`${classes.breadcrumbhdr}`}>
                        <Typography sx={{ fontSize: 12, color: "gray" }}>
                            Description / Requirement can be typed here
                        </Typography>
                    </div>
                </div>
            </Card>
        </div>
    )
}
