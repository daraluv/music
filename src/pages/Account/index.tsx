import * as React from 'react';
import { NavLink, Route, Redirect } from 'react-router-dom';


class Account extends React.Component {
  componentDidMount() {
    document.title = '账号';
  }

  render() {
    return (
      <div>
        用户名
      </div>
    )
  }
}

export default Account;
