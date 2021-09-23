import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import ReactPlayer from 'react-player';
import { Typography } from '@mui/material';

const useStyles = makeStyles({
    root: {
        display: "flex",
        alignItems: "center",
        height: "100vh",
        padding: "2rem"
    }, 
    video: {
        width:"100%", 
        height:"50%", 
        display:"flex", 
        alignItems:"center", 
        justifyContent:"center"
    },
    tittle: {
        paddingBottom: "2rem",
    },
});

export default function Sinopsis() {
    const classes = useStyles();
    return (
        <Grid container spacing={2} className={classes.root}>
            <Grid item xs={6}>
            <Typography variant="h3" align="left" className={classes.tittle}>Avance 1</Typography>
            <Typography variant="subtitle1" align="left" className={classes.tittle}>El avance 1 se centra en la mecanica de lanzar bombas y que exploten pasado los segundos.</Typography>
            </Grid>
            <Grid item xs={6} className={classes.video}>
                <ReactPlayer
                url='https://youtu.be/qlq1GbdjQ3k'
                width='100%'
                height='100%'
                playing
                loop
                playbackRate= {1.75}
                />
            </Grid>
        </Grid>
    );
}



