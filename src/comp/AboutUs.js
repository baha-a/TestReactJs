import React, { Component } from 'react'

import {  Link,BrowserRouter as Router,Route,Switch} from "react-router-dom";

export default class AboutUs extends Component {
  render() {
    const {match} = this.props;
    return (
      <div>
          <Router>
            <div>
          AboutUs page
            <Link to={`${match.url}/1`}>1</Link> - 
            <Link to={`${match.url}/2`}>2</Link> - 
            <Link to={`${match.url}/3`}>3</Link>

            <Switch>
              <Route exact path={`${match.url}/1`} render={()=><div>page One</div>}/>
              <Route exact path={`${match.url}/2`} render={()=><div>page Two</div>}/>
              <Route exact path={`${match.url}/3`} render={()=><div>page three</div>}/>
            </Switch>  
      </div>
            </Router>
      </div>
    )
  }
}
