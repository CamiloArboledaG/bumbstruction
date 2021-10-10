import Imagen from "../img/Documento.png";
import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Button, Typography } from "@mui/material";
import styled from "styled-components";
import { mobile } from "../../responsive";

const useStyles = makeStyles({
  descargar: {
    backgroundColor: "#FEDC8C",
    paddingLeft: "3rem",
    paddingRight: "3rem",
    marginTop: "2rem",
  },
  down: {
    color: "black",
    fontWeight: "bold",
  },
});

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  ${mobile ({ height: "80vh", flexWrap: "Wrap", margin:"10px"})}
`;
const TextContainer = styled.div`
    margin: 30px;
    display: flex;
    flex-direction: column;
    flex:1;
    ${mobile ({ margin: "10px", flexWrap: "Wrap", width:"100%"})}
`;
const TituloContainer = styled.h3`
    padding-bottom: 10px;
    text-align: left;
    font-weight: 500;
    font-size: 50px;
    ${mobile ({ paddingBottom: "2px", fontSize: "35px"})}
`;
const ImageContainer = styled.div`
    margin: 30px;
    ${mobile ({ margin: "10px"})}
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    flex:1;
`;

export default function Sinopsis() {
  const classes = useStyles();
  return (
    <Container >
      <TextContainer>
        <TituloContainer>
            Documento de Diseño de Bombstruction
        </TituloContainer>
        <div>
          <Typography variant="subtitle1" align="left">
            Proceso de diseño que muestra el punto de incio del proceso creativo
            de bombstruction, este documento contiene los puntos principales y
            que son de gran ayuda para iniciar el proceso de creación.
          </Typography>
        </div>
        <Button className={classes.descargar}>
          <a href="/GDD.pdf" className={classes.down} download>
            Descargar
          </a>
        </Button>
      </TextContainer>
      <ImageContainer>
        <Image src={Imagen} alt="Logo" />
      </ImageContainer>
    </Container>
  );
}
