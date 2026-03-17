import  { useGetGrocery } from "@/hooks/groceryHooks/useGetGrocery"
import AddGroceryCard from "../Cards/AddGroceryCard"
import ShowGroceryCard from "../Cards/ShowGroceryCard"

function AddGroceries() {

    const{data:groceryData,isLoading} = useGetGrocery()

  return (
    <div>
        <h1 className="font-semibold text-2xl text-center">Groceries</h1>

        <div className="m-4 flex "> 
            <AddGroceryCard/>
        </div>

        <div className="grid  lg:grid-cols-3 gap-4 m-4">
            {
                groceryData?.map((grocery)=>(
                    <ShowGroceryCard  key={grocery._id} grocery={grocery}/>
                ))
            }
        </div>
    </div>
  )
}

export default AddGroceries