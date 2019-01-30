
import * as React from 'react';
import { NavLink, Route, Redirect } from 'react-router-dom';



class Radio extends React.Component {
  componentDidMount() {
    document.title = '个性推荐';
  }

  render() {
    return (
      <div className="Recommend_container">
       推荐
      </div>
    )
  }
}

export default Radio;
