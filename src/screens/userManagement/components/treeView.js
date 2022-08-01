import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SettingsIcon from '@mui/icons-material/Settings';
import TreeItem, { treeItemClasses } from "@mui/lab/TreeItem";
import TreeView from '@mui/lab/TreeView';
import { Box, Checkbox, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import { JSONS } from "./sampleData";
import { userStyles } from "./styles";
export const TreeViewComponent = () => {
    const [treeData, setTreeData] = useState(JSONS)
    const StyledTreeItem = styled((props) => <TreeItem {...props} />)(
        ({ theme }) => ({
            [`& .${treeItemClasses.iconContainer}`]: {
                "& .close": {
                    opacity: 0.3,
                },
            },
            [`& .${treeItemClasses.group}`]: {
                marginLeft: 15,
                paddingLeft: 18,
                borderLeft: `1px solid #E0E0E0`,
            },
        })
    );
    const getData = (list) => {
        const data = list?.map((x) => {
            if (x?.children) {
                if (x?.children.some((item) => item?.active_status)) {
                    x.active_status = true;
                } else {
                    x.active_status = false;
                }
            }
            return x;
        });
        return data;
    };

    const SelectAll = (event, currentItem, originalData, check) => {
        const data = originalData.map((item) => {
            if (item.id === currentItem.id) {
                item.active_status = event;
                item.permission.create = event;
                item.permission.read = event;
                item.permission.update = event;
                item.permission.delete = event
                if (item?.children) {
                    SelectAll(event, currentItem, item?.children)
                }
            }
            if (item.parent_id === currentItem.id) {
                item.active_status = event;
                item.permission.create = event;
                item.permission.read = event;
                item.permission.update = event;
                item.permission.delete = event
                if (item?.children) {
                    SelectAll(event, item, item?.children)
                }
            }
            if (item?.children) {
                SelectAll(event, currentItem, item?.children);
            }
            // isAnyChildChecked(currentItem, originalData)
            return item
        })
        return data
    }
    //MainCheckbox handle function
    const handleCheck = (event, currentItem, originalData, check) => {
        const final = SelectAll(event, currentItem, originalData, check)
        setTreeData(getData(final))
    }
    //handleMethods(create,read,update,delete)
    const handleMethods = (actionName, event, currentItem, originalData) => {
        let id = currentItem.id
        const Data = originalData?.map((item) => {

            if (item?.id === id) {
                item.permission[actionName] = event;
                if (
                    item?.permission?.create === true ||
                    item?.permission?.update === true ||
                    item?.permission?.read === true ||
                    item?.permission?.delete === true
                ) {
                    item.active_status = true;
                } else {
                    item.active_status = false;
                }
            }
            if (item?.children) {
                handleMethods(actionName, event, currentItem, item?.children)
            }
            return item;
        });

        return Data
    }
    //recursive fn
    const loopfunction = (actionName, event, currentItem, originalData) => {
        const final = handleMethods(actionName, event, currentItem, originalData)
        setTreeData(getData(final))
    }



    const LabelValue = (props) => {
        // styles
        const classes = userStyles();
        return (
            <div className={classes.searchBox}>
                <Box className={classes.displayFlex}>

                    <Box>
                        <Checkbox
                            inputProps={{ "aria-label": "controlled" }}
                            checked={props?.currentItem?.active_status}
                            onClick={(e) => e.stopPropagation()}
                            onChange={(event) =>
                                props?.handleCheck(
                                    event.target.checked,
                                    props?.currentItem,
                                    props?.originalData,
                                    props?.isCheckbox,
                                )
                            }
                        />
                    </Box>


                    <Box>
                        <SettingsIcon />
                    </Box>
                    <Box className={classes.marginLeft}>
                        <Typography className={classes.treeTitle}>
                            {props?.currentItem?.name}
                        </Typography>
                    </Box>
                </Box>

                <Box className={classes.displayFlex}>
                    {["create", "read", "update", "delete"]?.map((x) => {
                        return (
                            <div key={x} className={classes.checkBoxDesign}>
                                <Checkbox
                                    checked={props?.currentItem?.permission[x]}
                                    onClick={(e) => e.stopPropagation()}
                                    onChange={(event) =>
                                        props?.loopfunction(
                                            x,
                                            event.target.checked,
                                            props?.currentItem,
                                            props?.originalData,
                                            props?.isCheckbox,

                                        )
                                    }
                                />
                            </div>
                        );
                    })}
                </Box>

            </div>
        );
    };
    const renderTree = (TreeJson) => {
        let listData =
            Array?.isArray(TreeJson) &&
            TreeJson?.map((currentItem) => {
                return (
                    <StyledTreeItem
                        nodeId={currentItem?.id}
                        key={currentItem?.id}
                        label={
                            // content of body
                            <LabelValue
                                currentItem={currentItem}
                                handleCheck={handleCheck}
                                originalData={treeData}
                                loopfunction={loopfunction}
                            />
                        }
                    >
                        {Array.isArray(currentItem?.children)
                            ? renderTree(currentItem?.children)
                            : null}
                    </StyledTreeItem>
                );
            });
        return listData;
    };
    const classes = userStyles()
    return (
        <Box>
            <TreeView
                className={classes.tree}
                defaultExpanded={["1"]}
                defaultCollapseIcon={<ArrowDropDownIcon className={classes.Icons} />}
                defaultExpandIcon={
                    <div className={classes.iconrelative}>
                        <ArrowRightIcon className={classes.Icons} />
                        <Box className={classes.iconabsolute} />
                    </div>
                }
                defaultEndIcon={
                    <div className={classes.iconrelative}>
                        <InfoOutlinedIcon className={classes.rightIcons} />
                        <Box className={classes.iconabsolute} />
                    </div>
                }
            >
                {renderTree(treeData)}
            </TreeView>
        </Box>
    )
}