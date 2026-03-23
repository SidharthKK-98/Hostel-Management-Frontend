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

function CookSideBar() {

    const [activeButton,setActiveButon] = useState(1)
    const {mutate:Logout,isPending} = useLogout()

    const ButtonArray:sideBarButton[] = [
        {
             id:1,
            name:"Home",
            route:"/cook"
        },
         {
             id:2,
            name:"View Daily Menu",
            route:"/cook/viewDailyMenu"
        }
    ]

  return (
 <div className="p-4 h-full  bg-gray-800 shadow-2xl z-10  ">
        <h1 className="text-white font-semibold  my-4 flex gap-2 items-center"><House/> Cook</h1>
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

export default CookSideBar