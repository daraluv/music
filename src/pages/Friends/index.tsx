import * as React from 'react';
import { NavLink, Route, Redirect } from 'react-router-dom';


class Friends extends React.Component {
  componentDidMount() {
    document.title = '朋友';
  }

  render() {
    return (
      <div>
        朋友分享内容
      </div>
    )
  }
}

export default Friends;
