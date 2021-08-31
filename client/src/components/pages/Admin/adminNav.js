import React , { useState , useEffect } from 'react' ; 
import { Link } from 'react-router-dom';
import useStyles from './navbar-jss';
import { connect } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faSignOutAlt,
  faGripLines,
  faCog,
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../images/logo.png'

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
                Dashboard
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
      <nav className={`${classes.navbar} navbar navbar-expand-lg navbar-light `}>
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

              { userMenu }            
    </div>
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
  