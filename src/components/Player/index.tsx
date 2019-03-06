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
  
    audio:any= null;

    get injected() {
      return this.props as InjectedProps;
    }

    //是否正在播放
    getIsPlaying = () => {
      const { MusicStore } = this.injected;
      console.log('获取的',MusicStore.playState.isPlaying)
      return MusicStore.playState.isPlaying;
    }

    //上一曲
    handleSwitchPrev = () => {

    }

    //下一曲
    handleSwitchNext = () => {

    }

    handleSwitchPlayState = () => {
      const { MusicStore } = this.injected;
      const isPlaying = this.getIsPlaying();
     
      if (this.audio) {
        if (isPlaying) {
          this.audio.pause();
          MusicStore.changePlayState(false);
        } else {
          this.audio.play();
          MusicStore.changePlayState(true);
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
           <audio ref={ref => { this.audio = ref}} src={MusicStore.songInfos.url} autoPlay={true} />
        </div>
      )
    }
}

export default Player;