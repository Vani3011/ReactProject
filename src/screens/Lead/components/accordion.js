import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Grid, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import React from "react";
import { useStyles } from "./styles";

export const Accordion = ({AccordionData}) => {
    const classes = useStyles()
    return (
        <div className={`${classes.accordionhdr}`}>
        {AccordionData?.map((data,i)=>
        <Card className={`${classes.accordionhdrCard}`}>
            <div className={`${classes.accordionDetailhdr}`}>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={2}
            >
                    <Grid item xs={1}>
                       <div className={`${classes.accordionIcon}`}>{data.icon}</div> 
                    </Grid>
                    <Grid item xs={10}>
                    <Typography sx={{ fontSize: 14, color: "black", fontWeight: "500" }}>
                 {data.name}
                 </Typography>
                    </Grid>
                    <Grid item xs={1}>
                       
                <ArrowForwardIosIcon className={`${classes.accordionArrowIcon}`}/>
             
                    </Grid>
                </Grid>
            </div>
        </Card>
        )}
        </div>
    )
}