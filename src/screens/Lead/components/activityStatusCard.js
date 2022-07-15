import React from "react"
import { Grid, Typography } from "@mui/material"
import Card from '@mui/material/Card';
import PhoneIcon from '@mui/icons-material/Phone';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';


import { useStyles } from "./styles"
const ActivityCard = () => {
    const classes = useStyles()
    return (
        <>
        <Card className={`${classes.activityMainCard}`}>
            <div className={`${classes.activityHeaderCard}`}>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={2}
                >

                    <Grid item xs={6}>
                        <div className={`${classes.PhoneIcon_div}`}>
                            <PhoneIcon className={`${classes.PhoneIcon}`} />
                            <Typography className={`${classes.PhoneIcon_Text}`}>Phone Call</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <EditIcon className={`${classes.editForActivity}`} />
                    </Grid>



                </Grid>
            </div>
            <div style={{padding:"20px"}}>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={2}
                >

                    <Grid item xs={2}>
                        
                        <Typography className={`${classes.activityTitle}`}>Category</Typography>
                        <Typography className={`${classes.activityDescription}`}>category</Typography>
                      
                    </Grid>
                    <Grid item xs={2}>
                       
                        <Typography className={`${classes.activityTitle}`}>Purpose</Typography>
                        <Typography className={`${classes.activityDescription}`}>Purpose</Typography>
                      
                    </Grid>
                    <Grid item xs={2}>
                       
                       <Typography className={`${classes.activityTitle}`}>Start Date</Typography>
                       <Typography className={`${classes.activityDescription}`}>14 Dec</Typography>
                     
                   </Grid>
                   <Grid item xs={3}>
                       
                       <Typography className={`${classes.activityTitle}`}>Phone Number</Typography>
                       <Typography className={`${classes.activityDescription}`}>9765432190</Typography>
                     
                   </Grid>
                   <Grid item xs={2}>
                       
                       <Typography className={`${classes.activityTitle}`}>Priority</Typography>
                       <Typography className={`${classes.activityDescription}`}>Medium</Typography>
                     
                   </Grid>

                </Grid>
            </div>
        </Card>
            <div className={`${classes.Note}`}>
            <Typography className={`${classes.NoteTitle}`}>Note</Typography>
            <Typography className={`${classes.NoteDescription}`}>Lead requested to call</Typography>
        </div>
        <div>
        <Button variant="contained" className={`${classes.activityButton}`}>Mark as Completed</Button>
        </div>
        </>
    )
}
export default ActivityCard