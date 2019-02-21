import * as React from 'react';
import SongCover from './SongCover';
import ControlBtn from './ControlBtn';
import MusicInfos from './MusicInfos'
import './style.scss';

class playMusic extends React.Component {
    componentDidMount() {
     
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
      return (
        <div className='playing-wrapper'>
          <MusicInfos/>
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