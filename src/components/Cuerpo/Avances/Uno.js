import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import ReactPlayer from 'react-player';
import { Typography } from '@mui/material';

const useStyles = makeStyles({
    root: {
        display: "flex",
        alignItems: "center",
        padding: "5rem"
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

export default function Sinopsis(props) {
    const classes = useStyles();
    return (
        <Grid container spacing={2} className={classes.root}>
            <Grid item xs={6}>
            <Typography variant="h3" align="left" className={classes.tittle}>{props.Tipo}</Typography>
            <Typography variant="subtitle1" align="left" className={classes.tittle}>{props.Descripcion}</Typography>
            </Grid>
            <Grid item xs={6} className={classes.video}>
                <ReactPlayer
                url={props.Link}
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



