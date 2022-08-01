import { Box, Grid, Typography } from "@mui/material"
import React from "react"
import { DashboardStyles } from "./styles"
import { CardComponent } from "./cardComponent"

export const MoreList = ({ CardData1 = [] }) => {
    const classes = DashboardStyles()
    const colors = ["#FFF4EB", "#EBEDF5", "#E8F0DA", "#E4F5EF"]

    return (
        <Box className={`${classes.moreList}`}>
            <Grid container spacing={1}>
                {CardData1.map((x, i) =>
                    <Grid item xs={5.5} className={`${classes.moreListContent}`} sx={{ backgroundColor: `${colors[i]}` }}>
                        <Box >
                            <Box className={`${classes.extraList}`}>
                                <Typography className={`${classes.extralistTitle}`}>
                                    {x.title}
                                </Typography>
                                <div className={`${classes.morecount}`}><Typography className={`${classes.counttext}`}>{x.count}</Typography></div>
                            </Box>
                        </Box>
                        <Box className={`${classes.cardScroll}`}>
                            {x?.cardData.map((x) => {
                                return <CardComponent
                                    date={x.date}
                                    description={x.description}
                                    percentage={x.percentage}
                                />
                            })}
                        </Box>
                    </Grid>
                )}
            </Grid>
        </Box>
    )
}