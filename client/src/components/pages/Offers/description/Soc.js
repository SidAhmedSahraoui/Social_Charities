import React from 'react';
import { Container } from 'react-bootstrap';
import {
         BUTTON_TRANSPARENT,
         BUTTON_TRANSPARENT_D,
         BUTTON_TRANSPARENT_N
          } from '../../../../Styles/Button'
         
const Soc = () => {
    

        return (
            <Container>
            <div >
                <h1 style={BUTTON_TRANSPARENT}> Social aid </h1>
                <h3 style={BUTTON_TRANSPARENT_D}> 1 - Retraite </h3>
                <p style={BUTTON_TRANSPARENT_N}> 100.000 DZD  </p>
                <h3 style={BUTTON_TRANSPARENT_D}> 2 - Décès  </h3>
                <p style={BUTTON_TRANSPARENT_N}>  Le décès du travailleur avant la retraite ( 100.000 DZD ) <br/>
                                                  Le décès à la retraite ( 50.000 DZD ) <br/>
                                                  Le décès de mari ou de femme ( 70.000 DZD ) <br/>
                                                  Le décès du fils ( 70.000 DZD ) <br/>
                                                  Le décès du père ( 40.000 DZD )  </p>
                <h3 style={BUTTON_TRANSPARENT_D}> 3 - Mariage  </h3>
                <p style={BUTTON_TRANSPARENT_N}> 20.000 DZD  </p>
                <h3 style={BUTTON_TRANSPARENT_D}>4 - Naissance  </h3>
                <p style={BUTTON_TRANSPARENT_N}> 10.000 DZD  </p>
                <h3 style={BUTTON_TRANSPARENT_D}> 5 - Circoncision  </h3>
                <p style={BUTTON_TRANSPARENT_N}>  5.000 DZD </p>
                
            </div>
            </Container>
            )
        }
  

export default Soc ;