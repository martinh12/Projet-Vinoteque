import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Contactform from './Contactform'
import Accueil from './Accueil'
import Quizz from './Quizz'
import AdminForm from './AdminForm'
import AdminPage from "./AdminPage"
import Footer from "./Footer"

class App extends Component {
  render() {
    return (

      <div className = 'App'>
        <div className = "body">
        <button>
          <NavLink exact to="/" activeStyle={{color: "red"}}> Accueil </NavLink>
        </button>
        <button>
          <NavLink to="/quizz" activeStyle={{color: "red"}}> Questions </NavLink>
        </button>
        <button>
          <NavLink to="/contactform" activeStyle={{color: "red"}}> Contactez-nous </NavLink>
        </button>        
        <button>
          <NavLink to="/adminPage" activeStyle={{color: "red"}}> Administration </NavLink>
        </button>  
      
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route path="/quizz" component={Quizz} />
          <Route path="/contactform" component={Contactform} />
          <Route path="/adminPage" component={AdminPage} />
          <Route exact path="/adminForm" component={AdminForm} />
          <Route path="/adminForm/:id" component={AdminForm} />
        </Switch>
        </div>
     </div>
    );
  }
}

export default App;
