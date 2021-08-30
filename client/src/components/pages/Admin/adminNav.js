
import React , { useState , useEffect } from 'react' ; 
import { Link } from 'react-router-dom';
import useStyles from '../../layout/Navbar/navbar-jss';
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


const AdminNav = (props) => {

  const { user, logout, loadUser, clearMessages } = props;
  useEffect(() => {
    loadUser();

    // eslint-disable-next-line
  }, []);
  const logoutFunction = () => {
    logout();
    clearMessages();
  };
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
          
              
    
              
              <ul className='admin'>
              { userMenu }             
               </ul>         
        </nav>
      );
    };

    const mapSateToProps = (state) => ({
      isAuthenticated: state.auth.isAuthenticated,
      user: state.auth.user,
      loading: state.user.loading,

    });
    
    export default connect(mapSateToProps, { logout, loadUser, clearMessages })(
        AdminNav
    );
  