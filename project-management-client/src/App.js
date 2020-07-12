import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectList from './components/projects/ProjectList';
import ProjectDetails from './components/projects/ProjectDetails';
import EditProject from './components/projects/EditProject';
import AddImage from './components/images/AddImage';
import Navbar from './components/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup'
import AuthService from './components/auth/auth-service';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    loggedInUser: null 
  }
  service = new AuthService();

  setCurrentUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  componentDidMount() {
    this.fetchUser();
  }

  // 1. save the user into the browser localstorage
  // OR
  // 2. check if the user is still loggedin by calling the backend
  fetchUser = () => {
    if(this.state.loggedInUser === null) {
      this.service.loggedin() 
        .then(response => {
          if (response._id) {
            this.setCurrentUser(response);
            localStorage.setItem("loggedin", true);
          } else {
            localStorage.clear();
          }
        })
    }
  }
  
  render() {
      return (
        <div className="App">
          <Navbar setCurrentUser={this.setCurrentUser} loggedInUser={this.state.loggedInUser} />
          <Switch>
            <Route path='/login' render={(props) => <Login setCurrentUser={this.setCurrentUser} {...props} /> } />
            <Route path='/login-google' component={() => { window.location.href = 'http://localhost:5000/api/auth/google' }}/>
            <Route path='/signup' render={(props) => <Signup setCurrentUser={this.setCurrentUser} {...props} /> } />
            <Route exact path="/images/add" component={AddImage} />
            <Route exact path="/projects" component={ProjectList} />
            <Route exact path="/projects/:id" render={(props) => <ProjectDetails {...props} loggedInUser={this.state.loggedInUser} /> } />
            <Route exact path="/projects/:id/edit"  render={(props) => {
              if (localStorage.getItem("loggedin")) {
                return <EditProject loggedInUser={this.state.loggedInUser} {...props} />
              } else {
                return <Redirect to="/login" />
              }}}
             />
          </Switch>
        </div>
      );
  }
}

export default App;