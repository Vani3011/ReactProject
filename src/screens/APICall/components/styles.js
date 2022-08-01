import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({

    submitbtn: {
        cursor: "pointer",
        width: "312px",
        marginTop:"25px"
    },
    BoxStyle: {
        backgroundColor: "white",
        padding: "20px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    },
    iconStyle: {
        cursor: "pointer"
    },
    gridStyle:{
        display:"flex",
        justifyContent:"center"
    },
    tableheader:{
        backgroundColor:"black"
    },
    tabledata:{
        color:"white",
    }

}))