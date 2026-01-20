import { updateFoodItem } from "@/apis/MenuAPIs"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"


export const useUpdateFoodItems=()=>{

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn:updateFoodItem,
        onSuccess:(response)=>{
            toast.success(response.message)
            
            queryClient.invalidateQueries({
                queryKey:["FoodMenu"]
            })
        }
    })

}