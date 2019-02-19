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
    auto: 3000,
    continuous: false,
    callback: index => {
      this.setState({
        index
      })
    }
  }

  handleClickDot = (index:any ) => {
    if (this.swipe !== null) {
      this.swipe.slide(index, 1000)
    }
  }

  dotClass = (index: any) => {
    return this.state.index === index ? 'dot active' : 'dot'
  }

  render() {
    const children = this.props.children ? this.props.children : <div/>;
    const hasNum = React.Children.count(this.props.children);

    console.log(children)

    return (
      <div className="swipe-wrapper">
      {hasNum > 0 ? <ReactSwipe key={React.Children.count(this.props.children)} swipeOptions={this.swipeOpt}>
          {children}
        </ReactSwipe>:null
      }
      <div className="swipe-dots">
          {Array(React.Children.count(this.props.children))
            .fill('dot')
            .map((val, index) => (
              <span onClick={() => this.handleClickDot(index)} key={index} className={this.dotClass(index)} />
            ))}
        </div>
      </div>
    )
  }
}


