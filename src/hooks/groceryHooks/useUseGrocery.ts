import { useGrocery } from "@/apis/groceryAPIs"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"


export const useUseGrocery = ()=>{

    const qc = useQueryClient()

    return useMutation({
        mutationFn:useGrocery,
        onSuccess:(data)=>{
            toast.success(data.message)
            qc.invalidateQueries({
                queryKey:["groceries"]
            })
        },   
        onError:(error)=>{
                console.error("Couldn't take Item",error.message);
                toast.error(error.message)
        }
    })

} 