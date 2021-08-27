import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Container, Form } from 'react-bootstrap';
import useStyles from '../Auth/login-jss';

// Actions
import { register, clearErrors } from '../../../redux/actions/authActions';
import { setAlert } from '../../../redux/actions/alertActions';

// App layout components
import Spinner from '../../layout/Spinner';

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
    category: '',
    offer: '',
  });

  const { category , offer } = req;


  const onChangeCategory = (e) =>
    setReq({ ...req , gender: parseInt(e.target.value) });

    const onChangeOffer = (e) =>
    setReq({ ...req , gender: parseInt(e.target.value) });

  
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

    if (category === '' || offer === '' ) {
      setAlert('Please enter all fields', 'danger');
    } else {
      await request({ category , offer });
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
                  <Form.Label className='subtitle'>Category</Form.Label>
                  <Form.Control
                    as='select'
                    name='category'
                    value={category}
                    onChange={onChangeCategory}
                  >
                    <option defaultValue value={5}>
                      Not defined
                    </option>
                    <option value={1}>Professor</option>
                    <option value={2}>Administration staff</option>
                    <option value={3}>ATS</option>
                    <option value={4}>fad</option>

                  </Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label className='subtitle'>Offer</Form.Label>
                  <Form.Control
                    as='select'
                    name='offer'
                    value={offer}
                    onChange={onChangeOffer}
                  >
                    <option defaultValue value={5}>
                      Not defined
                    </option>
                    <option value={1}>Professor</option>
                    <option value={2}>Administration staff</option>
                    <option value={3}>ATS</option>
                    <option value={4}>fad</option>

                  </Form.Control>
                </Form.Group>


              <div className='links d-flex align-items-center justify-content-between mt-4'>
                
                {loading ? (
                  <Spinner />
                ) : (
                  <button className='button-primary' type='submit' onClick={onSubmit}>
                    Add
                  </button>
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
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

export default connect(mapSateToProps, { register, clearErrors, setAlert })(
  Request
);
