import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

// Redux store
import store from "../redux/store";

// layout components
import Navbar from "./layout/Navbar/Navbar";
import Alert from "./layout/Alert";
import Footer from "./layout/Footer/Footer";

// pages
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Profile from "./pages/Dropdown/Profile";
import Settings from "./pages/Dropdown/Settings";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home/Home";
import Offers from "./pages/Offers/Offers";
import Request from "./pages/Requests/Request";
import Hea from "./pages/Offers/description/Hea";
import Soc from "./pages/Offers/description/Soc";
import Sol from "./pages/Offers/description/Sol";
import Oth from "./pages/Offers/description/Oth";
import Requests from "./pages/Dropdown/requests";
import Budget from "./pages/Dropdown/Budget/budget";
import Programme from "./pages/Programme/Programme";
import ProgrammeAdmin from "./pages/Programme/ProgrammeAdmin";
// Routes
import PrivateRoute from "./routes/PrivateRoute";
import AdminRoute from "./routes/AdminRoute";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="app">
          <Route path="/" component={Navbar} />
          <Alert />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute exact path="/u/:username" component={Profile} />
            <PrivateRoute exact path="/settings" component={Settings} />
            <PrivateRoute exact path="/request" component={Request} />
            <AdminRoute exact path="/pending" component={Requests} />
            <AdminRoute exact path="/users" component={Requests} />
            <AdminRoute exact path="/budget" component={Budget} />
            <AdminRoute
              exact
              path="/programmeAdmin"
              component={ProgrammeAdmin}
            />
            <Route exact path="/" component={Home} />
            <Route exact path="/offers" component={Offers} />
            <Route exact path="/offers/hea" component={Hea} />
            <Route exact path="/offers/soc" component={Soc} />
            <Route exact path="/offers/sol" component={Sol} />
            <Route exact path="/offers/oth" component={Oth} />
            <Route exact path="/programme" component={Programme} />
            <Route exact path="/404" component={NotFound} />
            <Route component={NotFound} />
          </Switch>
          <Route path="/" component={Footer} />
        </div>
      </Provider>
    </Router>
  );
}

export default App;
