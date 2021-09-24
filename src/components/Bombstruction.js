import * as React from 'react';
import './Bombstruction.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Logo from './img/Logo.png';
import { IconButton } from '@mui/material';
import Cuerpo from './Cuerpo/Cuerpo';
import Sinopsis from './Cuerpo/Sinopsis';
import Documento from './Cuerpo/Documento';
import Uno from './Cuerpo/Avances/Uno';
import Integrantes from './Cuerpo/Integrantes';

export default function Bombstruction() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color="inherit">
        <Toolbar variant="dense">
        <IconButton > 
        <img src={Logo} alt="Logo" className="Logo"/>
        </IconButton>
        </Toolbar>
      </AppBar>

      <div>
        <Cuerpo></Cuerpo>
      </div>
      <div>
        <Sinopsis></Sinopsis>
      </div>
      <div>
        <Documento></Documento>
      </div>
      <div>
        <Uno></Uno>
      </div>

      
    </Box>
  );
}
