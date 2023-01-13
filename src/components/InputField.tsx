import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';

const Container = styled(Box)({
 display: 'flex',
    flexDirection: 'column',
});

interface InputFieldProps {
    TokenNumberlabel: string,
    TokenPerRowLabel: string,
    TokenPrefixLabel: string,
    TokenNumberValue: number,
    setTokenNumberValue: any,
    TokenRow: any,
    setTokenRow: any,
    TokenPrefix: any,
    setTokenPrefix: any,
}

const InputField = ({TokenNumberlabel,TokenPrefixLabel,TokenPerRowLabel,TokenNumberValue,setTokenNumberValue,TokenRow,setTokenRow,TokenPrefix,setTokenPrefix}:InputFieldProps) => {
  
    
  return (
    <Container
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
     <TextField
          id="outlined-number"
          label={TokenNumberlabel}
          type="number"
          value={TokenNumberValue}
            onChange={(e) => setTokenNumberValue(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
     <TextField
          id="outlined-number"
          label={TokenPrefixLabel}
          type="char"
          value={TokenPrefix}
            onChange={(e) => setTokenPrefix(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
     <TextField
          id="outlined-number"
          label={TokenPerRowLabel}
          type="number"
            value={TokenRow}
            onChange={(e) => setTokenRow(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
    </Container>
  )
}

export default InputField