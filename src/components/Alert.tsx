import { AlertCircleIcon, CheckCircle2Icon } from "lucide-react"

import {
  Alert,
//   AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
export type AlertType = {
  typeOfAlert: "success" | "error";
  alertMessage: string;
};


export function AlertDemo({typeOfAlert,alertMessage}:AlertType) {
    const isSuccess = typeOfAlert === "success";

  return (
   <div className="grid w-full max-w-xl items-start gap-4">
      <Alert variant={isSuccess ? "default" : "destructive"}>
        {isSuccess ? <CheckCircle2Icon /> : <AlertCircleIcon />}
        <AlertTitle>{alertMessage}</AlertTitle>
      </Alert>
    </div>
  )
}
