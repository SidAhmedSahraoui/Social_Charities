import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import Skeleton from 'react-loading-skeleton';
import useStyles from './Navbar/navbar-jss';
// Utils
import calcDays from '../../utils/calcDays';

const RequestCard = ({
  request,
  toggleFavAction,
  isLoading,
  handleShowModal,
}) => {
  const {  _id, name , email , category , offer,request_accept , date } = request || {};

  const [isFav, setIsFav] = useState(request_accept);
  const toggleFav = async () => {
    setIsFav(!isFav);
    await toggleFavAction(_id);
  };

  const handleShow = () => {
    handleShowModal(request);
  };

  const classes = useStyles();

  if (isLoading)
    return (
      <div className='message-card text-left p-4'>
        <div className='card-inner d-flex flex-column justify-content-between'>
          <p className='content mb-3'>
            <Skeleton count={2} height={10} />
          </p>

          <div className='card-bottom d-flex align-items-center justify-content-between'>
            <button className='link-secondary'>
              <Skeleton count={1} height={24} width={120} />
            </button>
          </div>
        </div>
      </div>
    );

  return (
    <div className={`${classes.navbar}`}>
        <div className='message-card text-left p-4'>
          <div className='fav-container py-2 px-2' onClick={toggleFav}>
            <FontAwesomeIcon
              className={`icon ${isFav && 'is-fav'}`}
              icon={faSmile}
            />
          </div>
          <div className='card-inner d-flex flex-column justify-content-between'>
            <p className='content mb-3'>
              {name}
            </p>
            <p className='content mb-3'>
              {email}
            </p>
            <p className='content mb-3'>
              <strong className='link-secondary'> category : </strong> {' '} {category}
            </p>

            <p className='content mb-3'>
               <strong className='link-secondary'> offer : </strong> {' '} {offer}
            </p>
            <p className='content mb-3'>
               <strong className='link-secondary'> acceptation : </strong> {' '} {request_accept}
            </p>

            {/*<p className='content mb-3'>
              {category.length > 50 ? category.substring(0, 50) + '..' : category}
               </p> */}     
            <div className='card-bottom d-flex align-items-center justify-content-between'>
              <button className='button-primary' onClick={handleShow}>
                View Request
              </button>
              <span className='date'>{calcDays(date)}</span>
            </div>
          </div>
        </div>
    </div>
    
  );
};

export default RequestCard;
