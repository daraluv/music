import * as React from 'react';
import Banner from '../banner';
import Matrix from '../../../components/Matrix';
import Cover from '../../../components/Cover';

import api from "../../../api/api"


type IProps = {
  normalizer: (result: object) => any[]
  title: string
}

class Recommend extends React.Component<IProps> {
  state={
    lists: [],
    bannerList: []
  }

  componentWillMount() {
    this.getRecommended();
    this.getBannerList();
  }

  public getRecommended = async () => {
    const res = await api.recommendList();
    this.setState({
        lists:res.result 
    })
  }

  public getBannerList = async () => {
    const res = await api.bannerList();
    this.setState({
      bannerList:res.banners 
    })
  }

  render() {
    const {bannerList,lists} = this.state;

    return (
      <div>
        <Banner >
        {bannerList.map((item: any, index: number) => {
          return (
            <div key={index} className="slideItem">
            <img src={item.imageUrl}/>
            </div>
          )
        })}
        </Banner>

        <h3 className="floor-title">推荐歌单</h3>
        <Matrix width={33}>
          {lists.slice(0, 6).map((list: any, index: number) => {
            return (
              <Cover 
                key={index}
                coverImg={list.picUrl}
                playCount={list.playCount}
                path={list.path}
                listName={list.name}
                id={list.id}
              >
                {list.id}
              </Cover>
            )
          })}
        </Matrix>
      </div>
    )
  }
}
export default Recommend;
