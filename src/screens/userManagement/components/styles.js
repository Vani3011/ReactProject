import { makeStyles } from "@mui/styles";


export const userStyles = makeStyles((theme) => ({
    Icons: {
        fontSize: '20px !important',
        background: '#E4E8EE',
        borderRadius: '2px',
        fontWeight: 600,
        color: '#000'
  },
  rightIcons: {
        fontSize: '20px !important',
        borderRadius: '2px',
        fontWeight: 600,
        color: '#000'
  },
  displayFlex: {
        display: 'flex',
        alignItems: 'center'
  },
  marginLeft: {
        marginLeft: '15px'
  },
  treeTitle: {
        color: '#091B29',
        fontFamily: 'tenant_regular',
        fontSize: '14px',
        fontWeight: 600
  },
  searchTitle: {
        fontSize: '16px',
        fontFamily: 'tenant_semiBold',
        color: '#101010'
  },
  addBtn: {
        background: '#5078E1',
        color: '#fff',
        borderRadius: '4px',
        padding: '4px 10px',
        '&:hover': {
              background: '#5078E1',
              color: '#fff'
        }
  },
  searchBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
  },
  searchField: {
        marginTop: '16px',
        [`& fieldset`]: {
              border: '1px solid #1010100D',
              borderRadius: "4px",
              backgroundColor: '#00000008',
        },
        '& .MuiOutlinedInput-root': {
              '&:hover fieldset': {
                    border: '1px solid #5078E1',
              },

        },
  },
  permissionTitle: {
        color: '#101010',
        fontSize: '14px',
        fontFamily: 'tenant_semiBold',
  },
  permissionBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '1px solid #E0E0E0',
        borderRadius: '4px',
        padding: "10px 20px",
        margin: '10px 0px',
        cursor:'pointer'
  },
  selectedpermissionBox:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '1px solid #5078E1',
        borderRadius: '4px',
        padding: "10px 20px",
        margin: '10px 0px',
        cursor:'pointer'
  },
  badge: {
        backgroundColor: '#F2F4F7',
        borderRadius: '4px',
        padding: '5px 12px',
        color: '#4E5A6B',
        fontSize: '12px',
        fontFamily: 'tenant_regular',
        fontWeight: 600
  },
  Label: {
        color: '#98A0AC',
        fontFamily: "tenant_semibold",
        fontSize: "14px",
        marginBottom: "5px",
  },


  textbox: {
        backgroundColor: (props) => props?.color ?? "auto",
        borderRadius: "4px",
        border: "none",
        "&:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 1000px white inset",
              backgroundColor: '#fff'
        },
        [`& fieldset`]: {
              borderRadius: "4px",
              height: (props) => (props.multiline ? "unset" : props?.height ?? 50),
              border: (props) => props?.border ?? "1px solid #CED3DD",
              "&:hover": {
                    border: "1px solid red",
              },
        },
        "& .MuiOutlinedInput-input": {
              padding: (props) => props?.padding ?? "11px 14px",
        },
        '& .MuiOutlinedInput-root': {
              '&:hover fieldset': {
                    borderColor: '#5078E1',
              },

        },

  },
  checkBoxDesign:{
        minWidth: 60,
        maxWidth: 62,
        display: "flex",
        justifyContent: "center",
  },
  iconrelative:{
        position:'relative',
  },
  iconabsolute:{
        width:'18px',
        height:'0.5px',
        background:'#E0E0E0',
        position:'absolute',
        left:'-24px',
        top:'36%'
  },
  permissionEditSection:{
        display:'flex',
        alignItems:'center'
  },
  deleteIcon:{
        color:'red',
        fontSize:'24px'
  }
}))