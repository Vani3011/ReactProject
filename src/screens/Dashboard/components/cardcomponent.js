import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./styles";

export const CardComponent = ({data={}}) =>{
    const classes=useStyles()
    return(
        <Box className={`${classes.cardbody}`}>
          <Grid container spacing={2}>
            {/* count */}
            <Grid item xs={6}>
                <Typography className={`${classes.totalcount}`}>{data?.count}</Typography>
            </Grid>
            {/* icon */}
            <Grid item xs={6}>
                <Typography>{data?.icon}</Typography>
            </Grid>
            {/* title */}
            <Grid item xs={6}>
                <Typography className={`${classes.cardTitle}`}>{data?.title}</Typography>
            </Grid>
          </Grid>
        </Box>
    )
}