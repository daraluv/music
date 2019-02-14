import * as React from 'react'
import { Link, withRouter } from 'react-router-dom'
import cs from 'classnames'

class BottomBar extends React.Component {
  render() {
    const linkData = [
      {
        router: 'explore',
        name: '发现',
        icon: '\ue67c', // TODO: 不能直接写 &#xe67c;
        styleName: 'netease'
      },
      {
        router: 'video',
        name: '视频',
        icon: '\ue61c'
      },
      {
        router: 'mine',
        name: '我的',
        icon: '\ue680'
      },
      {
        router: 'friends',
        name: '朋友',
        icon: '\ue60b'
      },
      {
        router: 'account',
        name: '账号',
        icon: '\ue63b'
      }
    ]

    return (
      <ul >
        {linkData.map((item, index) => {
          return (
            <li key={index} style={{}}>
              <Link to={`/${item.router}`}>
                <i >{item.icon}</i>
                <div>{item.name}</div>
              </Link>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default BottomBar