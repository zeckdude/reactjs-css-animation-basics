import React from "react";
import {BrowserRouter as Router, Route, Redirect, Link, Switch} from 'react-router-dom';
import Transitions from './Transitions';
import Animations from './Animations';
import JsAnimations from './JsAnimations';
import ReactCssTransitions from './ReactCssTransitions';
import ReactCssAnimations from './ReactCssAnimations';
import RoutingTransitions from './RoutingTransitions';
import NoMatch from './NoMatch';

const ListItemLink = ({
  to,
  ...rest
}) => (
  <Route path={to} children={({match}) => (
    <li className={match
      ? 'active'
      : ''}>
      <Link to={to} {...rest}/>
    </li>
  )}/>
)

export class Main extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper orange darken-2">
            <div>
              <ul className="left">
                <ListItemLink to="/transitions">CSS Transitions</ListItemLink>
                <ListItemLink to="/animations">CSS Animations</ListItemLink>
                {/* <ListItemLink to="/js-animations">JS Animations</ListItemLink> */}
                <ListItemLink to="/reactjs-css-transitions">ReactJS + CSS Transitions</ListItemLink>
                <ListItemLink to="/reactjs-css-animations">ReactJS + CSS Animations</ListItemLink>
                {/* <ListItemLink to="/routing-transitions">Routing Transitions</ListItemLink> */}
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="s12"></div>
          </div>

          <div className="row">
            <div className="s8 offset-s2 center-align">
              <div>
                <Switch>
                  <Route exact path="/" render={() => (<Redirect to="/transitions"/>)}/>
                  <Route exact path="/transitions" component={Transitions}/>
                  <Route exact path="/animations" component={Animations}/>
                  <Route exact path="/js-animations" component={JsAnimations}/>
                  <Route exact path="/reactjs-css-transitions" component={ReactCssTransitions}/>
                  <Route exact path="/reactjs-css-animations" component={ReactCssAnimations}/>
                  <Route exact path="/routing-transitions" component={RoutingTransitions}/>
                  <Route component={NoMatch}/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
