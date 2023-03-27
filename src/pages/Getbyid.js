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

export const Getbyid = () => {
  //Variable for getting ID and data
  const [id, setId] = useState('');
  const [data, setData] = useState(null);
  
  
  async function handleGetById() {
    const response = await fetch(`http://localhost:8080/${id}`);

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
    <h1>Get by ID</h1>
    <div>
      <Box sx={{m:5 ,justifyContent:"center"}}>
      <TextField size="big" id="standard-basic" label="Enter Id Number" variant="standard" value={id} onChange={(e) => setId(e.target.value)} />
      <br/><br/>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Button variant="contained" color="success" onClick={handleGetById} >Get</Button>
        <br/>
      </Stack>
      {data && (
        <Table sx={{ minWidth: 650 }} size="big" aria-label="a dense table" >
          <TableHead>
            <TableRow >
              <TableCell align="center"><b>ID</b></TableCell>
              <TableCell align="center"><b>Name</b></TableCell>
              <TableCell align="center"><b>Language</b></TableCell>
              <TableCell align="center"><b>Framework</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">{data.id}</TableCell>
              <TableCell align="center">{data.name}</TableCell>
              <TableCell align="center">{data.language}</TableCell>
              <TableCell align="center">{data.framework}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )}
      </Box>
    </div>
    </>
  );
}
