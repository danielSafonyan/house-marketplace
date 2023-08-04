import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  )
}

export default Layout
