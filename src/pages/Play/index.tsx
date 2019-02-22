import * as React from 'react';
import SongCover from './SongCover';
import ControlBtn from './ControlBtn';
import MusicInfos from './MusicInfos'
import {inject, observer} from 'mobx-react';
import {MusicStore} from '../../store/store';
import { toJS } from 'mobx';
import './style.scss';

interface Props {}
interface InjectedProps extends Props {
  MusicStore: MusicStore
}

@inject('MusicStore')
@observer
class playMusic extends React.Component <Props, any>{
    get injected() {
      return this.props as InjectedProps;
    }

    componentDidMount() {
      const { MusicStore } = this.injected;
      console.log(MusicStore, MusicStore.songInfos)
      // MusicStore.getSongUrl();
    }
    
    getIsPlaying = () => {
      return false;
    }

    handleSwitchPrev = () => {

    }

    handleSwitchNext = () => {

    }

    handleSwitchPlayState = () => {

    }

    render() {
      // const { HomeStore } = this.props;
      return (
        <div className='playing-wrapper'>
          <MusicInfos />
          <SongCover/>
          <ControlBtn isPlaying={this.getIsPlaying()}
            switchPrevSong={this.handleSwitchPrev}
            switchNextSong={this.handleSwitchNext}
            switchPlayState={this.handleSwitchPlayState}/>
           <audio src='' autoPlay={true} />
        </div>
      )
    }
}

export default playMusic;