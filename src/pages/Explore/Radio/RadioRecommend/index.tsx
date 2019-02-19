import * as React from 'react';
import {Link} from 'react-router-dom'
import api from "../../../../api/api"

class RadioRecommend extends React.Component {
   state = {
    radioList:[]
   }

  componentWillMount() {
    this.getRadioList();
  }

  public getRadioList = async () => {
    const res = await api.radioList();
    this.setState({
      radioList: res.result
    })
  }

  render() {
    const {radioList} = this.state;
    return (
      <div>
        <h3 className="floor-title">今日优选</h3>
        <div className="radio-rd-content">
         {radioList.map((item: any, index: number) => {
            return (
              <Link className="radio-items"  key={index} to={{
                pathname:  '/play',
                state: {
                  id:item.id,
                 picUrl: item.picUrl,
                 name: item.name,
                }
             }}>          
              <div className="img-cover">
                <img src={item.picUrl}/>
              </div>
              <div className="mid-wrapper">
                <h4>{item.name}</h4>
                <span>{item.copywriter}</span>
              </div>
              </Link>
            )
          })}
         
        </div>
      </div>
    )
  }
}

export default RadioRecommend;
