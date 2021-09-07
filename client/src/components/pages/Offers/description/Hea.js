import React from 'react';
import { Container } from 'react-bootstrap'

import { BUTTON_TRANSPARENT,
         BUTTON_TRANSPARENT_D,
         BUTTON_TRANSPARENT_N
          } from '../../../../Styles/Button'
         

const Hea = () => {
    

        return (
            <Container>
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
            </Container>
            )
        }
  

export default Hea ;