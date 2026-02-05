import { getTotalPrice } from "@/apis/UserSelectMenuAPIs";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useGetTotalPrice=()=>{

  return useMutation({
    mutationFn: getTotalPrice,
    onSuccess:(response)=>{
        toast.success(response.message)
    }
  })

}