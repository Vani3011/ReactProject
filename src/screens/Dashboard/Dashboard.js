import { Box, Grid } from "@mui/material"
import React from "react"
import { CardComponent, GraphComponent, Bar } from "./components"
import { useStyles } from "./styles"
import { GroupIcon, LeadsIcon, ParkingIcon } from "./assests"

export const Dashboard = () => {
    const classes = useStyles()
    const graph = Array.from(Array(5).keys())?.map((v, i) => {
        return {
            name: `Vacant${i * 1}` ?? "",
            count: 10 ?? "",
            fill: `#${Math.random().toString(16).substring(2, 8)}`,
        };
    });
    const cardData = [
        {
            count: 10,
            icon: <GroupIcon />,
            title: "Active Leads"

        },
        {
            count: 12,
            icon: <LeadsIcon />,
            title: "Active Opportunities"

        },
        {
            count: 8,
            icon: <ParkingIcon />,
            title: "Active Reservations"

        }
    ]
    const scale = {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        },
        xAxes: [
            {
                gridLines: { display: false },
            },
        ],
        yAxes: [
            {
                gridLines: {
                    drawBorder: false,
                },
                ticks: {
                    min: 30,
                },
            },
        ],
    };
    const barGraphData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                backgroundColor: `#${Math.random().toString(16).substring(2, 8)}`,
                borderWidth: 1,
                //stack: 1,
                data: [65, 59, 80, 110, 56, 5, 10],
            },

            {
                label: "My second dataset",
                backgroundColor: `#${Math.random().toString(16).substring(2, 8)}`,
                borderWidth: 1,
                //stack: 1,
                data: [45, 79, 50, 41, 16, 85, 20],
            },
        ],
    };
    const TableData=[{
        Name:"Ram",
        Age:"20",
        salary:"20000",
        Number:"9876123450"

    },
    {
        Name:"Ram",
        Age:"20",
        salary:"20000",
        Number:"9876123450"

    },
    {
        Name:"Ram",
        Age:"20",
        salary:"20000",
        Number:"9876123450"

    },
    {
        Name:"Ram",
        Age:"20",
        salary:"20000",
        Number:"9876123450"

    },
    {
        Name:"Ram",
        Age:"20",
        salary:"20000",
        Number:"9876123450"

    },
    {
        Name:"Ram",
        Age:"20",
        salary:"20000",
        Number:"9876123450"

    },
    {
        Name:"Ram",
        Age:"20",
        salary:"20000",
        Number:"9876123450"

    },
    {
        Name:"Ram",
        Age:"20",
        salary:"20000",
        Number:"9876123450"

    },
]

    
    return (
        <Box className={`${classes.boxContent}`}>
            {/* firstblock */}
            <Grid container spacing={2} style={{ marginBottom: "20px" }}>
                {/*card */}
                <Grid item xs={12} sm={6} lg={1.5}>
                    <Grid container spacing={2}>
                        {cardData.map((x) => {
                            return (
                                <Grid item xs={12}>
                                    <CardComponent data={x} />
                                </Grid>
                            )
                        })}

                    </Grid>
                </Grid>
                {/* piechart */}
                <Grid item xs={3}>
                    <GraphComponent
                        data={graph}
                        title="Lead Count by Status"
                        isPie
                    />
                </Grid>
                {/* piechart */}

                <Grid item xs={3}>
                    <GraphComponent
                        data={graph}
                        title="Opportunity Count by Lead Source"
                        isPie
                    />
                </Grid>
                {/* barchart */}
                <Grid item xs={4}>
                    <GraphComponent
                        data={barGraphData}
                        title="Opportunity Count by Status"
                        isbar
                    />
                </Grid>

            </Grid>
            {/* secondblock */}
            <Grid container spacing={2} style={{ marginBottom: "20px" }}>
                {/*card */}
                <Grid item xs={12} sm={6} lg={1.5}>
                    <Grid container spacing={2}>
                        {cardData.map((x) => {
                            return (
                                <Grid item xs={12}>
                                    <CardComponent data={x} />
                                </Grid>
                            )
                        })}

                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} lg={5}>
                    <GraphComponent
                        data={barGraphData}
                        title="Opportunity Revenue by Status"
                        scale={scale}
                        isbar

                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={5}>
                    <GraphComponent
                        data={barGraphData}
                        title="Opportunity Count By Period"
                        isbar
                        indexAxis={"y"}
                    />
                </Grid>

            </Grid>
            {/* thirdblock */}
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <GraphComponent
                        data={graph}
                        title="Reservation & Booking Status"
                        isPie
                        innerRadius={50}
                        total={5}
                        isTotal
                    />
                </Grid>
                <Grid item xs={3}>
                    <GraphComponent
                        data={graph}
                        title="Inspection Request Status"
                        isPie
                        innerRadius={50}
                        total={5}
                        isTotal
                    />
                </Grid>
                <Grid item xs={6}>
                    {/* table */}
                    <GraphComponent
                        data={TableData}
                        title="Team Performance"
                        isTable
                       
                    />
                </Grid>
                
            </Grid>
        </Box>
    )
}