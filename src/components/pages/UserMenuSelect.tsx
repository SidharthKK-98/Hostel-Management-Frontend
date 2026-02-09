import { useGetDailyMenu } from "@/hooks/DailyMenuItemsHooks/useGetDailyMenu"
import SelectDailyMenuCard from "../Cards/SelectDailyMenuCard";

function UserMenuSelect() {

  const {data:dailyMenu} = useGetDailyMenu()
  console.log(dailyMenu);
  const length = dailyMenu?.data?.length
  
  return (

    <div >
      {
        length===0 ?(
          <h1 className="text-center text-2xl font-semibold">No Menu created</h1>
        ):
        (
          <div className="m-4 h-lvh overflow-y-scroll">

         {
        dailyMenu?.data.map((menu)=>(
          <SelectDailyMenuCard key={menu._id} menu={menu}/>
        ))
        }

         </div>
      )
      }
    </div>
  )
}

export default UserMenuSelect