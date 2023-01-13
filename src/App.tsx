import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { styled } from "@mui/system";
import Button from '@mui/material/Button';

const InputWrapper = styled("div")({
  color: "darkslategray",
  // backgroundColor: 'aliceblue',
  display: "flex",
  justifyContent: "center",
});

const ButtonContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  marginTop: '30px',
 });

function App() {
  const [blueTokenNumberValue, setBlueTokenNumberValue] = useState();
  const [blueTokenRow, setBlueTokenRow] = useState();
  const [blueTokenPrefix, setBlueTokenPrefix] = useState('');
  const [redTokenNumberValue, setRedTokenNumberValue] = useState();
  const [redTokenRow, setRedTokenRow] = useState();
  const [redTokenPrefix, setRedTokenPrefix] = useState('');
 
  
  return (
    <div className="App">
      <h1>Token Generator Application</h1>
      <InputWrapper>
        <InputField
          TokenNumberlabel="Number of Blue tokens"
          TokenPrefixLabel="Blue Token Prefix"
          TokenPerRowLabel="Blue Token Per Row"
          TokenNumberValue={blueTokenNumberValue}
          setTokenNumberValue={setBlueTokenNumberValue}
          TokenRow={blueTokenRow} 
          setTokenRow={setBlueTokenRow}
          TokenPrefix={blueTokenPrefix} 
          setTokenPrefix={setBlueTokenPrefix}
        />
        <InputField
          TokenNumberlabel="Number of Red tokens"
          TokenPrefixLabel="Red Token Prefix"
          TokenPerRowLabel="Red Token Per Row"
          TokenNumberValue={redTokenNumberValue}
          setTokenNumberValue={setRedTokenNumberValue}
          TokenRow={redTokenRow}
          setTokenRow={setRedTokenRow}
          TokenPrefix={redTokenPrefix}
          setTokenPrefix={setRedTokenPrefix}
        />
      </InputWrapper>
        <ButtonContainer>
        <Button variant="contained">Gernerate Token</Button>
        <Button variant="outlined">Clear</Button>
        </ButtonContainer>
    </div>
  );
}

export default App;
