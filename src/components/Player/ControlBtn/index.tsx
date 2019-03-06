import * as React from 'react'
import './style.scss';

type IProps = {
  isPlaying: boolean
  switchPrevSong: React.MouseEventHandler<HTMLLIElement>
  switchNextSong: React.MouseEventHandler<HTMLLIElement>
  switchPlayState: React.MouseEventHandler<HTMLLIElement>
}


const ControlBtn: React.SFC<IProps> = props => {
    return (
      <div className='control-content'>
        <div className="btn-group">
          <i onClick={props.switchPrevSong} className='icon-prev'>
          </i>
          {props.isPlaying ? (
            <i onClick={props.switchPlayState} className={'icon-pause'}>
            </i>
          ) : (
             <i onClick={props.switchPlayState} className='icon-playing'>
             </i>
          )}
          <i onClick={props.switchNextSong} className={'icon-next'}>
          </i>
        </div>
      </div>
    )
}


export default ControlBtn;