import Imagen from '../img/Imagen1.png';
import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Integrantes from './Integrantes';

const useStyles = makeStyles({
    root: {
        display: "flex",
        alignItems: "center",
        height: "150vh",
    },
    Logo: {
        height: "50%",
        width:"100%",

    },
    sinopsis: {
        padding: "3rem",
        margin: "1rem",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius:"3%",
        border: "1px solid black"
    },
    tittle: {
        paddingBottom: "2rem",
        paddingTop: "1rem",
    }

});

export default function Sinopsis() {
    const classes = useStyles();
    return (
        <Grid container spacing={2} className={classes.root}>
            <Grid item xs={12} sm={9} md={6}>
                <img src={Imagen} alt="Logo" className={classes.Logo} />
            </Grid>
            <Grid item xs={12} sm={12} md={5} className={classes.sinopsis}>
                <div className={classes.tittle}>
                    <Typography variant="h3" align="center" >Sinopsis</Typography>
                </div>
                <div>
                    <Typography variant="subtitle1" align="center">Un personaje víctima de un grupo mafioso decide saciar su sed de venganza, enfrentándose a ellos en diferentes partidas de bombardeos. Para ello tendrá que sobrevivir a sus contrincantes, acabar con sus enemigos y obtener recompensas en los enfrentamientos uno a uno con otros personajes online de la mafia.
                    </Typography>
                </div>
                <div style={{width:"100%"}}>
                    <Integrantes></Integrantes>
                </div>
            </Grid>
        </Grid>
    );
}



