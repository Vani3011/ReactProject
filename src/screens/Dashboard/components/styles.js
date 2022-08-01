import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    cardbody: {
        backgroundColor: "white",
        padding: "15px",
        boxShadow: "0px 3px 30px #5C86CB2E",
        borderRadius: "4px"
    },
    totalcount:{
        fontSize:"24px",
        color:"#091B29"
    },
    cardTitle:{
        color:"#091B29",
        fontSize:"14px",
        textTransform:"captialize"
    },
    graphBody:{
        backgroundColor: "white",
        padding: "15px",
        boxShadow: "0px 3px 30px #5C86CB2E",
        borderRadius: "4px" ,
        height:"400px"
    },
    chart:{
        display:"flex",
        justifyContent:"center",
        marginTop:"10px",
        marginBottom:"10px"
    },
    chartTitle:{
        fontSize:"16px",
        fontWeight:"bold",
        color:"#091B29"
    },
    tooltip: {
        backgroundColor: "#F2F4F7",
        border: "1px solid #E4E8EE",
        display: "flex",
        alignItems: "center",
        padding: "4px 7px",
        zIndex: 999,
        borderRadius: "4px",
        position: "relative",
      },
      name: {
        color: "#7C8594",
        fontSize: "12px",
        
      },
      value: {
        color: "#4E5A6B",
        fontSize: "16px",
        marginRight: "8px",
      },
      dot: {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        marginRight: "8px",
      },
      center: {
        textAlign: "center",
        marginTop:"-142px",
        padding: "12px",
   
      },
      title: {
        fontSize: "12px",
        color: "#4E5A6B",
 
      },
      count: {
        fontSize: "18px",
        color: "black",
      
      },
      tableComponent:{
        marginTop:"30px"
      },
      arrowIcon:{
        textAlign:"right"
      }

}))