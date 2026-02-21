
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { SelectedFoodResponse } from "@/Types/dailyMenuTypes";
// import type { DailyMenuDataResponse } from "@/Types/selectDailyMenuTypes"



function ShowDailyMenuPortions({DailyMenuPortion}:SelectedFoodResponse) {
    console.log(DailyMenuPortion?.data);

   
    
  return (
    <div>
    <Card size="sm" className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle>Tomorrow's Menu Selcted</CardTitle>
       
      </CardHeader>
      <CardContent>

        
        {

              (!DailyMenuPortion?.data?.length)? (
                 <p>No items found</p>
              )

            :(
                     DailyMenuPortion?.data?.map((item)=>(
                <div key={item._id}>
                    {item.name} - {item.totalPortion}
                </div>
            ))
        )
           
        }
      </CardContent>
      <CardFooter>
       
      </CardFooter>
    </Card>
    </div>
  )
}

export default ShowDailyMenuPortions