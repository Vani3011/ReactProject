import React from "react"
import {useStyles} from "./styles"
export const Footer = () =>{
    const classes=useStyles()
    return(
        <div className={`${classes.footer}`}>
            copyrights©2022  All rights reserved.
        </div>
    )
}
