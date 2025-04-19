import './GlowingButton.css'

type Props = {
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>
const GlowingButton = ({ children, ...buttonProps }: Props) => {
  return (
    <>
      <button id="glowing-button" {...buttonProps}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {children}
      </button>
    </>
  )
}

export default GlowingButton
