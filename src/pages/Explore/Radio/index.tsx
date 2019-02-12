import * as React from 'react';
import { NavLink, Route, Redirect } from 'react-router-dom';
import Banner from '../banner'
import './style.css'

class Radio extends React.Component {
  componentDidMount() {
    document.title = '主播电台';
    console.log(Banner)
  }

  render() {
    return (
      <div className="home-container">
      主播电台
        <div className="category-items">
        </div>
      </div>
    )
  }
}

export default Radio;
