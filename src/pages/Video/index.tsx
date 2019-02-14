import * as React from 'react';
import { NavLink, Route, Redirect } from 'react-router-dom';


class Video extends React.Component {
  componentDidMount() {
    document.title = '视频';
  }

  render() {
    return (
      <div>
        现场视频
      </div>
    )
  }
}

export default Video;
