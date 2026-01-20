import { removeFoodItem } from "@/apis/MenuAPIs"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

export const useRemoveFoodItems=()=>{

   const queryClient = useQueryClient()

   return useMutation({
    mutationFn:removeFoodItem,
    onSuccess:(response)=>{
        toast.success(response.message)

         queryClient.invalidateQueries({
                queryKey:["FoodMenu"]
            })
    },
     onError:(response)=>{
            toast.error(response.message)
        }
   })

}