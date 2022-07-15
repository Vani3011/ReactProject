import React from "react"
import Breadcrumbs from '@mui/material/Breadcrumbs';
const BreadCrumb = (breadcrumb,separator) =>{
return(
    <div>
          <Breadcrumbs separator={separator} aria-label="breadcrumb">
        {breadcrumb}
      </Breadcrumbs>
    </div>
)
}
export default BreadCrumb