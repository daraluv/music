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

type IState = {
  isLoading: boolean
}

class Cover extends React.Component<IProps, IState> {

  state = {
    isLoading: true
  }

  componentDidUpdate() {
    if (this.state.isLoading === true) {
      const newImg = new Image()
      newImg.onload = () => {
        this.setState({
          isLoading: false
        })
      }
      if (this.props.coverImg) {
        newImg.src = this.props.coverImg
      }
    }
  }

  render() {
    const { coverImg, path, playCount, listName } = this.props;
    return (
      <div>
        <Link className="slideNav" to={{
           pathname: path,
           state: {
            picUrl: coverImg,
            name: listName,
            playCount
           }
        }}>
         {coverImg ? (
            <React.Fragment>
              <p className={listName}>{listName}</p>
              <div className="playCountWrapper">
                <span>{playCount}</span>
              </div>
            </React.Fragment>
          ) : null}
        </Link>
      </div>
    )
  }
}

export default Cover;