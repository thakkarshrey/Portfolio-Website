import { Outlet, useLocation } from 'react-router'
import FloatingNavbar from '../../floating-navbar'
import { useEffect } from 'react'

const RootLayout = () => {
  // Always scroll to the top of the page when route changes
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <FloatingNavbar />
      <Outlet />
    </>
  )
}

export default RootLayout
