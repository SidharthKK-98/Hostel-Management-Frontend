import { useMenuSelectionHistory } from "@/hooks/MenuSelectionHooks/useMenuSelectionHistory"
import MenuHistoryCard from "../Cards/MenuHistoryCard";
import DateAndYearCard from "../Cards/DateAndYearCard";

function MenuOverview() {

    const {data:menuSelsction} = useMenuSelectionHistory()
    console.log(menuSelsction);


    
  return (
    <div>
          <h1 className="text-center m-4 font-bold text-3xl">Your Menu History</h1>

          <div>
            <DateAndYearCard/>
          </div>

      {
        menuSelsction?.data.map(items=>(
          <MenuHistoryCard key={items._id} items={items}/>
        ))
      }
    </div>
  )
}

export default MenuOverview