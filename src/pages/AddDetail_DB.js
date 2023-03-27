import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export default function AddDetail_DB() {

  {/*Variables for setting-up values */}
  const [id, setID] = useState('')
  const [name, setname] = useState('')
  const [language, setlang] = useState('')
  const [framework, setframe] = useState('')
  const [errors, setErrors] = useState({})

  //Handler for sending button
  const handled = (e) => {
    e.preventDefault()

    const errors = {}
    let hasError = false

    //Functions for make fields required
    if (name.trim() === '') {
      errors.name = 'Name is required'
      hasError = true
    }
    if (id.trim() === '') {
      errors.id = 'Id is required'
      hasError = true
    }

    if (language.trim() === '') {
      errors.language = 'Language is required'
      hasError = true
    }

    if (framework.trim() === '') {
      errors.framework = 'Framework is required'
      hasError = true
    }
    

    if (hasError) {
      setErrors(errors)
      return
    }

    const server = { name, id, language, framework }

    console.log(server)

    //For POST request, for sending data to Mongodb Database
    fetch("http://localhost:8080", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(server)
    }).then(() => {
      console.log("New Student added")
    })
    window.location.reload(false);
  }


  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { ml: 9, mt: 15, width: '90%', },
      }}
      noValidate
      autoComplete="off"
    >
      //TextField for entering values
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <TextField
          required
          id="standard-basic"
          label="Name"
          variant="standard"
          value={name}
          onChange={(e) => setname(e.target.value)}
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          required
          id="standard-basic"
          label="Id"
          variant="standard"
          value={id}
          onChange={(e) => setID(e.target.value)}
          error={!!errors.id}
          helperText={errors.id}
        />
        <TextField
          required
          id="standard-basic"
          label="Language"
          variant="standard"
          value={language}
          onChange={(e) => setlang(e.target.value)}
          error={!!errors.language}
          helperText={errors.language}
        />
        <TextField
          required
          id="standard-basic"
          label="Framework"
          variant="standard"
          value={framework}
          onChange={(e) => setframe(e.target.value)}
          error={!!errors.framework}
          helperText={errors.framework}
        />
      </Stack>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        //Button for send to DB
        <Button variant="contained" color="success" onClick={handled} >Send</Button>
      </Stack>
    </Box>
  );
}
