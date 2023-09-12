import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type InputType ={
    change:any;
    label:string,
  
}

export default function AInput(props:InputType) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" onChange={props.change} label={props.label} variant="outlined" />
     
    </Box>
  );
}