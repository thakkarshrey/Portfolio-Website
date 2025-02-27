import React from 'react'
import './Tags.css'

type Props = {
  data: string[]
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Tags = ({ data, ...props }: Props) => {
  return (
    <div className="tags-container">
      {data?.map((element) => {
        return (
          <button key={element} className="tag" {...props}>
            {element}
          </button>
        )
      })}
    </div>
  )
}

export default Tags
