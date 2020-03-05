import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Login from "../Login";
import SignUp from "../SignUp";
import Feed from "../Feed";
import Home from "../Home";
import Contato from "../Contato";
import TextDetails from "../TextDetails";
import About  from "../About";
import FeedByCategory from "../FeedCategorias";
import ChangePassword from "../ChangePassword";


export const routes = {
  login:"/login",
  signUp: "/signup",
  home: "/home",
  feed: "/feed",
  contato: "/contato",
  text: "/text",
  about: "/about",
  feedcat: "/feedcat",
  changepw: "/changepw"
};

function Router(props) {
    return (
      <ConnectedRouter history={props.history}>
        <Switch>  
        <   Route exact path={routes.changepw} component={ChangePassword}/> 
            <Route exact path={routes.feedcat} component={FeedByCategory}/> 
            <Route exact path={routes.feed} component={Feed}/> 
            <Route exact path={routes.about} component={About}/> 
            <Route exact path={routes.text} component={TextDetails}/> 
            <Route exact path={routes.contato} component={Contato}/> 
            <Route exact path={routes.login} component={Login}/> 
            <Route exact path={routes.home} component={Home}/>
            <Route exact path={routes.signup} component={SignUp}/> 
> 
            
        </Switch>
      </ConnectedRouter>
    );
  
}

export default Router;
