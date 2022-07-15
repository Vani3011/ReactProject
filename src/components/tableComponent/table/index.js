import React, { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { ModalBox } from "../../Modal";
import { useStyles } from "./styles";
export const TableList = ({ data = [], checked = false, icons = false, Activity_icons = [] }) => {
    const [open, setOpen] = useState(false)
    console.log(data)
    const headers = Object.keys(data[0]);
    const classes = useStyles()
    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow className={`${classes.tableHeader}`}>
                        {(checked === true || icons === true) && <TableCell></TableCell>}
                        {headers.map(header => (
                            <TableCell align="center" >{header}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((emp, index) => (
                        <TableRow key={index}>
                            {checked === true && <TableCell style={{ width: 50 }}><RadioButtonUncheckedIcon sx={{ color: "gray" }} onClick={() => setOpen(true)} /></TableCell>}
                            {icons === true && <TableCell style={{ width: 50 }}>{Activity_icons?.map((icon) => <div className={`${classes.icons}`}>{icon.PhoneCall}</div>)}</TableCell>}

                            {headers.map(header => (
                                <TableCell align="center">{emp[header]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <ModalBox open={open} handleClose={() => setOpen(false)} title="View To Do" buttonName="Mark as Complete" />

        </div>
    )
}