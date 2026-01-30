import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Minus, Utensils } from "lucide-react";
import type {  DailyMenuCardProps } from "@/Types/dailyMenuTypes"

function SelectDailyMenuCard({menu}:DailyMenuCardProps) {
    console.log(menu);

    const today = new Date(menu.date)
         const day = String(today.getDate()).padStart(2, "0")
         const month = String(today.getMonth() + 1).padStart(2, "0")
         const year = today.getFullYear()

        const Today = `${day}-${month}-${year}`
    
  return (
    <div className="h-80 w-fit shadow-2xl text-black overflow-scroll p-4">
        <h3 className="text-lg font-semibold capitalize mb-4 flex items-center gap-2">
        <Utensils className="w-4 h-4 text-primary" /> {Today}
        </h3>

    <h1 className="font-semibold m-4 ">Morning</h1>

    <div className="flex gap-4">
        {
            menu.morning.map((item)=>(
            <Card key={item._id} className="overflow-hidden w-auto ">
            <CardContent className="p-4 ">

                        <div>
                                <div className="relative h-30 w-full p-2 ">
                                <img
                                src={item.image} 
                                alt="image"
                                className="h-28 w-28 object-fill rounded"
                                />
                                <div className="absolute top-3 right-3 rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-orange-700 shadow-sm">
                                Rs. {item.price}
                                </div>
                    </div>
                    <div  className="font-medium text-slate-900 text-center ">
                        {item.name}
                    </div>
              
                </div>
                
              <div className="flex items-center gap-3 bg-slate-50 p-1 rounded-lg border">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8"
                //   onClick={() => handleUpdate(menu._id, -1)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                
                <span className="w-8 text-center font-bold">
                  {/* {quantities[menu._id] || 0} */}1
                </span>
                
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8"
                //   onClick={() => handleUpdate(item.id, 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
            ))
        }
         
    </div>


     <h1 className="font-semibold m-4 ">Noon</h1>

    <div className="flex gap-4">
        {
            menu.noon.map((item)=>(
            <Card key={item._id} className="overflow-hidden">
            <CardContent className="p-4 ">

                        <div>
                                <div className="relative h-30 w-full p-2 ">
                                <img
                                src={item.image} 
                                alt="image"
                                className="h-28 w-28 object-cover rounded"
                                />
                                <div className="absolute top-3 right-3 rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-orange-700 shadow-sm">
                                Rs. {item.price}
                                </div>
                    </div>
                    <div>
                        <p className="font-medium text-slate-900 text-center">{item.name}</p>
                    </div>
              
            </div>
                
              <div className="flex items-center gap-3 bg-slate-50 p-1 rounded-lg border">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8"
                //   onClick={() => handleUpdate(menu._id, -1)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                
                <span className="w-8 text-center font-bold">
                  {/* {quantities[menu._id] || 0} */}1
                </span>
                
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8"
                //   onClick={() => handleUpdate(item.id, 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
            ))
        }
         
    </div>


     <h1 className="font-semibold m-4 ">Night</h1>

    <div className="flex gap-4">
        {
            menu.night.map((item)=>(
            <Card key={item._id} className="overflow-hidden">
            <CardContent className="p-4 ">

                        <div>
                                <div className="relative h-30 w-full p-2 ">
                                <img
                                src={item.image} 
                                alt="image"
                                className="h-28 w-28 object-cover rounded"
                                />
                                <div className="absolute top-3 right-3 rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-orange-700 shadow-sm">
                                Rs. {item.price}
                                </div>
                    </div>
                    <div>
                        <p className="font-medium text-slate-900 text-center">{item.name}</p>
                    </div>
              
            </div>
                
              <div className="flex items-center gap-3 bg-slate-50 p-1 rounded-lg border">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8"
                //   onClick={() => handleUpdate(menu._id, -1)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                
                <span className="w-8 text-center font-bold">
                  {/* {quantities[menu._id] || 0} */}1
                </span>
                
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8"
                //   onClick={() => handleUpdate(item.id, 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
            ))
        }
         
    </div>
       
    </div>
  )
}

export default SelectDailyMenuCard