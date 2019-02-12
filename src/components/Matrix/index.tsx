import React, { ReactNode, Children } from 'react'
import  './style.css'

type IProps = {
  cols?: number
  width: number
  children: ReactNode[]
}

const defaultProps: Partial<IProps> = {
  cols: 3
}

const Matrix: React.SFC<IProps> = ({ children, cols, width }) => {
  if (!children) {
    return null
  }

  const layoutWidth = width ? `${width}%` : `${100 / (cols as number)}%`

  const rows: ReactNode[] = []
  for (let i = 0; i < children.length; i += cols as number) {
    const currRow = children.slice(i, i + (cols as number))
    rows.push(
      currRow.map((item, index) => {
        return (
          <div key={index} style={{ width: layoutWidth }}>
            {item}
          </div>
        )
      })
    )
  }

  const colElements = rows.map((row, index) => {
    return (
      <div key={index} className="list">
        244{row}
      </div>
    )
  })

  return <div>{colElements}</div>
}

Matrix.defaultProps = defaultProps

export default Matrix