
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type {  MenuHistoryCardProps } from "@/Types/selectDailyMenuTypes"



function MenuHistoryCard({items}:MenuHistoryCardProps) {


    const today = new Date(items.date)
         const day = String(today.getDate()).padStart(2, "0")
         const month = String(today.getMonth() + 1).padStart(2, "0")
         const year = today.getFullYear()

        const Today = `${day}-${month}-${year}`

  return (
    <div>


    <Card size="sm" className=" max-w-md mx-auto rounded-2xl shadow-md my-4">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">{Today}</CardTitle>
       
      </CardHeader>

      <CardContent className="grid grid-cols h-32 flex flex-col items-center overflow-y-scroll gap-4 p-2">

        <div className="bg-gray-300 p-2 rounded shadow-2xl w-1/2">
            <h1 className="font-semibold">Morning</h1>
                {
            items?.morning?.map(menu=>(
              <div key={menu._id} className="flex gap-4 m-2">
                <div >
                    {menu.foodId.name} 

                </div>

                <div>
                    {
                        menu.portion
                    }
                </div>

                 <div >
                    RS:{menu.foodId.price} 

                </div>
                
              </div>
              
            ))

            
        
        }
        </div>


        <div  className="bg-gray-300 p-2 rounded shadow-2xl w-1/2">
            <h1 className="font-semibold">Noon</h1>

            {
            items?.noon?.map(menu=>(
              <div key={menu._id} className="flex gap-4  m-2">
                <div >
                    {menu?.foodId?.name} 

                </div>

                <div>
                    {
                        menu?.portion
                    }
                </div>

                 <div >
                   RS: {menu?.foodId?.price} 

                </div>
                
              </div>
              
            ))

            
        
        }
        </div>

        <div  className="bg-gray-300 p-2 rounded shadow-2xl w-1/2">
            <h1 className="font-semibold">Night</h1>

            {
            items?.night?.map(menu=>(
              <div key={menu._id} className="flex gap-4  m-2">
                <div >
                    {menu?.foodId?.name} 

                </div>

                <div>
                    {
                        menu?.portion
                    }
                </div>

                 <div >
                   RS: {menu?.foodId?.price} 

                </div>
                
              </div>
              
            ))

            
        
        }
        </div>
        
        <div >
            <h1 className="font-semibold">Total Price :</h1>
        {
            items?.totalPrice
        }
        </div>

      </CardContent>
      <CardFooter >

       
        <Button variant="outline" size="sm" className="w-full">
          Action
        </Button>
      </CardFooter>
    </Card>

    </div>
  )
}

export default MenuHistoryCard