import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { Box, Grid, Typography } from "@mui/material";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
    Pie,
    PieChart, Tooltip
} from "recharts";
import { TableList } from "../../../components";
import { useStyles } from "./styles";
const Tip = ({ setShowTooltip, ...rest }) => {
    const classes = useStyles();
    const [payload, setPayload] = React.useState(rest?.payload);

    React.useEffect(() => {
    
        rest?.payload?.length && setPayload(rest?.payload);
    }, [rest?.payload]);

    return payload?.length ? (
        <div
            onMouseLeave={() => setShowTooltip(false)}
            onMouseMove={(e) => e.stopPropagation()}
            className={classes.tooltip}
        >
            <Box
                className={classes.dot}
                style={{ backgroundColor: payload?.[0]?.payload?.fill }}
            />
            <Typography className={classes.value}>{payload?.[0]?.value}</Typography>
            <Typography className={classes.name}>{payload?.[0]?.name}</Typography>
        </div>
    ) : null;
};
export const GraphComponent = (props) => {
    const [showTooltip, setShowTooltip] = React.useState(false);

    const options = {
        indexAxis: props?.indexAxis ?? false,
        animation: false,
        responsive: true,
        plugins: {
            legend: {
                display: props?.datalabels ? false : true,
                position: "bottom",
                align: "start",
                width: "5px",
                labels: {
                    usePointStyle: true,
                },
                marginTop: "20px",
            },
            datalabels: {
                display: props?.datalabels ?? false,
                color: "#0F0C1D",
                formatter: Math.round,
                anchor: "end",
                offset: -25,
                align: "start",
                font: {
                    weight: "bold",
                    size: 14,
                },
            },
            annotation: {
                annotations: [
                    {
                        type: "line",
                        mode: "vertical",
                        scaleID: "y-axis-0",
                        value: 10,
                        borderColor: "red",
                        borderWidth: 4,
                        label: {
                            enabled: false,
                            content: "Test label",
                        },
                    },
                ],
            },
        },
        scale: {
            ticks: {
                precision: 0
            },
        },
        scales: props?.scale,
        type: "bar",
        position: "bottom",
        align: "center",
    };

    useEffect(() => {
        Chart.register([ChartDataLabels]);
    }, []);
    const classes = useStyles()
    return (
        <>
            <Box className={`${classes.graphBody}`}>
                <Grid container spacing={2}>
                    <Grid item xs={10}> <Typography className={`${classes.chartTitle}`}>{props?.title}</Typography></Grid>
                    <Grid item xs={2}><div className={`${classes.arrowIcon}`}><OpenInFullIcon/></div></Grid>

                </Grid>

                {props?.isPie ?
                    <div className={classes.chart}>
                        <PieChart
                            width={200}
                            height={200}
                            onMouseLeave={() => setShowTooltip(false)}
                        >
                            <Pie
                                data={props?.data}
                                cx="50%"
                                cy="50%"
                                innerRadius={props?.innerRadius}
                                outerRadius={100}
                                dataKey="count"
                                onMouseEnter={() => setShowTooltip(true)}
                            />
                            {showTooltip && (
                                <Tooltip
                                    // Anymation is a bit weird when the tooltip shows up after hidding
                                    isAnimationActive={false}
                                    // Send props down to get the payload
                                    content={<Tip setShowTooltip={setShowTooltip} />}
                                    // We need this to manage visibility ourselves
                                    wrapperStyle={{ visibility: "visible", pointerEvents: "auto" }}
                                />
                            )}
                        </PieChart>
                    </div>
                    : props?.isbar ? <Bar
                        data={props?.data}
                        width={null}
                        height={null}
                        options={options}
                        plugins={[ChartDataLabels]}
                    /> : props?.isTable &&
                    <div className={`${classes.tableComponent}`}> <TableList data={props?.data} /></div>


                }


                {props?.isTotal && (
                    <div className={classes.center}>
                        <Typography className={classes.count}>{props?.total ?? 0}</Typography>
                        <Typography className={classes.title}>Total</Typography>
                    </div>
                )}
          
            </Box>

        </>
    )
}