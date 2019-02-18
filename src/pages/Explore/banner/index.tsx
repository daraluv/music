import * as React from 'react';
import { NavLink, Route, Redirect } from 'react-router-dom';
import ReactSwipe from 'react-swipe'
import './style.scss'


type IProps = {}

type IState = {
  index: number
}

export default class Banner extends React.Component{
  swipe: ReactSwipe | null = null

  state = {
    index: 0
  }

  swipeOpt: SwipeOptions = {
    auto: 5000,
    continuous: false,
    callback: index => {
      this.setState({
        index
      })
    }
  }

  dotClass = (index: any) => {
    return this.state.index === index ? 'dot active' : 'dot'
  }


  render() {
    const children = this.props.children ? this.props.children : <div className='box' />;
    console.log(children)
    return (
      <div className="swipe-wrapper">
        <ReactSwipe swipeOptions={this.swipeOpt}>
          <div>
          {children}
          </div>
        </ReactSwipe>
      </div>
    )
  }
}


