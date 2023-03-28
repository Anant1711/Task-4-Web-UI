import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const Alldetails = () => {
    const [server, setServer] = useState([])

    //Function for getting all queries from DB
    useEffect(() => {
        fetch("http://localhost:8080/")
            .then(res => res.json())
            .then((result) => {
                setServer(result);
            }
            )
    }, [])
    return (
        <div>
            <h1>Server Details</h1>

            <Paper elevation={3}>

                {/* Map all items from DB and print in a table form */}
                {server.length > 0 && (
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center"><b>ID</b></TableCell>
                                <TableCell align="center"><b>Name</b></TableCell>
                                <TableCell align="center"><b>Language</b></TableCell>
                                <TableCell align="center"><b>Framework</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {server.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell align="center">{item.id}</TableCell>
                                    <TableCell align="center">{item.name}</TableCell>
                                    <TableCell align="center">{item.language}</TableCell>
                                    <TableCell align="center">{item.framework}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}
            </Paper>
        </div>
    )
}

export default Alldetails