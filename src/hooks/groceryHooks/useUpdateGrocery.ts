
import { updateGrocery } from "@/apis/groceryAPIs"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

export const useUpdateGrocery = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn:updateGrocery,

        onSuccess:(data) => {
            queryClient.invalidateQueries({ queryKey: ["groceries"] })

            toast.success(data.message)
        },

        onError: (error) => {
            toast.error(error.message || "Update failed")
        }
    })
}