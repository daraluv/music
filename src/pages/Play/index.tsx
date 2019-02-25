import React from 'react';
import {MusicStore} from '../../store/store';
import {inject, observer} from 'mobx-react';
import { toJS } from 'mobx';
import SongCover from './SongCover';
import ControlBtn from './ControlBtn';
import MusicInfos from './MusicInfos';
import { withRouter } from 'react-router';
import './style.scss';

interface Props {}
interface InjectedProps extends Props {
  MusicStore: MusicStore
}

@inject('MusicStore')
@observer
class playMusic extends React.Component <any>{
    get injected() {
      return this.props as InjectedProps;
    }

    componentDidMount() {
      const { MusicStore } = this.injected;
      console.log(MusicStore)
      const id = this.props.location.state.id;
      MusicStore.getSongUrl(405998841);
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
      const { MusicStore } = this.injected;
      console.log(0,MusicStore.songInfos.url)
      return (
        <div className='playing-wrapper'>
          <MusicInfos />
          <SongCover/>
          <ControlBtn isPlaying={this.getIsPlaying()}
            switchPrevSong={this.handleSwitchPrev}
            switchNextSong={this.handleSwitchNext}
            switchPlayState={this.handleSwitchPlayState}/>
           <audio src={MusicStore.songInfos.url} autoPlay={true} />
        </div>
      )
    }
}

export default withRouter(playMusic);