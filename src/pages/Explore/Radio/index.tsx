import * as React from 'react';
import { NavLink, Route, Redirect } from 'react-router-dom';
import Banner from '../banner'
import './style.css';

class Radio extends React.Component {
  componentDidMount() {
    document.title = '主播电台';
  }

  render() {
    return (
      <div className="home_container">
      主播电台
      <Banner></Banner>
      </div>
    )
  }
}

export default Radio;
