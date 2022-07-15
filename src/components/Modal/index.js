import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import { TextArea } from '../textArea';
import { TextBox } from '../textbox';
import ActivityCard from '../../screens/Lead/components/activityStatusCard';
import CreateActivity from '../../screens/Lead/components/createActivityCard';
import { useStyles } from './styles';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export const ModalBox = ({maxWidth="",open=false,handleClose = () =>false,title="",data="",buttonName="",ToDoList=false,Activity=false,createActivity=false}) => {
const classes = useStyles()

 

  return (
    <div>
    
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{
            "& .MuiDialog-container": {
              "& .MuiPaper-root": {
                width: "100%",
                maxWidth: {maxWidth},  // Set your width here
              },
            },
          }}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        <Typography sx={{fontSize:"16px",fontWeight:"600"}}>{title}</Typography>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          {ToDoList===true&&
          <>
            <div>
        <Typography sx={{marginBottom:"10px",fontSize:"14px"}}>Name</Typography>
        <TextBox/>
        </div>
        <div>
        <Typography sx={{marginBottom:"10px",marginTop:"10px",fontSize:"14px"}}>Description</Typography>
        <TextArea/>
        </div>
        <div><Button variant="contained" className={`${classes.button}`}>{buttonName}</Button></div>
        </>
          }
          {Activity===true&&<ActivityCard/>}
          {createActivity===true&&<CreateActivity/>}
        </DialogContent>
     
      </BootstrapDialog>
    </div>
  );
}
