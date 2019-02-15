import * as React from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect,Switch} from "react-router-dom";
import Explore from '../pages/Explore';
import Video from '../pages/Video';
import Mine from '../pages/Mine';
import Friends from '../pages/Friends';
import Account from '../pages/Account';
import './style.scss'
import './common.scss'

class Home extends React.Component {
  componentDidMount() {
    document.title = 'music';
  }

  render() {
    return (
      <Router>
      <div className="home_container">
        <div className="content"> 
          <Switch>
            <Route path="/Explore" component={Explore} />
            <Route path="/Video" component={Video} />
            <Route path="/Mine" component={Mine} />
            <Route path="/Friends" component={Friends} />
            <Route path="/Account" component={Account} />
            <Redirect to="/Explore" /> 
          </Switch>
        </div>
        <div className="bottom-nav">
          <NavLink to="/Explore" activeClassName="active">发现</NavLink>
          <NavLink to="/Video" activeClassName="active">视频</NavLink>
          <NavLink to="/Mine" activeClassName="active">我的</NavLink>
          <NavLink to="/Friends" activeClassName="active">朋友</NavLink>
          <NavLink to="/Account" activeClassName="active">账号</NavLink>
        </div>
      </div>
      </Router>
    )
  }
}

export default Home;
