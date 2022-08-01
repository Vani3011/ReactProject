import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles((theme) => ({
    optionBox: {
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        padding: "20px",
        marginTop: "5px",
        marginLeft: "10px"
    },
    options: {
        padding: "10px",
        marginBottom: "5px",
        borderRadius: "6px",
        "&:hover":{
            backgroundColor:"#F2F4F6"
        }
    }
}))