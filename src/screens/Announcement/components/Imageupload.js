import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";
import React from 'react';

const Input = styled('input')({
    display: 'none',
});
const useStyles = makeStyles((theme) => ({
    imgbody: {
        border: "2px solid #C1C5CB",
        padding: "50px",
        margin: "30px",
        borderRadius: "5px",
        borderStyle: "dashed",
        cursor: "pointer",
    },
    icon: {
        display: "flex",
        justifyContent: "center"
    },
    uploadedImg: {
        width: "100%",
        height: "250px",
        cursor: "pointer"
    },
    imgblock: {
        margin: "0px 30px",
        position: "relative"
    },
    editIcon: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        backgroundColor: theme.palette.primary.main,
        zIndex: 1,
        color: "#fff",
        padding: "10px",
        cursor: "pointer",
    },
    options: {
        position: "absolute",
        left: "50%",
        top: "50%"
    }


}))

export const ImageUpload = (props) => {

    const classes = useStyles()
    //onchange function for image
    const handleUpload = (key, e, index) => {
        let data1 = props.data1;
        const values = [...data1];
        values[index][key] = URL.createObjectURL(e.target.files[0]);
        props?.updateImageURL(values);
    }
    return (
        <>
            {props?.selectedImage?.images?.length > 0 ?
                <Box className={`${classes.imgblock}`}>
                    <div className={`${classes.image}`}>
                        <label htmlFor="icon-button-file">
                            <img src={props?.selectedImage.images} className={`${classes.uploadedImg}`} alt="Selected pic" />
                        </label>
                    </div>
                    <Stack className={`${classes.options}`}>
                        <Box className={`${classes.editIcon}`}>
                            <ModeEditOutlineOutlinedIcon />
                            <Input accept="image/*" id="icon-button-file" type="file" onChange={(e) => { handleUpload("images", e, props?.index) }} />
                        </Box>

                    </Stack>
                </Box>
                :
                <Box className={`${classes.imgbody}`}>
                    <div className={`${classes.image}`}>
                        <label htmlFor="icon-button-file">
                            <Input accept="image/*" id="icon-button-file" type="file" onChange={(e) => { handleUpload("images", e, props?.index) }} />
                            <div className={`${classes.icon}`}>
                                <AddPhotoAlternateIcon sx={{ fontSize: "80px", color: "#C1C5CB" }} />
                            </div>
                        </label>
                    </div>
                </Box>
            }

        </>
    );
}


