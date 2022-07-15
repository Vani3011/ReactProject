import React, { useState } from "react";
import Card from "@mui/material/Card";
import { Grid, Typography } from "@mui/material";
import { useStyles } from "./styles";
import PhoneIcon from '@mui/icons-material/Phone';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { SelectBox, TextBox } from '../../../components'
import Button from "@mui/material/Button";


const CreateActivity = () => {
    const classes = useStyles()
    const options = [
        { label: 'A', id: 1 },
        { label: 'B', id: 2 },
    ];
    const [form, setForm] = useState(false)
    const CreateData = [
        {
            icon: <PhoneIcon sx={{ fontSize: "35px" }} />,
            name: "Phone Call"
        },
        {
            icon: <GroupAddIcon sx={{ fontSize: "35px" }} />,
            name: "Follow Up"
        }
    ]
    return (
        <div>
            {form === true ?

                <div className={`${classes.createActivitycard}`}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        spacing={2}
                    >

                        <Grid item xs={6}>
                            <Typography className={`${classes.text}`}>Category</Typography>
                            <SelectBox label="Category" options={options} />

                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={`${classes.text}`}>Purpose</Typography>
                            <SelectBox label="Purpose" options={options} />

                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={`${classes.text}`}>Mobile Number</Typography>
                            <TextBox />

                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={`${classes.text}`}>Date</Typography>
                            <TextBox />

                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={`${classes.text}`}>Notes</Typography>
                            <TextBox />

                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={`${classes.text}`}>Priority</Typography>
                            <div className={`${classes.createActivityButtons}`}>
                                <Button variant="contained" className={`${classes.activitypriorityButton}`}>Urgent</Button>
                                <Button variant="contained" className={`${classes.activityMediumButton}`}>Medium</Button>
                                <Button variant="contained" className={`${classes.activityMediumButton}`}>Low</Button>

                            </div>

                        </Grid>
                    </Grid>
                    <div className={`${classes.Submit}`}>
                        {/* <Button variant="contained">Cancel</Button> */}
                        <Button variant="contained">Submit</Button>
                    </div>
                </div>


                :
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={2}
                >
                    {CreateData.map((data) =>
                        <Grid item xs={4}>
                            <Card className={`${classes.createActivitycard}`} onClick={() => setForm(true)}>
                                <div className={`${classes.createActivitycard_div}`}>
                                    <span className={`${classes.createPhoneIcon}`}>{data.icon}</span>
                                </div>
                                <div className={`${classes.createActivitycard_div}`}>
                                    <Typography className={`${classes.createActivity_text}`}>{data.name}</Typography>
                                </div>
                            </Card>
                        </Grid>
                    )}
                </Grid>
            }


        </div>
    )
}
export default CreateActivity