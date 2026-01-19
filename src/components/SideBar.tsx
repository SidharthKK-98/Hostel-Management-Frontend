import { Button } from "@/components/ui/button"
import { useLogout } from "@/hooks/authHooks/useLogout"
import { House } from "lucide-react"
import { useState } from "react"
import { NavLink } from "react-router-dom"

type sideBarButton={
    id:number,
    name:string,
    route:string
}


function SideBar() {

    const [activeButton,setActiveButon] = useState(1)
    const {mutate:Logout,isPending} = useLogout()

    const ButtonArray:sideBarButton[] = [
        {
            id:1,
            name:"Rooms",
            route:"/admin"
        },

        {
            id:2,
            name:"Add Menu",
            route:"/admin/addMenu"
        },

        
        {
            id:3,
            name:"Daily Menu",
            route:"/admin/add-Daily-Menu"
        },

        {
            id:4,
            name:"Complaints",
            route:"/admin/complaints"
        }

    ]

    // const logout=()=>{

    // }

  return (
    <div className="p-4 h-full  bg-gray-800 shadow-2xl z-10  ">
        <h1 className="text-white font-semibold  my-4 flex gap-2 items-center"><House/> Hostel Admin</h1>
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

export default SideBar