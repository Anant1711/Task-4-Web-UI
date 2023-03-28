import React from 'react'
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';


export const Deletebyid = () => {
  //Variable for getting id number
  const [id, setId] = useState('');

  //Delete method for delete item from ID
  async function handleDeleteById() {
    const response = await fetch(`http://localhost:8080/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      if (response.status === 404) {
        alert("404 NOT FOUND");
      } else {
        alert('An error occurred');
      }
      return;
    }

    alert('Item deleted successfully');
    // for reload screen
    window.location.reload(false);
  }

  return (
    <>
      <h1>Delete by ID</h1>
      <div>
        <Box sx={{m:5 ,justifyContent:"center"}}>
          <TextField size="big" id="standard-basic" label="Enter ID" variant="standard" value={id} onChange={(e) => setId(e.target.value)} />
          <br/><br/>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >

            {/* Button for send request */}
            <Button variant="contained" color="error" onClick={handleDeleteById} >Delete</Button>
          </Stack>
        </Box>
      </div>
    </>
  );
}
