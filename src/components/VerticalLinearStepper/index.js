import { Card } from '@mui/material';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import * as React from 'react';
import { useStyles } from './styles';



export const VerticalLinearStepper = ({ steps = [] }) => {

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
  const classes = useStyles()
  const [activeStep] = React.useState(0);


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
          </Step>
        ))}
      </Stepper>

    </Box>
  );
}
