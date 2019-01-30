
import * as React from 'react';
import { NavLink, Route, Redirect } from 'react-router-dom';
import ReactSwipe from 'react-swipe'
import './style.css';

class Banner extends React.Component {


  render() {
    return (
      <ReactSwipe>
      <div key={banner.url} className={style.slideItem}>
        <img className={style.slideImg} src={banner.picUrl} />
      </div>
      </ReactSwipe>
    )
  }
}

export default Banner;
