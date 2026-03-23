import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {type Grocery } from "@/Types/groceryTypes";
import { Input } from "../ui/input";
import  { useState } from "react";
import { useRestoreGrocery } from "@/hooks/groceryHooks/useRestoreGrocery";
import { toast } from "sonner";
import { useGetProfile } from "@/hooks/ProfileHooks/useGetProfile";
import { useUseGrocery } from "@/hooks/groceryHooks/useUseGrocery";
import { useRemoveGrocery } from "@/hooks/groceryHooks/useRemoveGrocery";
type Props = {
  grocery: Grocery
  onUpdate: (grocery: Grocery) => void

}

function ShowGroceryCard({grocery,onUpdate }:Props) {

        const[qty,setQty] = useState("")
        const[useQty,setUseqty] = useState("")

        const {name,unit,lastAddedStock,currentStock,predictedOutDate} = grocery
        const {mutate:restoreItem} = useRestoreGrocery()
        const {mutate:consumeGrocery} = useUseGrocery()
        const {mutate:removeGrocery} = useRemoveGrocery()
        const {data:profile} =useGetProfile()

            const today = new Date()
            today.setHours(0, 0, 0, 0)
            const todayTime = today.getTime()

        const diff = predictedOutDate? (() => {
                        const date = new Date(predictedOutDate)
                        date.setHours(0, 0, 0, 0) 
                        return date.getTime() - todayTime
                        })()
                    : null

        const daysLeft = diff !== null? Math.ceil(diff / (1000 * 60 * 60 * 24)) : null
            
        
        

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

        const consumeItem=()=>{
              if(!useQty){
                toast.error("Please fill consuming quantity")
                return
            }

            const payload = {groceryId:grocery._id,unit:unit,qty:Number(useQty)}

            consumeGrocery(payload,{
                onSuccess:()=>{
                    setUseqty("")
                }
            })

        }

        const removeItem =()=>{
            if (!grocery?._id) return

            const payload = {_id:grocery?._id}

            removeGrocery(payload)

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
            <CardFooter className="block h-45 overflow-y-auto ">
                {
                    profile?.role=="admin"?(
                        <div>
                                <div>

                                    {daysLeft !== null && daysLeft < 0 && (
                                        <h2 className="text-red-700 font-semibold">Expired</h2>
                                    )}

                                    {daysLeft !== null && daysLeft === 0 && (
                                        <h2 className="text-red-600 font-semibold">Finishes Today</h2>
                                    )}

                                    {daysLeft !== null && daysLeft === 1 && (
                                        <h2 className="text-orange-500 font-semibold">Finishes Tomorrow</h2>
                                    )}

                                    {daysLeft !== null && daysLeft > 1 && daysLeft <= 2 && (
                                        <h2 className="text-yellow-500 font-semibold">Low Stock Soon</h2>
                                    )}

                                </div>

                                <div className="space-y-2 my-2 text-center">

                                    <label className=" font-medium">Restore Stock</label>
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

                                <div className="flex justify-center gap-4">
                                        <Button variant="outline" size="sm" className="w-auto my-2" onClick={()=>{ onUpdate(grocery)}}>
                                            Update
                                        </Button>

                                        <Button variant="outline" size="sm" className="w-auto my-2 bg-red-500"
                                            onClick={removeItem}
                                        >
                                            Remove
                                        </Button>
                                </div>
                        </div>
                                
                    ) :

                    (
                        <div>
                                <div className="space-y-2 my-2">
                                    <label className="text-sm font-medium">Use Item</label>
                                    <Input type="number" placeholder="Enter quantity"
                                        value={useQty}
                                        onChange={e=>setUseqty(e.target.value)}
                                    />
                                </div>
                                <Button variant="outline" size="sm" className="w-full"
                                    onClick={consumeItem}
                                >
                                    Consume
                                </Button>
                        </div>
                    )
                }
                 
            </CardFooter>
        </Card>
    </div>
  )
}

export default ShowGroceryCard