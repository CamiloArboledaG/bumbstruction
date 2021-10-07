import * as React from "react";
import "./Bombstruction.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Logo from "./img/Logo.png";
import { Grid, IconButton } from "@mui/material";
import Cuerpo from "./Cuerpo/Cuerpo";
import Sinopsis from "./Cuerpo/Sinopsis";
import Documento from "./Cuerpo/Documento";
import Avance1 from "./img/Avance1.png";
import Avance2 from "./img/Avance2.png";
import Trailer from "./Cuerpo/Trailer";
import Avances from "./Cuerpo/Avances";
import { BrowserRouter as Router } from "react-router-dom";

export default function Bombstruction() {
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="sticky"
          color="transparent"
          style={{ boxShadow: "none" }}
        >
          <Toolbar variant="dense">
            <div
              style={{
                backgroundColor: "lightblue",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                boxShadow:
                  "inset 20px 20px 50px 5px white, inset 0px 0px 4px 0px black, 1px 1px 1px 0px gray",
                borderRadius: "0% 0% 50% 70%",
              }}
            >
              <IconButton>
                <a href="#Video">
                  <img src={Logo} alt="Logo" className="Logo" />
                </a>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div>
              <Cuerpo></Cuerpo>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div id="Video">
              <Trailer></Trailer>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div>
              <Sinopsis></Sinopsis>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div>
              <Documento></Documento>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              spacing={2}
              style={{ alignItems: "center", justifyContent: "center", height:"150vh" }}
            >
              <Grid item xs={8} sm={6} md={4}>
                <Avances
                  Tipo="Avance 1"
                  Avatarimg={Avance1}
                  Descripcion="El avance 1 se centra en la mecanica de lanzar bombas y que exploten pasado los segundos."
                  link="https://youtu.be/qlq1GbdjQ3k"
                ></Avances>
              </Grid>
              <Grid item xs={8} sm={6} md={4}>
                <Avances
                Tipo="Avance 2"
                Avatarimg={Avance2}
                Descripcion="El avance 2 se centra en la implementación del del personaje y animaciones al correr y saltar, adicional de incluir la barra de vida y de bombas disponibles por el jugador."
                link="https://youtu.be/LexF8Ne8KGE"
                ></Avances>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Router>
  );
}
