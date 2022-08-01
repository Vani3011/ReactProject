import ArticleIcon from '@mui/icons-material/Article';
import FlagIcon from '@mui/icons-material/Flag';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarIcon from '@mui/icons-material/Star';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { DashboardStyles } from "./styles";
export const CardComponent = ({ date = "", description = "", percentage = "" }) => {
    const classes = DashboardStyles()
    return (
        <Box className={`${classes.cardBody}`}>
            <Box display={"flex"} justifyContent={"space-between"}>
                <Typography className={`${classes.date}`}>{date}</Typography>
                <FlagIcon className={`${classes.flagicon}`} />
                <Typography className={`${classes.OverDue}`}>Overdue</Typography>
                <StarIcon className={`${classes.StarIcon}`} />
                <MoreVertIcon className={`${classes.MoreVertIcon}`} />

            </Box>
            <Box>
                <Typography className={`${classes.description}`}>
                    {description}
                </Typography>
            </Box>
            <Box>
                <div className={`${classes.cardmenu}`}>
                    <div className={`${classes.cardoptions}`}>
                        <Typography className={`${classes.cardoptionName}`}>feature</Typography>
                    </div>
                    <div className={`${classes.cardoptions}`}>
                        <Typography className={`${classes.cardoptionName}`}>goal</Typography>
                    </div>
                    <div className={`${classes.cardoptions}`}>
                        <Typography className={`${classes.cardoptionName}`}>Open</Typography>
                    </div>
                </div>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"} marginTop={"18px"}>
                <Box display={"flex"}>
                    <TrackChangesIcon sx={{ color: "gray", marginLeft: "5px" }} />
                    <ArticleIcon sx={{ color: "gray", marginLeft: "5px" }} />
                    <div className={`${classes.circularProgress}`}>
                        <CircularProgressbar
                            value={percentage}
                            className={`${classes.circularProgress}`}
                            strokeWidth={15}
                            styles={buildStyles({
                                pathColor: "#40e045",
                            })}
                        />
                    </div>
                    <Typography className={`${classes.percentage}`}>{percentage} %</Typography>
                </Box>
                <Box display={"flex"} className={`${classes.Pendingbtn}`}>
                    <Typography sx={{ fontSize: "12px" }}>Pending</Typography>
                    <KeyboardArrowDownIcon sx={{ fontSize: "20px" }} />
                </Box>
            </Box>
        </Box>
    )
}