import React from "react";
import { Helmet } from "react-helmet";
import { WEBSITE_NAME } from "../../../utils/Data";
import useStyles from "./Request-jss";
import Form from './Form';
import styled from 'styled-components';

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


 const Request = () => {

   const classes = useStyles();
    return(
      <>
      <StyledDiv className={`${classes.page} card-shadow text-center`} >
      <Helmet>
        <title>{`${WEBSITE_NAME} | Requests`}</title>
      </Helmet>
      <div  >
        <h2 className='title'>Add a request</h2>
            <h5 className='subtitle'>
                Please fill this form then submit your request    
            </h5>
        <div className='row'>
          <div className='col'>
            {' '}
            <form className='add-form mx-auto mt-4' >

                <Form  />

                <input
                  type='submit'
                  value='Add request'
                  className='button-primary mt-3'
                />
            </form>
          </div>
        </div>
      </div>
    </StyledDiv>
    </>

    )
}
export default Request ;