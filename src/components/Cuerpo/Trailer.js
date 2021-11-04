import * as React from 'react';
import ReactPlayer from 'react-player';
import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  height: 100vh;
  margin: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({margin: "0", height:"50vh" })}
`;

export default function Sinopsis() {
    return (
        <Container>
                <ReactPlayer
                url='https://www.youtube.com/watch?v=QvsJeaEfEBw'
                width='100%'
                height='80%'
                playing
                controls
                playbackRate= {1}
                />
        </Container>
    );
}
