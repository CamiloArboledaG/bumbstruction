import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Avatar} from '@mui/material';

const icon = (
  <div style={{display:"flex", flexDirection:"column", alignItems:"center", padding:"1rem"}}>
    <Avatar alt="Remy Sharp" src="./Jose.jpeg"  sx={{ width: 150, height: 150 }}/>
    Jose Manuel Martínez
  </div>
);
const icon2 = (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", padding:"1rem"}}>
    <Avatar alt="Remy Sharp" src=""  sx={{ width: 150, height: 150 }}/>
    Danny Alejandro Martínez
  </div>
  );
  const icon3 = (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", padding:"1rem"}}>
    <Avatar alt="Remy Sharp" src="./juan.jpg"  sx={{ width: 150, height: 150 }}/>
    Juan Camilo Arboleda
  </div>
  );

export default function SimpleGrow() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div>
        
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Mostrar creadores"
      />
      <Box sx={{ display: 'flex'}} style={{ alignItems:"center", justifyContent:"center"}}>
        <Grow in={checked}
        style={{ transformOrigin: '0 0 0' }}
        {...(checked ? { timeout: 1000 } : {})}
        >{icon}</Grow>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
        <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 2000 } : {})}
        >
          {icon2}
        </Grow>
        <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 3000 } : {})}
        >
          {icon3}
        </Grow>
      </Box>
    </div>
  );
}
