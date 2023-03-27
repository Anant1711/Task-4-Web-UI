import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddDetail_DB from './pages/AddDetail_DB';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import { Getbyid } from './pages/Getbyid';
import { Getbyname } from './pages/Getbyname';
import { Deletebyid } from './pages/Deletebyid';
import Alldetails from './pages/Alldetails';
import Box from '@mui/material/Box';

function App() {


  return (

    <BrowserRouter>
      <div className="App">
        <Box sx={{
          width: '100%',
          height: 55  ,
          backgroundColor: 'white',
          m:3
        }}>
          <Stack spacing={2} direction="row" justifyContent="center"
            alignItems="center">
            
            {/* Buttons from Material UI for All items/Add items/Get by ID/Get by Name/Delete */}
            
            <Button variant="contained" LinkComponent={Link} to="/">All items </Button>
            <Button variant="contained" LinkComponent={Link} to="/add">Add </Button>
            <Button variant="contained" LinkComponent={Link} to="/getbyid">Get By ID</Button>
            <Button variant="contained" LinkComponent={Link} to="/getByName">Get By Name</Button>
            <Button variant="contained" LinkComponent={Link} to="/delete">Delete By ID</Button>
          </Stack>

        </Box>
        
        {/* All routes defined here */}
        <Routes>
          <Route path="/" element={<Alldetails/>}/>
          <Route path="/add" element={<AddDetail_DB />} />
          <Route path="/getByID" element={<Getbyid />} />
          <Route path="/delete" element={<Deletebyid />} />
          <Route path="/getByName" element={<Getbyname />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
