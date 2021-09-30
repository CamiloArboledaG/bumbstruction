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
import Trailer from './Cuerpo/Trailer';
import {
  BrowserRouter as Router,
} from "react-router-dom";

export default function Bombstruction() {
  return (
    <Router>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color="transparent" style={{ boxShadow: "none", }}>
        <Toolbar variant="dense">
          <div style={{ backgroundColor: "lightblue", paddingLeft:"1rem", paddingRight:"1rem", boxShadow: "2px 2px gray", borderRadius:"0% 0% 50% 70%"}}>
            <IconButton >
               <a href="#Video">
              <img src={Logo} alt="Logo" className="Logo" />
               </a>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      
      <div>
        <Cuerpo></Cuerpo>
      </div>
      <div id= "Video">
        <Trailer></Trailer>
      </div>
      <div >
        <Sinopsis></Sinopsis>
      </div>
      <div>
        <Documento></Documento>
      </div>
      <div>
        <Uno></Uno>
      </div>


    </Box>
    </Router>
  );
}
