import Imagen from '../img/Documento.png';
import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';

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
        margin: "5rem",
        display: "flex",
        flexDirection: "column"
    },
    tittle: {
        paddingBottom: "2rem",
    },
    descargar: {
        backgroundColor: "#FEDC8C",
        paddingLeft: "3rem",
        paddingRight: "3rem",
        marginTop: "2rem",
    },
    down:{
        color: "black",
        fontWeight: "bold"
    }

});

export default function Sinopsis() {
    const classes = useStyles();
    return (
        <Grid container spacing={2} className={classes.root}>
            <Grid item xs={12} md={5} className={classes.sinopsis}>
                <div className={classes.tittle}>
                    <Typography variant="h3" align="left" >Documento de Diseño de Bombstruction</Typography>
                </div>
                <div>
                    <Typography variant="subtitle1" align="left">Proceso de diseño que muestra el punto de incio del proceso creativo de bombstruction, este documento contiene los puntos principales y que son de gran ayuda para iniciar el proceso de creación.
                    </Typography>
                </div>
                <Button className={classes.descargar}>
                    <a href='/GDD.pdf' className={classes.down} download>Descargar</a>
                </Button>
            </Grid>
            <Grid item xs={12} md={5}>
                <img src={Imagen} alt="Logo" className={classes.Logo} />
            </Grid>

        </Grid>
    );
}



