import React from 'react';
import {BrowserRouter,Switch,Route,withRouter} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import About from './components/pages/About';
import Contact from './components/pages/Contact'
import NotFound from './components/pages/NotFound';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import User from './components/users/User';
import './App.css';

function App(props) {
  return (
    <BrowserRouter>
    <div className="App">
    
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path='/dashboard' component={Dashboard}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/users/add' component={AddUser}/>
        <Route exact path='/users/edit/:id' component={EditUser}/>
        <Route exact path='/users/:id' component={User}/>
        <Route component={NotFound}/>
      </Switch>        
      
    </div>
    </BrowserRouter>
  );
}

export default App;
