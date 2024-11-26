import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'quanlytruycap';
import Home from './page/Home';
import Login from './page/Login';
import Dashboard from './page/Dashboard';
import Settings from './page/Settings';
import PrivateRoute from './components/PrivateRoute';
import Settings from './page/Settings';
const App = () => {
 return (
 <Router>
 <Switch>
 <Route exact path="/" component={Home} />
 <Route path="/login" component={Login} />
 <PrivateRoute path="/dashboard" component={Dashboard} />
 <PrivateRoute path="/settings" component={Settings} />
 </Switch>
 </Router>
 );
};
export default App;