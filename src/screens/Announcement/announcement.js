import { Box, Button, Menu, MenuItem } from "@mui/material"
import React from "react"
import { ImageUpload } from "./components"
import RichTextEditor from "./components/quill"
import { useStyles } from "./styles"
export const Announcement = () => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    //initialstate

    const initial1 = {
        title: "",
        Description: "",
        images: "",
    };
    const [data1, setData1] = React.useState([{ ...initial1 }])

    //open menu
    const AddMultipleImages = (event) => {
        setAnchorEl(event.currentTarget);
    }
    //close menu
    const handleClose = (value) => {
        if (value === "image") {
            handleContent("image")
            setAnchorEl(null);
        }
        else if (value === "title") {
            handleContent("title")
            setAnchorEl(null);
        }
        else {
            setAnchorEl(null);
        }

    };
    //onselecting options
    const handleContent = (key) => {
        const addData = {
            title: "",
            Description: "",
        };
        const addData1 = {
            images: "",
        };
        if (key === "image") {
            setData1([...data1, addData1]);
        }
        if (key === "title") {
            setData1([...data1, addData]);
        }
    }

    //to edit image
    const handleEditText = (key, value, index) => {
        let allProperty = [...data1];
        allProperty[index] = {
            ...allProperty[index],
            [key]: value,
        };
        setData1([...allProperty]);
    }
    return (
        <Box>

            <Box className={`${classes.addbtn}`}>
                <Button variant="contained" onClick={(e) => AddMultipleImages(e)}>Add</Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => handleClose("value")}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={() => handleClose("image")}>Image</MenuItem>
                    <MenuItem onClick={() => handleClose("title")}>Title</MenuItem>
                </Menu>
            </Box>
            {data1?.map((value, index) => (
                <>
                    {value?.hasOwnProperty('images') && (
                        <Box>
                            <ImageUpload
                                index={index}
                                selectedImage={value}
                                data1={data1}
                                updateImageURL={setData1}
                            />
                        </Box>
                    )}
                    {value?.hasOwnProperty('title') && (
                        <Box margin={"30px"}>
                            <RichTextEditor
                                placeholder="some fun text"
                                onChange={(e, editor) => { handleEditText("title", e, index, editor) }}
                                value={value.title}
                            />
                        </Box>
                    )}
                </>
            ))}
        </Box>
    )

}