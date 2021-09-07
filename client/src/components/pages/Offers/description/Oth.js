import React from 'react';
import { Container } from 'react-bootstrap';

import { BUTTON_TRANSPARENT,
         BUTTON_TRANSPARENT_D,
         BUTTON_TRANSPARENT_N
          } from '../../../../Styles/Button'
         
const Oth = () => {
    

        return (
            <Container>
            <div >
                <h1 style={BUTTON_TRANSPARENT}> Other services </h1>
                <h3 style={BUTTON_TRANSPARENT_D}> 1 - Prêt exceptionnel </h3>
                <p style={BUTTON_TRANSPARENT_N}> 50.000 DZD  </p>
            </div>
            </Container>
            )
        }
  

export default Oth ;