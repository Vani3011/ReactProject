import { Box } from "@mui/material"
import React from "react"
import { Announcement } from "./announcement"
import CreateImageProvider from "./context"
const AnnouncementParent = () => {
    return (

        <CreateImageProvider>
            <Announcement/>
        </CreateImageProvider>


    )
}
export default AnnouncementParent