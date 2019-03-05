import * as React from 'react'
import './style.scss';

type IProps = {

}

class MusicInfos extends React.Component<IProps>{

  goBack() {

  }

  render(){
    return (
      <div className='top-infos'>
        <div onClick={this.goBack}>
          <i className="iconfont-ncm">返回></i>
        </div>
        <div className='infos-name'></div>
        <div className='infos-artists'></div>
      </div>
    )
  }

}

export default MusicInfos;