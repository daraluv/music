import * as React from 'react';
import { NavLink, Route, Redirect } from 'react-router-dom';
import ReactSwipe from 'react-swipe'
import './style.css'


type IProps = {}

type IState = {
  index: number
}

export default class Banner extends React.Component<IProps, IState> {
  swipe: ReactSwipe | null = null

  state = {
    index: 0
  }


  dotClass = (index: any) => {
    return this.state.index === index ? 'dot active' : 'dot'
  }

  render() {
    const children = this.props.children ? this.props.children : <div className='box' />;
    console.log(children)
    return (
      <div className="swipe-wrapper">
        <ReactSwipe>
          {children}
        </ReactSwipe>
      </div>
    )
  }
}


