import { AlertCircleIcon, CheckCircle2Icon } from "lucide-react"

import {
  Alert,
//   AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import type { AlertType } from "@/Types/alertTypes"



export function AlertDemo({typeOfAlert,AlertMessage}:AlertType) {

  return (
    <div className="grid w-full max-w-xl items-start gap-4">
    {
        (typeOfAlert === "success") ?( 
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>{AlertMessage}</AlertTitle>
        {/* <AlertDescription>
          This is an alert with icon, title and description.
        </AlertDescription> */}
      </Alert>
        )
        :
        (
             <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>{AlertMessage}</AlertTitle>
        {/* <AlertDescription>
          <p>Please verify your billing information and try again.</p>
          <ul className="list-inside list-disc text-sm">
            <li>Check your card details</li>
            <li>Ensure sufficient funds</li>
            <li>Verify billing address</li>
          </ul>
        </AlertDescription> */}
      </Alert>
        )
    }
      
      {/* <Alert>
        <PopcornIcon />
        <AlertTitle>
          This Alert has a title and an icon. No description.
        </AlertTitle>
      </Alert> */}
     
    </div>
  )
}
