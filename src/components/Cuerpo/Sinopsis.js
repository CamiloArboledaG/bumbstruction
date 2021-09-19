import Imagen from '../img/Imagen1.png';
import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const useStyles = makeStyles({
    root: {
        display: "flex",
        alignItems: "center",
        height: "100vh",
    },
    Logo: {
        height: "50vh",
        minHeight: "20vh",

    },
    sinopsis: {
        padding: "3rem",
        margin: "1rem"
    },
    tittle: {
        paddingBottom: "2rem",
    }

});

export default function Sinopsis() {
    const classes = useStyles();
    return (
        <Grid container spacing={2} className={classes.root}>
            <Grid item xs={12} md={6}>
                <img src={Imagen} alt="Logo" className={classes.Logo} />
            </Grid>
            <Grid item xs={12} md={5} className={classes.sinopsis}>
                <div className={classes.tittle}>
                    <Typography variant="h3" align="left" >Sinopsis</Typography>
                </div>
                <div>
                    <Typography variant="subtitle1" align="left">Un personaje víctima de un grupo mafioso decide saciar su sed de venganza, enfrentándose a ellos en diferentes partidas de bombardeos. Para ello tendrá que sobrevivir a sus contrincantes, acabar con sus enemigos y obtener recompensas en los enfrentamientos uno a uno con otros personajes online de la mafia.
                    </Typography>
                </div>

            </Grid>
        </Grid>
    );
}



