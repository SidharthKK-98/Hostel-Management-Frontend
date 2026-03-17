import { addGrocery } from "@/apis/groceryAPIs"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"


export const useAddGrocery = ()=>{

    const qc = useQueryClient()

    return useMutation({
        mutationFn:addGrocery,
        onSuccess:(data)=>{
            toast.success(data.message)
            qc.invalidateQueries({
                queryKey:["groceries"]
            })
        },
        onError:(error)=>{
                console.error("Couldn't add Item",error.message);
                toast.error(error.message)
        }
    })

}