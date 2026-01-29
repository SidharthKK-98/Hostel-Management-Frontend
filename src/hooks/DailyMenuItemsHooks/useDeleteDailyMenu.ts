import { deleteDailyMenu } from "@/apis/DailyMenuAPIs"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

export const useDeleteDailyMenu=()=>{

    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:deleteDailyMenu,
        onSuccess:(response)=>{
            toast.success(response.message)
            queryClient.invalidateQueries({ queryKey: ["DailyMenu"] })

        },
        onError:(response)=>{
            toast.error(response.message)
        }
    })

}