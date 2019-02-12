import * as React from 'react';
import Banner from '../banner'
import Matrix from '../../../components/Matrix'
import Cover from '../../../components/Cover'

type IProps = {
  normalizer: (result: object) => any[]
  title: string
}

const Recommend: React.SFC<IProps> = ({  normalizer, title }) => {
  const lists: any = [1,2,3];
  return (
    <div>
      <Banner></Banner>
      <Matrix width={33} >
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
export default Recommend;
