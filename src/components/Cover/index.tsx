import React from 'react'
import {Link} from 'react-router-dom'
import cs from 'classnames'

type IProps = {
  coverImg: string
  listName: string
  path: string
  playCount?: number
  id?: string
}

class Cover extends React.Component<IProps> {
  state = {
    isLoading: true
  }

  render() {
    const { coverImg, path, playCount, listName } = this.props;
    return (
      <div className="cover-items">
        <Link className="slideNav" to={{
           pathname: path,
           state: {
            picUrl: coverImg,
            name: listName,
            playCount
           }
        }}>
        <img src={coverImg} className="coverImg"/>
         {coverImg ? (
            <React.Fragment>
              <p className="listName">{listName}</p>
              {/* <div className="playCountWrapper">
                <span>{playCount}</span>
              </div> */}
            </React.Fragment>
          ) : null}
        </Link>
      </div>
    )
  }
}

export default Cover;