import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { makeStyles } from "@mui/styles";
import Uno from "./Avances/Uno";
import { Avatar, Typography } from "@mui/material";
import styled from "styled-components";
import { mobile } from "../../responsive";


const Container = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  background-color: white;
  align-items: center;
  justify-content: center;
  margin: 0px;
  top: 50%;
  left: 50%;
  ${mobile({ flexWrap: "Wrap", margin: "15pxs" })}
`;

const useStyles = makeStyles({
  root: {
    display: "flex",
    margin: "2rem",
    alignItems: "center",
    justifyContent: "center",
    height: "15rem",
    borderRadius: "25px",
    boxShadow: "3px 3px 2px 1px gray",
    backgroundColor:"rgba(156, 226, 226, 0.5)",
    "&:hover": {
      boxShadow: "inset 2px 2px 2px 1px gray",
      backgroundColor:"rgba(156, 226, 226, 0.3)",
    },
  },
});

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button onClick={handleOpen}>
        <div>
          <Avatar
            alt="Imagen del avance"
            src={props.Avatarimg}
            sx={{ width: 150, height: 150 }}
          />
          <Typography variant="h6" style={{ color: "black" }}>
            {props.Tipo}
          </Typography>
        </div>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container>
          <Uno
            Tipo={props.Tipo}
            Link={props.link}
            Descripcion={props.Descripcion}
          ></Uno>
        </Container>
      </Modal>
    </div>
  );
}
