/**
 * Home
 */
import * as React from 'react';
import { NavLink, Route, Redirect } from 'react-router-dom';

import './style.css';

class Radio extends React.Component {
  componentDidMount() {
    document.title = '个性推荐';
  }

  render() {
    return (
      <div className="home_container">
        <div className="content">
          <Route exact path="/" render={() => <Redirect to="/" />} />

        </div>
        <div className="nav">
          <NavLink to="/" activeClassName="active">个性推荐</NavLink>
          <NavLink to="/" activeClassName="active">主播电台</NavLink>
        </div>
      </div>
    )
  }
}

export default Radio;
