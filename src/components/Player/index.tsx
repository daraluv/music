import React from 'react';
import {MusicStore} from '../../store/MusicStore';
import ControlBtn from './ControlBtn';
import {inject, observer} from 'mobx-react';
import { toJS } from 'mobx';
import { withRouter } from 'react-router';
import './style.scss';

interface Props {}
interface InjectedProps extends Props {
  MusicStore: MusicStore
}

@inject('MusicStore')
@observer
class Player extends React.Component <any>{
    get injected() {
      return this.props as InjectedProps;
    }

    //是否正在播放
    getIsPlaying = () => {
      return false;
    }

    //上一曲
    handleSwitchPrev = () => {

    }

    //下一曲
    handleSwitchNext = () => {

    }

    handleSwitchPlayState = () => {
      console.log('234',this.refs.audio)
      if (this.refs.audio) {
        const isPlaying = this.getIsPlaying()
        if (isPlaying) {
          // this.refs.audio.play()
        } else {
          // this.refs.audio.pause()
        }
      }
    }

    render() {
      const { MusicStore } = this.injected;
      console.log(0,MusicStore)
      return (
        <div className='player-wrapper'>
            <ControlBtn isPlaying={this.getIsPlaying()}
            switchPrevSong={this.handleSwitchPrev}
            switchNextSong={this.handleSwitchNext}
            switchPlayState={this.handleSwitchPlayState}/>
           <audio ref="audio" src={MusicStore.songInfos.url} autoPlay={true} />
        </div>
      )
    }
}

export default Player;