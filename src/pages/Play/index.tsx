import React from 'react';
import {MusicStore} from '../../store/MusicStore';
import {inject, observer} from 'mobx-react';
import { toJS } from 'mobx';
import SongCover from './SongCover';
import MusicInfos from './MusicInfos';
import { withRouter } from 'react-router';
import './style.scss';

interface Props {}
interface InjectedProps extends Props {
  MusicStore: MusicStore
}

@inject('MusicStore')
@observer
class Playing extends React.Component <any>{
    get injected() {
      return this.props as InjectedProps;
    }

   
    componentDidMount() {
      const { MusicStore } = this.injected;
      let id;
    
      if(this.props.location.state) {
         if(this.props.location.state.id) {
           id = this.props.location.state.id;
           console.log('接收的歌曲id',this.props.location.state)
           MusicStore.getSongUrl(id);//405998841
           MusicStore.changePlayState(true);
         }
      };
    }
    
  

    render() {
      const { MusicStore } = this.injected;
      console.log(0,MusicStore)
      return (
        <div className='playing-wrapper'>
          <MusicInfos infos={this.props.location.state}/>
          <SongCover coverUrl={this.props.location.state.cover}/>
        </div>
      )
    }
}

export default withRouter(Playing);