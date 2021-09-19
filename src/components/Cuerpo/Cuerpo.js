import bombs from '../img/Nombre.png';
import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const useStyles = makeStyles({
    Logo: {
        height: "80vh",
        minHeight: "20vh",
        
    },
});

export default function Nombre() {
    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1, height: "100vh" }}>
        <Grid container spacing={2} >
            <Grid item xs={12}>
                 <img src={bombs} alt="Logo" className={classes.Logo} />
            </Grid>
        </Grid>
        </Box>
    );
}



