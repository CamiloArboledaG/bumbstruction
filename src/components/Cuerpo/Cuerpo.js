import bombs from '../img/Nombre.png';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import styled from "styled-components";
import { mobile } from '../../responsive';


const Image = styled.img`
    width: 80%;
    height: 100vh;
    ${mobile ({width:"100%", height:"100%"})}
`
const Box = styled.div`
    height: 100vh;  
    ${mobile ({height:"100vh", display:"flex", alignItems: "center" })}
`


export default function Nombre() {
    return (
        <Box>
        <Grid container>
            <Grid item xs={12}>
                <Image src={bombs}/>
            </Grid>
        </Grid>
        </Box>
    );
}



