import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface InputFieldProps {
    label: string;
}

const InputField = ({label}:InputFieldProps) => {
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
     <TextField
          id="outlined-number"
          label={label}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
    </Box>
  )
}

export default InputField