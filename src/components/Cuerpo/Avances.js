import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { makeStyles } from "@mui/styles";
import Uno from "./Avances/Uno";
import { Avatar, Typography } from "@mui/material";

const style = {
  position: "absolute",
  width:"54vw",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  p: 4,
  borderRadius: "5%",
  boxShadow:
    "inset 20px 20px 50px 5px white, inset 0px 0px 4px 0px black, 1px 1px 1px 0px gray",
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    margin:"2rem",
    alignItems: "center",
    justifyContent: "center",
    height: "15rem",
    borderRadius: "10%",
    boxShadow:
      "inset 20px 20px 50px 5px white, inset 0px 0px 4px 0px black, 1px 1px 1px 0px gray",
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
          <Typography variant="h6" style={{color:"black"}}>{props.Tipo}</Typography>
        </div>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <Uno Tipo={props.Tipo} Link={props.link} Descripcion={props.Descripcion}></Uno>
        </Box>
      </Modal>
    </div>
  );
}
