// import React, { useState } from "react"
// import TreeView from '@mui/lab/TreeView';
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import ArrowRightIcon from "@mui/icons-material/ArrowRight";
// import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
// import TreeItem, { treeItemClasses } from "@mui/lab/TreeItem";
// import { Box, Typography, Checkbox } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import SettingsIcon from '@mui/icons-material/Settings';
// import { userStyles } from "./styles"
// import { JSONS } from "./sampleData"
// export const TreeViewComponent = () => {
//     const [treeData, setTreeData] = useState(JSONS)
//     const [selectedData, setSelectedData] = useState("")
//     const StyledTreeItem = styled((props) => <TreeItem {...props} />)(
//         ({ theme }) => ({
//             [`& .${treeItemClasses.iconContainer}`]: {
//                 "& .close": {
//                     opacity: 0.3,
//                 },
//             },
//             [`& .${treeItemClasses.group}`]: {
//                 marginLeft: 15,
//                 paddingLeft: 18,
//                 borderLeft: `1px solid #E0E0E0`,
//             },
//         })
//     );
//     //MainCheckbox handle function
//     const handleCheck = (event, currentItem, originalData, check) => {
//         const { id } = currentItem
//         console.log(currentItem)
//         if (selectedData === "") {
//             const data = JSONS?.map((item) => {
//                 console.log(item, "")
//                 let permission = {
//                     "create": event,
//                     "read": event,
//                     "update": event,
//                     "delete": event
//                 }
//                 if (id == item.id) {
//                     if (item.children) {
//                         item.children.map((data) => {

//                             data.active_status = event
//                             data.permission["create"] = event
//                             data.permission["read"] = event
//                             data.permission["update"] = event
//                             data.permission["delete"] = event


//                         })
//                     }
//                     return { ...item, active_status: event, permission };
//                 }
//                 else if (item.children) {
//                     item.children.map((data) => {
//                         if (data.id == id) {
//                             data.active_status = event
//                             data.permission["create"] = event
//                             data.permission["read"] = event
//                             data.permission["update"] = event
//                             data.permission["delete"] = event
//                         }
//                         return { ...item };
//                     })
//                 }
//                 return item
//             })
//             setSelectedData(data)
//             setTreeData(data)
//             console.log(data, "data", "headcheck")
//         }
//         else {
//             const data = selectedData?.map((item) => {
//                 console.log(item, "")
//                 let permission = {
//                     "create": event,
//                     "read": event,
//                     "update": event,
//                     "delete": event
//                 }
//                 if (id == item.id) {
//                     if (item.children) {
//                         item.children.map((data) => {

//                             data.active_status = event
//                             data.permission["create"] = event
//                             data.permission["read"] = event
//                             data.permission["update"] = event
//                             data.permission["delete"] = event


//                         })
//                     }
//                     return { ...item, active_status: event, permission };
//                 }
//                 else if (item.children) {
//                     item.children.map((data) => {
//                         if (data.id == id) {
//                             data.active_status = event
//                             data.permission["create"] = event
//                             data.permission["read"] = event
//                             data.permission["update"] = event
//                             data.permission["delete"] = event
//                         }
//                         return { ...item };
//                     })
//                 }
//                 return item
//             })
//             setSelectedData(data)
//             setTreeData(data)
//             console.log(data, "data", "headcheck")
//         }

//     }
 

//     // methods checkbox handle function
//     const handleMethods = (action_Name, event, currentItem, originalData, check) => {
//         if (selectedData != "") {

//             const data = selectedData.map((item) => {

//                 console.log(item.id, currentItem.id)
//                 if (item.id == currentItem.id) {
//                     console.log(item)
//                     item.permission[action_Name] = event
//                     if (
//                         item?.permission?.create === true ||
//                         item?.permission?.update === true ||
//                         item?.permission?.read === true ||
//                         item?.permission?.delete === true
//                     ) {
//                         item.active_status = true;
//                     } else if (item.children) {
//                         item.active_status = true
//                     } else {
//                         item.active_status = false;
//                     }

//                     return { ...item }
//                 }

//                 else if (item.children) {
//                     item.children?.map((y) => {
//                         if (y.id == currentItem.id) {
//                             console.log(item.id, y.parent_id)
//                             if (item.id == y.parent_id) {
//                                 y.permission[action_Name] = event
//                             }
//                             if (
//                                 y?.permission?.create === true ||
//                                 y?.permission?.update === true ||
//                                 y?.permission?.read === true ||
//                                 y?.permission?.delete === true
//                             ) {
//                                 y.active_status = true;
//                             } else {
//                                 y.active_status = false;
//                             }
//                             return { ...item }
//                         }

//                     })
//                 }
//                 return { ...item }


//             })
//             console.log(data)
//             setTreeData(data)

//         }
//         else {
//             const data = JSONS.map((item) => {

//                 console.log(item.id, currentItem.id)
//                 if (item.id == currentItem.id) {
//                     console.log(item)
//                     item.permission[action_Name] = event
//                     if (
//                         item?.permission?.create === true ||
//                         item?.permission?.update === true ||
//                         item?.permission?.read === true ||
//                         item?.permission?.delete === true
//                     ) {
//                         item.active_status = true;
//                     } else if (item.children) {
//                         item.active_status = true
//                     } else {
//                         item.active_status = false;
//                     }

//                     return { ...item }
//                 }

//                 else if (item.children) {
//                     item.children?.map((y) => {
//                         if (y.id == currentItem.id) {
//                             console.log(item.id, y.parent_id)
//                             if (item.id == y.parent_id) {
//                                 y.permission[action_Name] = event
//                             }
//                             if (
//                                 y?.permission?.create === true ||
//                                 y?.permission?.update === true ||
//                                 y?.permission?.read === true ||
//                                 y?.permission?.delete === true
//                             ) {
//                                 y.active_status = true;
//                             } else {
//                                 y.active_status = false;
//                             }
//                             return { ...item }
//                         }

//                     })
//                 }
//                 return { ...item }


//             })
//             console.log(data)
//             setTreeData(data)
//         }

//     }
//     const LabelValue = (props) => {
//         // styles
//         const classes = userStyles();
//         return (
//             <div className={classes.searchBox}>
//                 <Box className={classes.displayFlex}>

//                     <Box>
//                         <Checkbox
//                             inputProps={{ "aria-label": "controlled" }}
//                             checked={props?.currentItem?.active_status}
//                             onClick={(e) => e.stopPropagation()}
//                             onChange={(event) =>
//                                 props?.handleCheck(
//                                     event.target.checked,
//                                     props?.currentItem,
//                                     props?.originalData,
//                                     props?.isCheckbox,

//                                 )
//                             }
//                         />
//                     </Box>


//                     <Box>
//                         <SettingsIcon />
//                     </Box>
//                     <Box className={classes.marginLeft}>
//                         <Typography className={classes.treeTitle}>
//                             {props?.currentItem?.name}
//                         </Typography>
//                     </Box>
//                 </Box>

//                 <Box className={classes.displayFlex}>
//                     {["create", "read", "update", "delete"]?.map((x) => {
//                         return (
//                             <div key={x} className={classes.checkBoxDesign}>
//                                 <Checkbox
//                                     checked={props?.currentItem?.permission[x]}
//                                     onClick={(e) => e.stopPropagation()}
//                                     onChange={(event) =>
//                                         props?.handleMethods(
//                                             x,
//                                             event.target.checked,
//                                             props?.currentItem,
//                                             props?.originalData,
//                                             props?.isCheckbox,

//                                         )
//                                     }
//                                 />
//                             </div>
//                         );
//                     })}
//                 </Box>

//             </div>
//         );
//     };
//     const renderTree = (TreeJson) => {
//         let listData =
//             Array?.isArray(TreeJson) &&
//             TreeJson?.map((currentItem) => {
//                 return (
//                     <StyledTreeItem
//                         nodeId={currentItem?.id}
//                         key={currentItem?.id}
//                         label={
//                             // content of body
//                             <LabelValue
//                                 currentItem={currentItem}
//                                 handleCheck={handleCheck}
//                                 originalData={TreeJson}
//                                 handleMethods={handleMethods}

//                             />
//                         }
//                     >
//                         {Array.isArray(currentItem?.children)
//                             ? renderTree(currentItem?.children)
//                             : null}
//                     </StyledTreeItem>
//                 );
//             });
//         return listData;
//     };
//     const classes = userStyles()
//     return (
//         <Box>
//             <TreeView
//                 className={classes.tree}
//                 defaultExpanded={["1"]}
//                 defaultCollapseIcon={<ArrowDropDownIcon className={classes.Icons} />}
//                 defaultExpandIcon={
//                     <div className={classes.iconrelative}>
//                         <ArrowRightIcon className={classes.Icons} />
//                         <Box className={classes.iconabsolute} />
//                     </div>
//                 }
//                 defaultEndIcon={
//                     <div className={classes.iconrelative}>
//                         <InfoOutlinedIcon className={classes.rightIcons} />
//                         <Box className={classes.iconabsolute} />
//                     </div>
//                 }
//             >
//                 {renderTree(treeData)}
//             </TreeView>
//         </Box>
//     )
// }