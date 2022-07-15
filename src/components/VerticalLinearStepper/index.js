import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
// import NoteAddIcon from '@material-ui/icons/NoteAdd';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
// import AddAlertIcon from '@material-ui/icons/AddAlert';
import { makeStyles } from '@mui/styles';
import { useStyles } from './styles';
import { Card } from '@mui/material';



export const VerticalLinearStepper = ({steps=[]}) => {

console.log(steps,"steps")
  const CustomStepIcon = (props) => {


    const stepIcons = {
      1: <div className={`${classes.dot}`}></div>,
      2: <div className={`${classes.dot}`}></div>,
      3: <div className={`${classes.dot}`}></div>,
    };

    return (
      <div
      className={`${classes.dotted_div}`}
    >
      {stepIcons[String(props.icon)]}
    </div>
    );
  };
  const classes=useStyles()
  const [activeStep, setActiveStep] = React.useState(0);


  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
             StepIconComponent={CustomStepIcon}
            >
              <Card className={`${classes.stepperCard}`}> {step.label}</Card>
             
            </StepLabel>
            {/* <StepContent>
              <Typography>{step.description}</Typography>
          
            </StepContent> */}
          </Step>
        ))}
      </Stepper>
     
    </Box>
  );
}
