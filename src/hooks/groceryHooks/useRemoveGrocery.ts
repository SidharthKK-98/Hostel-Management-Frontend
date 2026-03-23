import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import { removeGrocery } from "@/apis/groceryAPIs"

export const useRemoveGrocery = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn:removeGrocery,

        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["groceries"] })

            toast.success(data.message)
        },

        onError: (error) => {
            toast.error(error.message|| "Remove failed")
        }
    })
}