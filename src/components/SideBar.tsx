import { Button } from "@/components/ui/button"
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

  return (
    <div className="p-4 min-h-screen bg-white shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] z-10 relative ">
        <h1 className="text-black font-semibold  my-4 flex gap-2 items-center"><House/> Hostel Admin</h1>
        {
            ButtonArray.map((item)=>(
                <NavLink  key={item.id} to={item.route}>
                    
                    <Button className={`w-full my-1 py-6  border-black ${activeButton===item.id ? "bg-blue-400 text-white hover:bg-blue-400" : "text-gray-500 bg-white"} `}  onClick={()=>setActiveButon(item.id)} >{item.name}</Button>

                </NavLink>

            ))
        }

        <Button variant={"link"} className="text-black w-full mx-auto">Logout</Button>

    </div>
  )
}

export default SideBar