import React from 'react'
import { styled } from "@mui/system";
import Button from '@mui/material/Button';
import styledC from 'styled-components'

const Container = styled("div")({
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "30px",
});

const TokenButtonContainer = styledC.div<{row: number}>`
    display: grid;
    grid-template-columns: repeat(${props => props.row}, 1fr);
    gap: 10px;
`
    
    
const TokenButtonWrapper = styled("div")({

});

type Props = {
    tokenArray: number[] | undefined,
    tokenPrefix: string,
    tokenRow: number,
    color: string
}


function TokenOutput({tokenArray,tokenPrefix,tokenRow,color}: Props) {
  
   
    
  return (
    <Container >
        <TokenButtonContainer row={tokenRow}>
         {tokenArray?.map((_item, index) => {
            return <TokenButtonWrapper>
                <Button variant="outlined" color={color}>{tokenPrefix}{index+1}</Button>
            </TokenButtonWrapper>
            
          })}
          </TokenButtonContainer>
    </Container>
  )
}

export default TokenOutput