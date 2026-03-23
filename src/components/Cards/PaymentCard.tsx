

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useGetTotalPrice } from "@/hooks/MenuSelectionHooks/useGetTotalPrice"
import { useCreatePayment } from "@/hooks/PaymentHooks/useCreatePayment"
import type { RazorpayPaymentResponse } from "@/Types/paymentTypes"
import { useState } from "react"
import { toast } from "sonner"


function PaymentCard() {
 const [month, setMonth] = useState<string>("")
  const [year, setYear] = useState<string>("")
  const [showPay, setShowPay] = useState(false)

    const {mutate:fetchPrice,data} = useGetTotalPrice()
    const {mutateAsync:payment} = useCreatePayment()
  
  console.log(month,year);
  
     const months = [
    { label: "January", value: "1" },
    { label: "February", value: "2" },
    { label: "March", value: "3" },
    { label: "April", value: "4" },
    { label: "May", value: "5" },
    { label: "June", value: "6" },
    { label: "July", value: "7" },
    { label: "August", value: "8" },
    { label: "September", value: "9" },
    { label: "October", value: "10" },
    { label: "November", value: "11" },
    { label: "December", value: "12" },
  ]

  const years = ["2024", "2025", "2026", "2027"]

  const getAmount=()=>{

    if(!month || !year){
        return toast.error("select required fields")
    }

    const payload={month:Number(month),year:Number(year)}
    fetchPrice(payload,{
        onSuccess:()=>{
            setShowPay(true)
        }
    })
  }

  const makePayment=async()=>{

    try{
         if (!data?.data) {
            console.error("Amount is missing");
            return;
        }
            
    const payload={amount:data.data,month:Number(month),year:Number(year)}
    const order = await payment(payload)
     const { key, amount, currency, orderId, notes } = order;

      const options = {
      key,
      amount,
      currency,
      name: "Hostel-Management",
      description: "Payment of rent",
      order_id: orderId,
      prefill: {
        name: notes.firstName + " " + notes.lastName,
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
      handler: async (response: RazorpayPaymentResponse) => {
        console.log("Payment success:", response)
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();

    }
    catch(err){
        console.log(err);
        
    }


  }


  return (
    <div>

        <Card  className="mx-auto w-full max-w-sm">
            <CardHeader>
                <CardTitle>Payment</CardTitle>
                <CardDescription>
                </CardDescription>
            </CardHeader>
            <CardContent className="flex gap-2">
                    <Select onValueChange={(value)=>{setMonth(value); setShowPay(false)}}>
                        <SelectTrigger>
                        <SelectValue placeholder="Select Month" />
                        </SelectTrigger>
                        <SelectContent>
                        {months.map((m) => (
                            <SelectItem key={m.value} value={m.value}>
                            {m.label}
                            </SelectItem>
                        ))}
                        </SelectContent>
                    </Select>

                    <Select onValueChange={(value)=>{setYear(value);setShowPay(false)}}>
                        <SelectTrigger>
                        <SelectValue placeholder="Select Year" />
                        </SelectTrigger>
                        <SelectContent>
                        {years.map((y) => (
                            <SelectItem key={y} value={y}>
                            {y}
                            </SelectItem>
                        ))}
                        </SelectContent>
                    </Select>
            </CardContent>
            <CardFooter className="flex flex-col items-center gap-3 ">
                {
                    !showPay&&(
                        <Button onClick={getAmount}>Get Amount</Button>

                    )
                }

                {
                    data && showPay &&(
                        `Total Amount = ${data.data}`
                    )
                }
                {
                        showPay&&(
                             <Button variant="outline" size="sm" className="w-full"
                                onClick={makePayment}
                             >
                                 Pay
                            </Button>
                        )
                }
               
            </CardFooter>
        </Card>
    </div>
  )
}

export default PaymentCard