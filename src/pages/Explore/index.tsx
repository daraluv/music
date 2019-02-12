import * as React from 'react';
import { NavLink, Route, Redirect } from 'react-router-dom';
import Radio from './Radio';
import Recommend from './Recommend';


class Explore extends React.Component {
  componentDidMount() {
    document.title = '主播电台';
    console.log(Radio)
  }

  render() {
    return (
      <div className="home_container">
        <div className="content">
          <Route exact path="/Explore" render={() => <Redirect to="/Explore/Recommend" />} />
          <Route exact path="/Explore/recommend" component={Recommend} />
          <Route exact path="/Explore/Radio" component={Radio} />
        </div>
        <div className="nav">
          <NavLink to="/Explore/Recommend" activeClassName="active">个性推荐</NavLink>
          <NavLink to="/Explore/Radio" activeClassName="active">主播电台</NavLink>
        </div>
      </div>
    )
  }
}

export default Explore;
