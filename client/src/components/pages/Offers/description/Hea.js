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


const Hea = () => {
    

        return (
            <StyledDiv>
            <div >
                <h1 style={BUTTON_TRANSPARENT}> Health services </h1>
                <h3 style={BUTTON_TRANSPARENT_D}> 1 - opérations chirurgicales </h3>
                <p style={BUTTON_TRANSPARENT_N}> 
                    25 % de la valeur des opérations
                    (seulement moins de 150.000 DZD) pour les enseignants 
                    et les travailleurs des écoles et leurs proches (fils de 21 ans et fille jusqu'au mariage)
                 </p>
                <h3 style={BUTTON_TRANSPARENT_D}> 2 - Hammam (bain minéral) </h3>
                <p style={BUTTON_TRANSPARENT_N}> 25 % de la valeur pour les hammams
                                                  (seulement sous 50.000 DZD) </p>
            </div>
            </StyledDiv>
            )
        }
  

export default Hea ;