import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Contactform from './Contactform'
import Accueil from './Accueil'
import Quizz from './Quizz'
import AdminForm from './AdminForm'
import Footer from "./Footer"





class App extends Component {
  render() {
    return (

      <div className = 'App'>
        <button>
          <NavLink exact to="/" activeStyle={{color: "red"}}> Accueil </NavLink>
        </button>
        <button>
          <NavLink to="/" activeStyle={{color: "red"}}> Questions </NavLink>
        </button>
        <button>
          <NavLink to="/contactform" activeStyle={{color: "red"}}> Contactez-nous </NavLink>
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
    );
  }
}

export default App;
