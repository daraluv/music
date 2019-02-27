import * as React from 'react';
import Banner from '../banner';
import Matrix from '../../../components/Matrix';
import Cover from '../../../components/Cover';
import api from "../../../api/api"


class Recommend extends React.Component {
  bannerList:any = [];
  state = {
    lists: []
  }

  componentWillMount() {
    this.getRecommended();
    this.getBannerList();
  }

  public getRecommended = async () => {
    const res = await api.recommendList();
    this.setState({
        lists:res.result 
    });
  }

  public getBannerList = async () => {
    const res = await api.bannerList();
    this.bannerList = res.banners;
  }

  render() {
    const {lists} = this.state;

    return (
      <div>
        <Banner >
        {this.bannerList.map((item: any, index: number) => {
          return (
            <div key={index}>
            <img src={item.imageUrl}/>
            </div>
          )
        })}
        </Banner>
        <div className="floor-content">
          <h3 className="floor-title">推荐歌单</h3>
          <Matrix width={33}>
            {lists.slice(0, 6).map((list: any, index: number) => {
              return (
                <Cover 
                  key={index}
                  coverImg={list.picUrl}
                  playCount={list.playCount}
                  path={'/SongList'}
                  listName={list.name}
                  id={list.id}
                >
                  {list.id}
                </Cover>
              )
            })}
          </Matrix>
        </div>
      </div>
    )
  }
}
export default Recommend;
