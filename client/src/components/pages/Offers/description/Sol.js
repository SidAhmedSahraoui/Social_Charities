import React from 'react';
import { Container } from 'react-bootstrap';
import { BUTTON_TRANSPARENT,
         BUTTON_TRANSPARENT_D,
         BUTTON_TRANSPARENT_N
          } from '../../../../Styles/Button'

const Sol = () => {
    

        return (
            <Container>
            <div >
                <h1 style={BUTTON_TRANSPARENT}> Solidarity </h1>
                <h3 style={BUTTON_TRANSPARENT_D}> 1 - Aides en cas d'accident et de catastrophe </h3>
                <p style={BUTTON_TRANSPARENT_N}> 50.000 DZD </p>
                <h3 style={BUTTON_TRANSPARENT_D}> 2 - Aides pour les cas exceptionnels </h3>
                <p style={BUTTON_TRANSPARENT_N}> 50.000 DZD </p>
            </div>
            </Container>
            )
        }
  

export default Sol ;