import './GlowingButton.css'

type Props = {
  children: React.ReactNode
  color?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>
const GlowingButton = ({ children, color = 'white', ...buttonProps }: Props) => {
  return (
    <>
      <button
        id="glowing-button"
        {...buttonProps}
        style={
          {
            '--glow-color': color
          } as React.CSSProperties
        }
      >
        {[...new Array(4).fill(0)].map((_, index) => {
          return <span key={index}></span>
        })}
        {children}
      </button>
    </>
  )
}

export default GlowingButton
