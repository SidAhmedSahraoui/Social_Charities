import React from 'react';
import styled from 'styled-components';

import { BUTTON_TRANSPARENT,
         BUTTON_TRANSPARENT_D,
         BUTTON_TRANSPARENT_N
          } from '../../../../Styles/Button'
         
const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
  
  @media (min-width: 500px) {
    width: 450px;
  }
`;


const Sol = () => {
    

        return (
            <StyledDiv>
            <div >
                <h1 style={BUTTON_TRANSPARENT}> Solidarity </h1>
                <h3 style={BUTTON_TRANSPARENT_D}> 1 - Aides en cas d'accident et de catastrophe </h3>
                <p style={BUTTON_TRANSPARENT_N}> 50.000 DZD </p>
                <h3 style={BUTTON_TRANSPARENT_D}> 2 - Aides pour les cas exceptionnels </h3>
                <p style={BUTTON_TRANSPARENT_N}> 50.000 DZD </p>
            </div>
            </StyledDiv>
            )
        }
  

export default Sol ;