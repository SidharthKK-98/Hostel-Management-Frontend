import { postSelectedDailyMenu } from "@/apis/UserSelectMenuAPIs"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

export const useDailyMenuSelection=()=>{
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn:postSelectedDailyMenu,
        onSuccess:(response)=>{
            toast.success(response.message)
            queryClient.invalidateQueries({queryKey:["selectedDailyMenu"]})
        },
         onError:(response)=>{
            toast.error(response.message)
        }
    })
}