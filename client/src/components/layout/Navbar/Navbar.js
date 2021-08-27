import React , { useState , useEffect } from 'react' ; 
import { Link } from 'react-router-dom';
import Logo from '../../../images/logo.png';
import useStyles from './navbar-jss';
import { connect } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faSignOutAlt,
  faEnvelope,
  faCog,
} from '@fortawesome/free-solid-svg-icons';

// Actions
import { logout, loadUser } from '../../../redux/actions/authActions';
import { clearMessages } from '../../../redux/actions/messageActions';

import {
  faGripLines,
   /* faSignOutAlt,
    faEnvelope,
    faUser,
    faFileAlt,
    faCheck,*/
} from '@fortawesome/free-solid-svg-icons';




const NavbarComponent = (props) => {

  const { isAuthenticated, user, logout, loadUser, clearMessages } = props;
  useEffect(() => {
    loadUser();

    // eslint-disable-next-line
  }, []);
  const logoutFunction = () => {
    logout();
    clearMessages();
  };
    
      const guestMenu = (
        <>
          <Link to='/login'>
            <div className='nav-item' >
            <button className='nav-link button-primary my-sm-0'>Get started</button>
            </div>
          </Link>
        </>
      );

      const userMenu = (
        <>
          <Dropdown alignRight>
            <Dropdown.Toggle variant='outline-light'>
              Hey, <strong>{user && user.username}</strong>
            </Dropdown.Toggle>
    
            <Dropdown.Menu>
              <Link
                to={`/u/${user ? user.username : ''}`}
                className='dropdown-item'
              >
                <FontAwesomeIcon className='icon mr-3' icon={faUser} size='lg' />
                Profile
              </Link>
              <Link to='/messages' className='dropdown-item'>
                <FontAwesomeIcon
                  className='icon mr-3'
                  icon={faEnvelope}
                  size='lg'
                />
                Messages
              </Link>
              <Link to='/settings' className='dropdown-item'>
                <FontAwesomeIcon className='icon mr-3' icon={faCog} size='lg' />
                Settings
              </Link>
              <Dropdown.Divider></Dropdown.Divider>
              <button onClick={() => logoutFunction()} className='dropdown-item'>
                <FontAwesomeIcon
                  className='icon mr-3'
                  icon={faSignOutAlt}
                  size='lg'
                />
                Logout
              </button>
            </Dropdown.Menu>
          </Dropdown>
        </>
      );
    
      const [toggleStatus, setToggleStatus] = useState('closed');
    
      const classes = useStyles();
    
      const handleToggle = () => {
        toggleStatus === 'closed'
          ? setToggleStatus('opened')
          : setToggleStatus('closed');
      };




    return (
        <nav
          className={`${classes.navbar} navbar navbar-expand-lg navbar-light `}
        >
          <div className='container'>
            <Link className='navbar-brand' to='/'>
              <img className='logo' src={Logo} alt='esisoc' />
            </Link>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={handleToggle}
            >
              <FontAwesomeIcon
                style={
                  toggleStatus !== 'closed' && {
                    transformOrigin: 'center',
                    transform: 'rotate(90deg)',
                  }
                }
                icon={faGripLines}
              />
            </button>
    
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav mr-auto'>
                <li className='BUTTON_TRANSPARENT'>
                  <Link className='nav-link' to='/requests'>
                    Requests
                  </Link>
                </li>

                <li className='BUTTON_TRANSPARENT'>
                  <Link className='nav-link' to='/offers'>
                    Offers
                  </Link>
                </li>

                <li className='BUTTON_TRANSPARENT'>
                  <Link className='nav-link' to='/contact'>
                    Contact
                  </Link>
                </li>

              </ul>
    
              
              <ul className='navbar-nav'>
              {isAuthenticated ? userMenu : guestMenu}             
               </ul>
            </div>
          </div>
        </nav>
      );
    };

    const mapSateToProps = (state) => ({
      isAuthenticated: state.auth.isAuthenticated,
      user: state.auth.user,
    });
    
    export default connect(mapSateToProps, { logout, loadUser, clearMessages })(
      NavbarComponent
    );