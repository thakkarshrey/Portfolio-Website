import './Box.css'

type Props = {
  children: React.ReactNode
}

const Box = ({ children, ...props }: Props) => {
  return (
    <div className="box-container" {...props}>
      {children}
    </div>
  )
}

export default Box
