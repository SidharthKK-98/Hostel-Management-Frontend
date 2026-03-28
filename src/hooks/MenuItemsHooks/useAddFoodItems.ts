import { addMenu } from "@/apis/MenuAPIs"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

export const useAddFoodItems=()=>{

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn:addMenu,
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