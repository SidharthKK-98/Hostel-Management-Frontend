import { createDailyMenu } from "@/apis/DailyMenuAPIs"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"


export const useAddDailyMenu =()=>{

   const queryClient = useQueryClient()

    return useMutation({

        mutationFn:createDailyMenu,
        onSuccess:(response)=>{
            toast.success(response.message)
            console.log(response.data);
            
            queryClient.invalidateQueries({ queryKey: ["DailyMenu"] })
        }

    })
}