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
    <div className='text-black  h-full p-2  w-full  sm:px-4 lg:px-6 '>
      <div className="">
        {
          active || isUpdating ?(
               <AddFoodItemCard setActive={setActive} setIsUpdating={setIsUpdating} 
               isUpdating={isUpdating} updatingFoodId={updatingFoodId} setUpdatingFoodId={setUpdatingFoodId}/> 

          ):
          (
            <Button  onClick={()=>setActive(true)}>Add Food Item</Button>

          )
        }
      </div>
      <div  >
        {
          isLoading ? <h1>Loading...</h1>
          :
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-5 w-full p-4">
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