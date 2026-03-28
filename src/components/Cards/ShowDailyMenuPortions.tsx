
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { SelectedFoodResponse } from "@/Types/dailyMenuTypes";
interface Props {
  DailyMenuPortion: SelectedFoodResponse
}


function ShowDailyMenuPortions({DailyMenuPortion}:Props) {
    console.log(DailyMenuPortion?.data);

   
    
  return (
    <div>
    <Card  className="mx-auto w-full max-w-sm">
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
                <div key={item.id}>
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