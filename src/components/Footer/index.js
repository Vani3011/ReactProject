import React from "react"
import {useStyles} from "./styles"
export const Footer = () =>{
    const classes=useStyles()
    return(
        <div className={`${classes.footer}`}>
            copyrightsÂ©2022  All rights reserved.
        </div>
    )
}
