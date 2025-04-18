import { Outlet } from 'react-router'
import FloatingNavbar from '../../floating-navbar'

const RootLayout = () => {
  return (
    <>
      <FloatingNavbar />
      <Outlet />
    </>
  )
}

export default RootLayout
