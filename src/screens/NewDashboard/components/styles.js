import { ImportantDevices } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

export const DashboardStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#11174C",
        padding: "20px",
        // position:"sticky"
        height: "100vh"


    },
    infiniteicon: {
        color: "#B44975",
        display: "flex",
        justifyContent: "center",
        fontSize: "30px",
        marginBottom: "30px"

    },
    icon: {
        backgroundColor: "#333069",
        borderRadius: "6px",
        padding: "8px",
        fontSize: "40px",
        display: "flex",
        justifyContent: "center"
    },
    label: {
        fontSize: "12px",
        marginTop: "8px"
    },
    //topNav
    TopNavroot: {
        backgroundColor: "white",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        padding: "20px",

    },

    title: {
        color: "black",
        fontSize: "16px",
        fontWeight: 600,
        letterSpacing: "0.5px"
    },
    searchBox: {
        marginLeft: "30px",
        marginTop: "-5px",
    },
    NotificationsIcon: {
        color: "black",
        marginRight: "20px",
        fontSize: "30px",
        cursor: "pointer",
    },
    avatar: {
        marginTop: "-5px"
    },

    //list
    MyList: {
        display: "flex",
        marginTop: "20px"

    },
    MyListTitle: {
        fontSize: "16px",
        color: "black",
        fontWeight: "600"
    },
    count: {
        marginLeft: "10px",
        backgroundColor: "black",
        color: "white",
        borderRadius: "50%",
        height: "27px",
        width: "27px",
        textAlign: "center",

    },
    counttext: {
        fontSize: "13px",
        marginTop: "4px"
    },
    listSearch: {
        marginLeft: "-10px"
    },
    MyListRoot: {
        backgroundColor: "white",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        marginLeft: "0px",
        padding: "15px",
        marginTop: "80px"
        // position:"relative",

    },
    menu: {
        display: "flex",
        marginTop: "20px"
    },
    options: {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "white",
        border: "1px solid #E4E8EE",
        padding: "5px",
        borderRadius: "6px",
        marginRight: "12px"

    },
    optionName: {
        fontSize: "14px"
    },
    //card
    cardBody: {
        backgroundColor: "white",
        border: "1px solid #E4E8EE",
        marginTop: "20px",
        borderRadius: "12px",
        padding: "15px",
        marginBottom: "15px"
    },
    date: {
        fontSize: "11px",
        letterSpacing: "0.2px"
    },
    flagicon: {
        fontSize: "25px",
        color: "#E5513C",
        backgroundColor: "#FCF1F0",
        padding: "5px",
        borderRadius: "50%",
        marginTop: "-4px"

    },
    OverDue: {
        backgroundColor: "#FCF1F0",
        color: "red",
        fontSize: "10px",
        padding: "5px",
        borderRadius: "4px",
        marginTop: "-4px"
    },
    StarIcon: {
        color: "#EF9C14",
        // marginLeft:"2px",
        marginTop: "-4px"
    },
    MoreVertIcon: {
        color: "gray",
        // marginLeft:"2px",
        marginTop: "-4px"
    },
    description: {
        margin: "18px 0px",
        fontSize: "14px",
        letterSpacing: "0.1px"
    },
    cardmenu: {
        display: "flex",
        marginLeft:"-5px"

    },
    cardoptions: {
        display: "flex",
        backgroundColor: "#F1F1F1",
        border: "1px solid #E4E8EE",
        padding: "5px 15px",
        borderRadius: "6px",
        marginLeft: "8px"
    },
    cardoptionName: {
        fontSize: "14px",
        color: "#877090"

    },


    //morelist
    moreList: {
        backgroundColor: "white",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        padding: "15px",
        borderRadius: "8px",
        marginRight: "10px",
        marginTop: "100px",
        marginBottom: "20px",
        maxHeight:"600px",
        overflowY:"scroll"
    },
    moreListContent: {
        padding: "15px",
        borderRadius: "8px",
        margin: "15px", height: "auto"
    },
    extraList: {
        display: "flex",
        marginTop: "15px"

    },
    extralistTitle: {
        fontSize: "16px",
        color: "black",
        marginTop:"2px",
        marginLeft:"10px"

    },
    morecount: {
        marginLeft: "10px",
        backgroundColor: "black",
        color: "white",
        borderRadius: "50%",
        height: "27px",
        width: "27px",
        textAlign: "center",

    },
    cardScroll: {
        maxHeight: "400px",
        overflowY: "scroll",
    },
    listScroll: {
        maxHeight: "600px",
        overflowY: "scroll"
    },
    circularProgress: {
        width: "24px",
        height: "24px",
        marginLeft: "5px"
    },
    Pendingbtn: {
        backgroundColor: "white",
        border: "1px solid #E4EAEE",
        padding: "4px",
        borderRadius: "6px"
    },
    percentage: {
        fontSize: "12px",
        marginLeft: "15px",
        textAlign: "center",
        marginTop: "5px",
        fontWeight: "600"
    },
    filterIcon:{
        border: "1px solid #E4EAEE",
        padding:"8px",
        borderRadius:"6px",
        display:"flex",
        justifyContent:"center",
        '&:hover':{
            backgroundColor:"#F2F4F6"
        }
    },
}))