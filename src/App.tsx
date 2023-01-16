import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { styled } from "@mui/system";
import Button from '@mui/material/Button';
import TokenOutput from "./components/TokenOutput";

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
  const [blueTokenNumberValue, setBlueTokenNumberValue] = useState<number>(0);
  const [blueTokenRow, setBlueTokenRow] = useState(0);
  const [blueTokenPrefix, setBlueTokenPrefix] = useState('');
  const [redTokenNumberValue, setRedTokenNumberValue] = useState(0);
  const [redTokenRow, setRedTokenRow] = useState(0);
  const [redTokenPrefix, setRedTokenPrefix] = useState('');

  const [blueTokenArray, setBlueTokenArray] = useState<number[]>()
  const [redTokenArray, setRedTokenArray] = useState<number[]>()

  const [flag, setFlag] = useState(false)
 
  const handleTokenGenerator = () => {
   
    
    if (blueTokenNumberValue !==0 && blueTokenRow !== 0 && blueTokenPrefix && redTokenRow !== 0 && redTokenPrefix &&redTokenNumberValue !==0) {
      const blueArr = Array.from({length: blueTokenNumberValue}, (_v, i) => i);
    setBlueTokenArray(blueArr)
    const redArr = Array.from({length: redTokenNumberValue}, (_v, i) => i);
    setRedTokenArray(redArr)
      setFlag(false)
    }
    else{
      // alert('Please fill all the fields')
      setFlag(true)
    }
    // for (let i = 0; i < blueTokenNumberValue; i++) {
    //   blueTokenArray?.push(i)
    // }
    // console.log(blueTokenArray);
    
  }

  const handleClearButton = () => {
    setBlueTokenNumberValue(0)
    setBlueTokenRow(0)
    setBlueTokenPrefix('')
    setRedTokenNumberValue(0)
    setRedTokenRow(0)
    setRedTokenPrefix('')
    setBlueTokenArray([])
    setRedTokenArray([])
    setFlag(false)
  }

  
  
  
  return (
    <div className="App">
      <h1>Token Generator Application</h1>
      {flag? <h1>please filled all the details</h1>: ''}
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
        <Button onClick={()=>handleTokenGenerator()} variant="contained">Gernerate Token</Button>
        <Button onClick={()=>handleClearButton()} variant="outlined">Clear</Button>
        </ButtonContainer>
        <div>
         <TokenOutput tokenArray={blueTokenArray}
         tokenPrefix={blueTokenPrefix}
         tokenRow={blueTokenRow}
         color="primary"
         />
         <TokenOutput tokenArray={redTokenArray}
         tokenPrefix={redTokenPrefix}
         tokenRow={redTokenRow}
         color="error"
         />
        </div>
    </div>
  );
}

export default App;
