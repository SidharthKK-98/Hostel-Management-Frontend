import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Button } from "./ui/button"
import { House } from "lucide-react"
import { useLogout } from "@/hooks/authHooks/useLogout"

type userSideBarButton={
     id:number,
    name:string,
    route:string
}

function UserSiderBar() {

    const[activeButton,setActiveButon] = useState(1)
    const {mutate:Logout,isPending} = useLogout()
    

    const ButtonArray:userSideBarButton[] = [
        {
            id:1,
            name:"User DashBoard",
            route:"/user"
        },
        {
            id:2,
            name:"Select Daily Menu",
            route:"/user/selectDailyMenu"
        },
        {
            id:3,
            name:"Menu Overview",
            route:"/user/menuOverview"
        }
    ]

  return (
    <div className="p-4 h-full  bg-gray-800 shadow-2xl z-10  ">
            <h1 className="text-white font-semibold  my-4 flex gap-2 items-center"><House/> User</h1>
        {
            ButtonArray.map((item)=>(
                <NavLink  key={item.id} to={item.route}>
                    
                    <Button className={`w-full my-1 py-6  border-black ${activeButton===item.id ? "bg-blue-400 text-white hover:bg-blue-400" : "text-gray-500 bg-white"} `}  onClick={()=>setActiveButon(item.id)} >{item.name}</Button>

                </NavLink>

            ))
        }

         <Button variant={"link"} 
        onClick={()=>Logout()}
        disabled={isPending}
        className="text-white w-full mx-auto">Logout</Button>

    </div>
  )
}

export default UserSiderBar