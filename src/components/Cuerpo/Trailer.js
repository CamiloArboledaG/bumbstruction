import * as React from 'react';
import { makeStyles } from '@mui/styles';
import ReactPlayer from 'react-player';
import { Box } from '@mui/system';

const useStyles = makeStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent:"center",
        height: "100vh",
    },
});

export default function Sinopsis() {
    const classes = useStyles();
    return (
        <Box container spacing={2} className={classes.root}>
                <ReactPlayer
                url='https://www.youtube.com/watch?v=QvsJeaEfEBw'
                width='80%'
                height='90%'
                playing
                controls
                playbackRate= {1}
                />
        </Box>
    );
}
