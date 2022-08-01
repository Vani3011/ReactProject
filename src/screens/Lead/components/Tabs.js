import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { TableList, VerticalLinearStepper, ModalBox } from '../../../components';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import { useStyles } from './styles';
export const Tabs = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState('2');
  const [open, setOpen] = React.useState(false);
  const [createActivity, setCreateActivity] = React.useState(false);

  const steps = [
    {
      label: 'Select campaign settings',
      description: `For each ad campaign that you create, you can control how much
                    you're willing to spend on clicks and conversions, which networks
                    and geographical locations you want your ads to show on, and more.`,
    },
    {
      label: 'Create an ad group',
      description:
        'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
      label: 'Create an ad',
      description: `Try out different ad text to see what brings in the most customers,
                    and learn how to enhance your ads using features like ad extensions.
                    If you run into any problems with your ads, find out how to tell if
                    they're running and how to resolve approval issues.`,
    },
  ];
  const data = [
    {
      id: "E101",
      Name: "Ajay",
      price: 500000,
      Property_Name: 9815215233
    },
    {
      id: "E101",
      Name: "Arjun",
      price: 500000,
      Property_Name: 9815215233
    }

  ];
  const ToDo_List = [{
    Name: "Ram",
    description: "To-Do data",
    Edit: <EditIcon/>
  }]
  const Activity_info =[{
    Activity_Name:"Phone Call",
    Action_info:"2221321",
    Date:"14/07/2022",
    CreatedBy:"Ram",
    Priority:"Medium",
    Status:<div className={`${classes.statusbutton}`} onClick={() => openActivityModal("status")}>Open</div>,
    Edit:<EditIcon style={{color:"gray"}}/>

  }]
  const Activity_icons=[{
    PhoneCall:<PhoneIcon/>
  }]
 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
const openActivityModal = (type) =>{
 setOpen(true)
 type==="add"?setCreateActivity(true):setCreateActivity(false)
}
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={handleChange} >
            <Tab sx={{ textTransform: "capitalize" }} label="Activity Comments" value="1" />
            <Tab sx={{ textTransform: "capitalize" }} label="Number of Units" value="2" />
            <Tab sx={{ textTransform: "capitalize" }} label="To-Do List" value="3" />
            <Tab sx={{ textTransform: "capitalize" }} label="Activity" value="4" />

          </TabList>
        </Box>
        <TabPanel value="1"><VerticalLinearStepper steps={steps} /></TabPanel>
        <TabPanel value="2"><TableList data={data} /></TabPanel>
        <TabPanel value="3">
          <TableList data={ToDo_List} checked={true} />
          <AddCircleIcon className={`${classes.AddCircleIcon}`} onClick={() => setOpen(true)} />
          <ModalBox maxWidth="320px" open={open} handleClose={() => setOpen(false)} title="Create To Do" buttonName="Create" ToDoList={true} />
        </TabPanel>
        <TabPanel value="4">
          <TableList data={Activity_info} icons={true}  Activity_icons={Activity_icons}/>
          <AddCircleIcon className={`${classes.AddCircleIcon}`} onClick={()=>openActivityModal("add")}/>
          {createActivity === true ?
          <ModalBox maxWidth="600px" open={open} handleClose={() => setOpen(false)} title="Create Activity" buttonName="Create"  createActivity={true} />
          :
          <ModalBox maxWidth="500px" open={open} handleClose={() => setOpen(false)} title="Activity" buttonName="Create"  Activity={true} />

          }

        </TabPanel>
      </TabContext>
      
    </Box>
  );
}
