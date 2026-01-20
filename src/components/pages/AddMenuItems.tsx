import { useGetFoodItems } from "@/hooks/MenuItemsHooks/useGetFoodItems"
import FoodItemCard from "../Cards/FoodItemCard";
import AddFoodItemCard from "../Cards/AddFoodItemCard";
import { Button } from "@/components/ui/button"
import { useState } from "react";

function AddMenuItems() {

  const {data,isLoading,isError,error} = useGetFoodItems()
  const [active,setActive] = useState<boolean>(false)
  const [isUpdating,setIsUpdating] = useState<boolean>(false)
  const [updatingFoodId,setUpdatingFoodId] = useState<string | null>(null)
  return (
    <div className='text-black  h-full p-2'>
      <div>
        {
          active || isUpdating ?(
               <AddFoodItemCard setActive={setActive} setIsUpdating={setIsUpdating} 
               isUpdating={isUpdating} updatingFoodId={updatingFoodId} setUpdatingFoodId={setUpdatingFoodId}/> 

          ):
          (
            <Button onClick={()=>setActive(true)}>Add Food Item</Button>

          )
        }
      </div>
      <div >
        {
          isLoading ? <h1>Loading...</h1>
          :
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 m-4">
            {
              data?.foodMenu?.map((foodItem)=>(
                <FoodItemCard key={foodItem._id} foodItem={foodItem} setIsUpdating={setIsUpdating}
                setUpdatingFoodId={setUpdatingFoodId}
                />
              ))
            }
          </div>
        
        } 
      </div>
    </div>
  )
}

export default AddMenuItems