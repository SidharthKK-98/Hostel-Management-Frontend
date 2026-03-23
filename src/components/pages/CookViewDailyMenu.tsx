import { useGetDailyMenu } from "@/hooks/DailyMenuItemsHooks/useGetDailyMenu"
import DailyMenuCard from "../Cards/DailyMenuCard"

function CookViewDailyMenu() {

        const {data:DailyMenu} = useGetDailyMenu()
    
  return (
    <div className="m-4 text-center">
        <h1 className="font-semibold text-2xl my-2">View Menu</h1>
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {
         DailyMenu?.data?(
          DailyMenu?.data?.map((menu)=>(
           
                <DailyMenuCard key={menu._id} menu={menu}/>
              
          ))
        ):(
            <div className="text-center flex items-center">
                                <h1 className="text-2xl font-semibold text-red-600">No Menu Published</h1>

            </div>
        )
        }
     </div>
    </div>
  )
}

export default CookViewDailyMenu