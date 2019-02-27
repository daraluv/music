import * as React from 'react';
import {Link} from 'react-router-dom'
import Banner from '../banner';
import api from "../../../api/api"
import RadioRecommend from "./RadioRecommend"
import './style.scss'

let bannerList:any = [];

class Radio extends React.Component {

  componentWillMount() {
    document.title = '主播电台';
    this.getBannerList();
  }

  public getBannerList = async () => {
    const res = await api.bannerList();
    bannerList = res.banners;
  }

  render() {
    return (
      <div className="home-container">
        <Banner>
          {bannerList.map((item: any, index: number) => {
            return (
              <div key={index}>
              <img src={item.imageUrl}/>
              </div>
            )
          })}
        </Banner>
        <RadioRecommend/>
      </div>
    )
  }
}

export default Radio;
