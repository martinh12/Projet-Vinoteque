import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Contactform from './Contactform'
import Accueil from './Accueil'
import Quizz from './Quizz'
import AdminForm from './AdminForm'
import Footer from "./Footer"
import AdminPage from"./AdminPage"




class App extends Component {
  render() {
    return (

      <div className = 'App'>
        <div className = "body">
        <button>
          <NavLink exact to="/" activeStyle={{color: "red"}}> Acceuil </NavLink>
        </button>
        <button>
          <NavLink to="/quizz" activeStyle={{color: "red"}}> Les questions </NavLink>
        </button>
        <button>
          <NavLink to="/contactform" activeStyle={{color: "red"}}> Contactez nous </NavLink>
        </button>        
        <button>
          <NavLink to="/adminForm" activeStyle={{color: "red"}}> Administration </NavLink>
        </button>  
      
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route path="/quizz" component={Quizz} />
          <Route path="/contactform" component={Contactform} />
          <Route path="/adminForm" component={AdminForm} />
        </Switch>
        </div>


        <AdminPage/>


        
       </div>
    );
  }
}

export default App;
