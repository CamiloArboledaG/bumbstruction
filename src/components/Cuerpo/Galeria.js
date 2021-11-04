import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  height: 80vh;
  margin: 5rem;
  margin-bottom: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({height: "100vh", margin:"0" })}
`;

export default function StandardImageList() {
  return (
    <Container>
    <ImageList sx={{ width: "100%", height: "90%" }} cols={3} rowHeight={164}>
    {itemData.map((item) => (
      <ImageListItem key={item.img}>
        <img
          src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
          srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          alt={item.title}
          loading="lazy"
        />
      </ImageListItem>
    ))}
  </ImageList>

    </Container>
    
  );
}

const itemData = [
  {
    img: '/Imagenesgaleria/1.png',
    title: 'Breakfast',
  },
  {
    img: '/Imagenesgaleria/2.png',
    title: '2',
  },
  {
    img: '/Imagenesgaleria/3.png',
    title: '3',
  },
  {
    img: '/Imagenesgaleria/4.png',
    title: '4',
  },
  {
    img: '/Imagenesgaleria/5.png',
    title: '5',
  },

  {
    img: '/Imagenesgaleria/6.png',
    title: '6',
  },
  {
    img: '/Imagenesgaleria/7.png',
    title: '7',
  },
  {
    img: '/Imagenesgaleria/8.png',
    title: '8',
  },
  {
    img: '/Imagenesgaleria/9.png',
    title: '9',
  },
  {
    img: '/Imagenesgaleria/10.png',
    title: '10',
  },
  {
    img: '/Imagenesgaleria/11.png',
    title: '11',
  },
  {
    img: '/Imagenesgaleria/12.png',
    title: '12',
  },
  {
    img: '/Imagenesgaleria/13.png',
    title: '13',
  },
  {
    img: '/Imagenesgaleria/14.png',
    title: '14',
  },
  {
    img: '/Imagenesgaleria/15.png',
    title: '15',
  },
  {
    img: '/Imagenesgaleria/16.png',
    title: '16',
  },
  {
    img: '/Imagenesgaleria/17.png',
    title: '17',
  },
  {
    img: '/Imagenesgaleria/18.png',
    title: '18',
  },
  {
    img: '/Imagenesgaleria/19.png',
    title: '19',
  },
  {
    img: '/Imagenesgaleria/20.png',
    title: '20',
  },
  {
    img: '/Imagenesgaleria/28.png',
    title: '21',
  },
  {
    img: '/Imagenesgaleria/22.png',
    title: '22',
  },
  {
    img: '/Imagenesgaleria/23.png',
    title: '23',
  },
  {
    img: '/Imagenesgaleria/bomba.png',
    title: '24',
  },
  {
    img: '/Imagenesgaleria/escenario1.png',
    title: '25',
  },
  {
    img: '/Imagenesgaleria/escenario2.png',
    title: '26',
  },
  {
    img: '/Imagenesgaleria/escenario3.png',
    title: '27',
  },
  {
    img: '/Imagenesgaleria/escenario4.png',
    title: '29',
  },
  {
    img: '/Imagenesgaleria/personaj1.png',
    title: '30',
  },
  {
    img: '/Imagenesgaleria/personaj2.png',
    title: '31',
  },
  {
    img: '/Imagenesgaleria/personaj3.png',
    title: '32',
  },
];
