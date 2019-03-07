import * as React from 'react'
import './style.scss';

type IProps = {
  id:number,
  cover:string,
  name:string,
  artist:string
}

class MusicInfos extends React.Component<any>{

  goBack() {

  }

  render(){
    const {name, artist} = this.props.infos;
    console.log(this.props)
    return (
      <div className='top-infos'>
        <div onClick={this.goBack}>
          <i className="iconfont-ncm"> > </i>
        </div>
        <div className='mid-title'>
          <div className='infos-name'>{name}</div>
          <div className='infos-artists'>{artist}</div>
        </div>
      </div>
    )
  }

}

export default MusicInfos;