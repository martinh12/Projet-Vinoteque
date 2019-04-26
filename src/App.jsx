import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Contactform from './Contactform'
import Accueil from './Accueil'
import Quizz from './Quizz'
import AdminForm from './AdminForm'
import AdminPage from "./AdminPage"
import Footer from "./Footer"
import './App.css';

class App extends Component {
  render() {
    return (

      <div className = 'App'>
      <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet"/> 
      <div className="custom-navbar">
          
        <button>
          <NavLink to="/adminPage" activeStyle={{color: "red"}}> Administration </NavLink>
        </button>  
      </div>
      
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route path="/quizz" component={Quizz} />
          <Route path="/contactform" component={Contactform} />
          <Route path="/adminPage" component={AdminPage} />
          <Route exact path="/adminForm" component={AdminForm} />
          <Route path="/adminForm/:id" component={AdminForm} />
        </Switch>

        <Footer/>
       </div>
        
    );
  }
}

export default App;
