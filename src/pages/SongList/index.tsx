import React from 'react';
import api from "../../api/api";
import {Link} from 'react-router-dom';
import './style.scss';

class SongList extends React.Component<any> {
  state = {
    listInfos:{},
    tracksList:[]
  }

  componentDidMount() {
    const id = this.props.location.state.id;
    console.log('歌单id',id)
    this.getList(id)
    console.log(123)
  }


  public getList = async (id: number) => {
    const res = await api.playlist(id);
    this.setState({
      listInfos: res.playlist,
      tracksList: res.playlist.tracks
    })
  }

  render() {
    const {listInfos, tracksList}: any = this.state;

    return (
      <div>
        <div className='main-floor'>
          <div className='infos-wrapper'>
            <div className='cover-wrapper'>
              <img src={listInfos.coverImgUrl} />
              <p ></p>
            </div>
            <h3>{listInfos.name}</h3>
          </div>
          <div className='songList'>
          {
            tracksList.map((v: any,i: number) => {
              return(
                <Link className="list-items" key={i} to={{
                  pathname:  '/play',
                  state: {
                    id:v.id
                  }
               }}>       
                  <i className='rank-num'>{i}</i>
                  <div className="mid-infos">
                    <h3>{v.name}</h3>
                    <p>{v.ar[0].name} - {v.al.name}</p>
                  </div>
                </Link>
              )
            })
          }
          </div>
        </div>
        <div className='bg-img' style={{ backgroundImage: `url(${listInfos.coverImgUrl})` }} />
      </div>
    )
  }
  

}

export default SongList;