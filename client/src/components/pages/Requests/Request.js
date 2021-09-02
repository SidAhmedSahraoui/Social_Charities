import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Container, Form, Button } from 'react-bootstrap';
import useStyles from '../Auth/login-jss';
import { styled } from '@material-ui/core/styles';

// Actions
import { request, clearErrors } from '../../../redux/actions/requestActions';
import { setAlert } from '../../../redux/actions/alertActions';

// App layout components
import Spinner from '../../layout/Spinner/Spinner';
import FormInput from './Form'
// Utils
import { WEBSITE_NAME } from '../../../utils/Data';


const Request = (props) => {
  const {
    error,
    loading,
    request,
    clearErrors,
    setAlert,
  } = props;

  const [req, setReq] = useState({
    email: '',
    name:'',
    category: '',
    offer: '',
  });

  const { name, email, category, offer } = req;




  const onChange = (e) => setReq({ ...req, [e.target.name]: e.target.value });

  

  useEffect(() => {
    if (error && error.length) {
      if (typeof error === 'object') {
        error.forEach((err) => {
          setAlert(err.msg, 'danger');
        });
      } else {
        setAlert(error, 'danger');
      }

      clearErrors();
    }

    // eslint-disable-next-line
  }, [error]);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (category === '' || offer === '' || email === '' || name === '' ) {
      setAlert('Please enter all fields', 'danger');
    } else {
      await request({ name , email , category , offer });
    }
  };

  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>{`${WEBSITE_NAME} | Request`}</title>
      </Helmet>
      <Container className={`${classes.root} `}>
        <div className='container-inner px-3 mt-4'>
          <div className='auth mx-auto'>
            <h4 className='mb-3 text-center '>
              <strong className='title' >Add a request</strong>
            </h4>
        
               
               
            <Form className='form form-container' onSubmit={onSubmit}>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Email'
                  name='email'
                  value={email}
                  onChange={onChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Full Name'
                  name='name'
                  value={name}
                  onChange={onChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>category</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='category'
                  name='category'
                  value={category}
                  onChange={onChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>offer</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='offer'
                  name='offer'
                  value={offer}
                  onChange={onChange}
                />
              </Form.Group>

              <div className='links d-flex align-items-center justify-content-between mt-4'>
                
                {loading ? (
                  <Spinner />
                ) : (
                  <Button variant='primary' type='submit'>
                    SEND
                  </Button>
                )}
              </div>
         




            </Form>
          </div>
        </div>
      </Container>
    </>
  );
};

const mapSateToProps = (state) => ({
  error: state.auth.error,
  loading: state.auth.loading,
});

export default connect(mapSateToProps, { request, clearErrors, setAlert })(
  Request
);

