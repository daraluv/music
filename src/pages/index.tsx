import * as React from 'react';
import { NavLink, Route, Redirect } from 'react-router-dom';
import Account from '../pages/Account';
import Explore from '../pages/Explore';
import Friends from '../pages/Friends';

class Home extends React.Component {
  componentDidMount() {
    document.title = 'music';
  }

  render() {
    return (
      <div className="home_container">
        <div className="content">
        123
          <Route path="/" render={() => <Redirect to="/Explore" />} />
          <Route path="/Explore" component={Explore} />
          <Route path="/Account" component={Account} />
          <Route path="/Friends" component={Friends} />
        </div>
        <div className="nav">
          <NavLink to="/Explore" activeClassName="active">发现</NavLink>
          <NavLink to="/Account" activeClassName="active">账号</NavLink>
          <NavLink to="/Friends" activeClassName="active">朋友</NavLink>
        </div>
      </div>
    )
  }
}

export default Home;
