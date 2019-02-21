import * as React from 'react';
import './style.scss';

class SongCover extends React.Component {
    componentDidMount() {
     
    }
  
    render() {
      return (
        <div className="cover-box">
          <img className="cover-img" src="https://p2.music.126.net/B-uIF_a41n8Gc6ZQc9-Tyw==/109951163851436082.jpg"/>
        </div>
      )
    }
}

export default SongCover;