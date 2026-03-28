import { getVerifyPayment } from "@/apis/PaymentAPIs";
import { useQuery } from "@tanstack/react-query";

type UseVerifyPaymentOptions = {
  enabled?: boolean;
}

export const useVerifyPayment = (
  year: number | null,
  month: number | null,
  options?: UseVerifyPaymentOptions
) => {
  return useQuery({
    queryKey: ["verify-payment", year, month],
    
    queryFn: () => {
      if (!year || !month) throw new Error("Missing params")
      return getVerifyPayment(year, month);
    },

    enabled: !!year && !!month && (options?.enabled ?? true),

    staleTime: 1000 * 60 * 5
  })
}