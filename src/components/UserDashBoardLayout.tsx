import { Outlet } from "react-router-dom"
import UserSiderBar from "./UserSiderBar"

function UserDashBoardLayout() {
  return (
    <div className='grid grid-cols-12 min-h-screen '>
        <div className='col-span-3 bg-white  '>
            <UserSiderBar/>
        </div>

        <div className='col-span-9  bg-white '>
            <Outlet/>
        </div>
    </div>
  )
}

export default UserDashBoardLayout