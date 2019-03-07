import * as React from 'react';
import './style.scss';

class SongCover extends React.Component<any> {
    componentDidMount() {
     
    }
  
    render() {
      console.log("封面",this.props)
      const box= "cover-box"
      return (
        <div className={box}>
          <img className="cover-img" src={this.props.coverUrl}/>
        </div>
      )
    }
}

export default SongCover;