import React from 'react';
import styled from 'styled-components';

import {
         BUTTON_TRANSPARENT,
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


const Soc = () => {
    

        return (
            <StyledDiv>
            <div >
                <h1 style={BUTTON_TRANSPARENT}> Social aid </h1>
                <h3 style={BUTTON_TRANSPARENT_D}> 1 - Retraite </h3>
                <p style={BUTTON_TRANSPARENT_N}> 100.000 DZD  </p>
                <h3 style={BUTTON_TRANSPARENT_D}> 2 - La mort  </h3>
                <p style={BUTTON_TRANSPARENT_N}>  Le décès du travailleur avant la retraite ( 100.000 DZD ) <br/>
                                                  Le décès à la retraite ( 50.000 DZD ) <br/>
                                                  Le décès de mari ou de femme ( 70.000 DZD ) <br/>
                                                  Le décès du fils ( 70.000 DZD ) <br/>
                                                  Le décès du père ( 40.000 DZD )  </p>
                <h3 style={BUTTON_TRANSPARENT_D}> 3 - Le mariage  </h3>
                <p style={BUTTON_TRANSPARENT_N}> 20.000 DZD  </p>
                <h3 style={BUTTON_TRANSPARENT_D}>4 - Nouveau-né  </h3>
                <p style={BUTTON_TRANSPARENT_N}> 10.000 DZD  </p>
                <h3 style={BUTTON_TRANSPARENT_D}> 5 - La circoncision  </h3>
                <p style={BUTTON_TRANSPARENT_N}>  5.000 DZD </p>
                
            </div>
            </StyledDiv>
            )
        }
  

export default Soc ;