import * as React from 'react';
import { NavLink, Route, Redirect } from 'react-router-dom';


class Mine extends React.Component {
  componentDidMount() {
    document.title = '我的';
  }

  render() {
    return (
      <div>
        我的音乐
      </div>
    )
  }
}

export default Mine;
