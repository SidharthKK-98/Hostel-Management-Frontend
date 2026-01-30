import { useGetDailyMenu } from "@/hooks/DailyMenuItemsHooks/useGetDailyMenu"
import SelectDailyMenuCard from "../Cards/SelectDailyMenuCard";

function UserMenuSelect() {

  const {data:dailyMenu} = useGetDailyMenu()
  console.log(dailyMenu);
  
  return (

    <div className="m-4 h-lvh overflow-y-scroll">
      {
        dailyMenu?.data.map((menu)=>(
          <SelectDailyMenuCard key={menu._id} menu={menu}/>
        ))
      }
    </div>
  )
}

export default UserMenuSelect