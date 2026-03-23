
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "../ui/input"
import { Select,SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { useState } from "react"
import  { useAddGrocery } from "@/hooks/groceryHooks/useAddGrocery"
import { toast } from "sonner"




function AddGroceryCard() {
      const [name, setName] = useState("")
      const [qty, setQty] = useState("")
      const [unit, setUnit] = useState("")

      const{mutate:addGrocery,isPending} = useAddGrocery()

    //   console.log(name,qty,unit);

    const addItem = ()=>{

        if (!name || !qty || !unit) {
            toast.error("Please fill all fields")
            return
        }

        const payload = {name:name.trim(),addingStock:Number(qty),unit}

        addGrocery(payload,{
            onSuccess:()=>{
                setName("")
                setQty("")
                setUnit("")
            }
        })


    }
      

  return (
    <div>
        <Card  className="mx-auto w-full max-w-lg">
            <CardHeader>
                <CardTitle>Add Item</CardTitle>
                <CardDescription>
                    Add new grocery item here
                </CardDescription>
            </CardHeader>
            <CardContent>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Item Name</label>
                        <Input placeholder="Enter grocery name"
                            value={name}
                            onChange={e=>setName(e.target.value)}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4 my-2">

                                <div className="space-y-2">
                                    <label className="text-sm font-medium ">Adding Stock</label>
                                    <Input type="number" placeholder="Enter quantity"
                                        value={qty}
                                        onChange={e=>setQty(e.target.value)}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Unit</label>
                                    
                                    <Select value={unit} onValueChange={setUnit}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select unit" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="kg">kg</SelectItem>
                                            <SelectItem value="g">g</SelectItem>
                                            <SelectItem value="liter">liter</SelectItem>
                                            <SelectItem value="ml">ml</SelectItem>
                                            <SelectItem value="packet">Packet</SelectItem>
                                            <SelectItem value="pcs">pcs</SelectItem>

                                        </SelectContent>
                                    </Select>
                                </div>

                     </div>
            </CardContent>
            <CardFooter className="flex justify-center">
                <Button  size="sm" 
                    onClick={addItem}
                    className="w-1/2 bg-green-500 cursor-pointer hover:bg-green-600" >
                    {isPending ? "Adding..." : "Add Grocery Item"} 
                </Button>
            </CardFooter>
            </Card>
    </div>
  )
}

export default AddGroceryCard