import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

function AdminDashBoardLayout () {
  return (
    <div className='grid grid-cols-12 h-lvh '>
        <div className='col-span-3 bg-white  '>
            <SideBar/>
        </div>

        <div className='col-span-9  bg-white '>
            <Outlet/>
        </div>
    </div>
  )
}

export default AdminDashBoardLayout