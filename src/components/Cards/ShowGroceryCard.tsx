import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {type Grocery } from "@/Types/grocerytypes";
import { Input } from "../ui/input";
import  { useState } from "react";
import { useRestoreGrocery } from "@/hooks/groceryHooks/useRestoreGrocery";
import { toast } from "sonner";
type Props = {
  grocery: Grocery
}

function ShowGroceryCard({grocery}:Props) {

        const[qty,setQty] = useState("")
        const {name,unit,lastAddedStock,currentStock,predictedOutDate} = grocery
        const {mutate:restoreItem} = useRestoreGrocery()

        const predictedDate = predictedOutDate ? new Date(predictedOutDate).toLocaleDateString("en-GB"):null

        const restoreGrocery = ()=>{
            if(!qty){
                toast.error("Please fill restoring quantity")
                return
            }
            const payload = {name:name,unit:unit,restoringAmount:Number(qty)}

            restoreItem(payload,{
                onSuccess:()=>{
                    setQty("")
                }
            })
        }


  return (

    <div>

        <Card  className="mx-auto w-full max-w-sm">
            <CardHeader>
            <CardTitle>{name}</CardTitle>
            
            </CardHeader>
            <CardContent>
                <div>
                Current Stock : {currentStock} {unit}
                </div>
                <div>
                    Last Added Stock : {lastAddedStock} {unit}
                </div>
                <div>
                    {
                        (predictedOutDate!=null)&&(
                            <p> Estimate Date : {predictedDate}</p>

                        )
                       
                    }
                </div>
            </CardContent>
            <CardFooter className="block ">

                 <div className="space-y-2 my-2">
                                    <label className="text-sm font-medium">Restoring Stock</label>
                                    <Input type="number" placeholder="Enter quantity"
                                        value={qty}
                                        onChange={e=>setQty(e.target.value)}
                                    />
                                </div>
            <Button variant="outline" size="sm" className="w-full"
                onClick={restoreGrocery}
            >
                Restore
            </Button>
            </CardFooter>
        </Card>
    </div>
  )
}

export default ShowGroceryCard