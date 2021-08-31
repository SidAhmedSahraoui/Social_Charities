import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

// Redux store
import store from '../redux/store';

// App layout components
import Navbar from './layout/Navbar/Navbar';
import Alert from './layout/Alert';
import Footer from './layout/Footer/Footer';

// App pages
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Profile from './pages/Dropdown/Profile';
import Settings from './pages/Dropdown/Settings';
import NotFound from './pages/NotFound'
import Home from './pages/Home/Home';
import Offers from './pages/Offers/Offers';
import Requests from './pages/Requests/Request';
import Hea from './pages/Offers/description/Hea';
import Soc from './pages/Offers/description/Soc';
import Sol from './pages/Offers/description/Sol';
import Oth from './pages/Offers/description/Oth';
import Dash from './pages/Admin/Dash'
// Routes
import  PrivateRoute  from './routes/PrivateRoute';
function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className='app'>
          <Switch>
          <Route  path='/u/admin' >
            <Alert />
                <Navbar />
                <PrivateRoute  path='/u/admin' component={Dash} />
                <PrivateRoute exact path='/u/admin/home' component={Footer} />
                <PrivateRoute exact path='/u/admin/requests' component={Footer}/>
                <PrivateRoute exact path='/u/admin/budget' component={Footer}/>
                <Footer />
          </Route>
          <Route  path='/' >
              <Navbar />
              <Alert />
              <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/u/:username' component={Profile} />
                <PrivateRoute exact path='/settings' component={Settings} />
                <PrivateRoute exact path='/requests' component={Requests} />
                <Route exact path='/' component={Home} />
                <Route exact path='/offers' component={Offers} />
                <Route exact path='/offers/hea' component={Hea} />
                <Route exact path='/offers/soc' component={Soc} />
                <Route exact path='/offers/sol' component={Sol} />
                <Route exact path='/offers/oth' component={Oth} />
                <Route exact path='/404' component={NotFound} />
                <Route component={NotFound} />
              </Switch>
              <Footer />
            </Route>
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
