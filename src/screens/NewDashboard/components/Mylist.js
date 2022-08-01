import { Typography, Box } from "@mui/material"
import React from "react"
import { CardComponent } from "./cardComponent"
import { DashboardStyles } from "./styles"
import { SearchBox } from "../../../components"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
export const MyList = ({ count = "" ,CardData=[]}) => {

    const classes = DashboardStyles()
    return (
        <Box className={`${classes.MyListRoot}`}>
            <Box className={`${classes.MyList}`}>
                <Typography className={`${classes.MyListTitle}`}>
                    My List
                </Typography>
                <div className={`${classes.count}`}><Typography className={`${classes.counttext}`}>{count}</Typography></div>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}  marginTop={"20px"}>
            <Box className={`${classes.listSearch}`}>
                <SearchBox width="320px"/>
            </Box>
            <Box className={`${classes.filterIcon}`}>
                <FilterAltOutlinedIcon sx={{marginTop:"3px"}}/>
            </Box>
            </Box>
            <Box>
                <div className={`${classes.menu}`}>
                    <div className={`${classes.options}`}>
                        <Typography className={`${classes.optionName}`}>Today</Typography>
                        <KeyboardArrowDownIcon sx={{fontSize:"22px",marginLeft:"5px"}}/>
                    </div>
                    <div className={`${classes.options}`}>
                        <Typography className={`${classes.optionName}`}>Next</Typography>
                        <KeyboardArrowDownIcon sx={{fontSize:"22px",marginLeft:"5px"}}/>
                    </div>
                    <div className={`${classes.options}`}>
                        <Typography className={`${classes.optionName}`}>Open</Typography>
                        <KeyboardArrowDownIcon sx={{fontSize:"22px",marginLeft:"5px"}}/>
                    </div>
                </div>
            </Box>
            <Box className={`${classes.listScroll}`}>
                {CardData.map((x) => {
                    return <CardComponent
                        date={x.date}
                        description={x.description}
                        percentage={x.percentage}
                    />
                })}

            </Box>
        </Box>
    )
}