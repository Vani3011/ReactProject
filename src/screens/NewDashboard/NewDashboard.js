import { Grid } from "@mui/material"
import React from "react"
import { TopNavBar, SideNavBar, MyList, MoreList } from "./components"
import { NewDashboardStyles } from "./styles"
export const NewDashboard = () => {
    const classes = NewDashboardStyles()
    const cardData = [
        {
            date: "Jun 22 2022 | 7.30 PM",
            description: "Completion of productivity framework design on or before july 7th,2021",
            percentage: 30
        },
        {
            date: "Jun 22 2022 | 7.30 PM",
            description: "Completion of productivity framework design on or before july 7th,2021",
            percentage: 40
        },
        {
            date: "Jun 22 2022 | 7.30 PM",
            description: "Completion of productivity framework design on or before july 7th,2021",
            percentage: 55
        },


    ]
    const cardData1 = [
        {
            title: "List 1",
            count: 10,
            cardData: [
                {
                    date: "Jun 22 2022 | 7.30 PM",
                    description: "Completion of productivity framework design on or before july 7th,2021",
                    percentage: 30
                },

            ]
        },
        {
            title: "List 2",
            count: 18,
            cardData: [
                {
                    date: "Jun 22 2022 | 7.30 PM",
                    description: "Completion of productivity framework design on or before july 7th,2021",
                    percentage: 15
                },
                {
                    date: "Jun 22 2022 | 7.30 PM",
                    description: "Completion of productivity framework design on or before july 7th,2021",
                    percentage: 55
                },

            ]
        },
        {
            title: "List 3",
            count: 15,
            cardData: [
                {
                    date: "Jun 22 2022 | 7.30 PM",
                    description: "Completion of productivity framework design on or before july 7th,2021",
                    percentage: 30
                },
                {
                    date: "Jun 22 2022 | 7.30 PM",
                    description: "Completion of productivity framework design on or before july 7th,2021",
                    percentage: 40
                },
                {
                    date: "Jun 22 2022 | 7.30 PM",
                    description: "Completion of productivity framework design on or before july 7th,2021",
                    percentage: 55
                },
            ]
        },

    ]
    return (
        <>

            <Grid container spacing={0}>
                <Grid item xs={0.8}>
                    <div className={`${classes.sidenav}`}><SideNavBar /></div>
                </Grid>
                <Grid item>
                    <div className={`${classes.topnav}`}><TopNavBar /></div>
                </Grid>
                <Grid item xs={11.2}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <MyList count="10" CardData={cardData} />
                        </Grid>
                        <Grid item xs={8}>
                            <MoreList CardData1={cardData1} />
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>


        </>
    )
}