import React from 'react'
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export const Getbyname = () => {
  const [name, setName] = useState('');
  const [data, setData] = useState([]);


  async function handleGetByName() {
    const response = await fetch(`http://localhost:8080/name/${name}`);

    if (!response.ok) {
      if (response.status === 404) {
        alert("404 NOT FOUND");
        window.location.reload(false);
      } else {
        alert('An error occurred');
      }
      return;
    }

    const data = await response.json();
    setData(data);
  }

  return (
    <>
      <h1>Get by Name</h1>
      <div>
        <Box sx={{ m: 5, justifyContent: "center" }}>
          <TextField size="big" id="standard-basic" label="Enter Name" variant="standard" value={name} onChange={(e) => setName(e.target.value)} />
          <br /><br />
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <Button variant="contained" color="success" onClick={handleGetByName} >Get</Button>
            <br /><br />
          </Stack>

          {data.length > 0 && (
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
                {data.map((item, index) => (
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

        </Box>
      </div>
    </>
  );
}
