import { restoreGrocery } from "@/apis/groceryAPIs"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"


export const useRestoreGrocery=()=>{

    const qc = useQueryClient()

    return useMutation({
        mutationFn:restoreGrocery,
        onSuccess:(data)=>{
            toast.success(data.message)
            qc.invalidateQueries({
                queryKey:["groceries"]
            })
        },
         onError:(error)=>{
                console.error("Couldn't restore Item",error.message);
                toast.error(error.message)
        }
    })
}