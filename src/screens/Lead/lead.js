import React from "react"
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import { useStyles } from "./styles";
import {LeadDetails,AllocatedDetails,Accordion,Tabs} from "./components"
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

export const Lead = () => {
    const classes = useStyles()
    const AccordionData = [
        {
        icon:<PersonIcon sx={{color:"#9bf79b"}}/>,
        name:"Convert To Opportunity"
    },
    {
        icon:<GroupIcon sx={{color:"#82c1eb"}}/>,
        name:"Transfer Lead"
    },
    {
        icon:<GroupAddIcon sx={{color:"#e7a2e5"}}/>,
        name:"Last Lead"
    }
]
    return (
        <Card className={`${classes.cardMain}`}>

            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={2}
            >
                <Grid item xs={4}>
                    <div className={`${classes.leaddetailsContent}`}>
                  <LeadDetails/>
                  <AllocatedDetails/>
                  <Accordion AccordionData={AccordionData}/>
                  </div>
                </Grid>

                <Grid item xs={8}>
                  <Card className={`${classes.tabContent}`}>
                 <Tabs/>
                  </Card>
                </Grid>
            </Grid>
        </Card>
    )
}
