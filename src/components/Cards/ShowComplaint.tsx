
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import  {type ComplaintStatus,type GetComplaint } from "@/Types/complaintTypes"
import { Field, FieldLabel } from "@/components/ui/field"
import { Progress } from "@/components/ui/progress"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowRight } from "lucide-react";
import { useUpdateComplaintStatus } from "@/hooks/ComplaintHooks/useUpdateComplaintStatus"
import { toast } from "sonner"

interface ShowComplaintProps {
  complaint: GetComplaint
  fromUser:boolean
}





function ShowComplaint({complaint,fromUser}:ShowComplaintProps) {
    console.log(complaint);
    
const {mutate:updateStatus,isPending} = useUpdateComplaintStatus()

const complaintProgressMap: Record<ComplaintStatus, number> = {
  OPEN: 20,
  IN_PROGRESS: 55,
  RESOLVED: 100,
}

const progressColorMap: Record<ComplaintStatus, string> = {
  OPEN: "[&>div]:bg-red-500",
  IN_PROGRESS: "[&>div]:bg-yellow-500",
  RESOLVED: "[&>div]:bg-green-600",
};


const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const handleUpdateComplaint=(complaintId:string)=>{

    if(complaint.status == "OPEN" && fromUser){
        toast.error("You can't update a OPEN status complaint")
        return
    }

    updateStatus(complaintId)

}


  return (
    <div>
        <Card size="sm" className="mx-auto w-full max-w-sm">
            <CardHeader>
                <CardTitle>Complaint About {complaint.category}</CardTitle>
                <CardDescription className="flex gap-4">
                    {
                        !fromUser&&(
                                <div>
                                    <div>
                                        Name :  {
                                                complaint.createdBy.firstName
                                            }
                                    </div>
                                    <div>
                                        Room Number :  {
                                                complaint.createdBy.roomId.roomNumber
                                            }
                                    </div>
                                </div>
                        )
                    }
                  

                    
                </CardDescription>

                 <div>
                         Subject :     {
                            complaint.subject
                        }
                </div>
            </CardHeader>
            <CardContent>

                 
                <div>
                        <Field className="w-full max-w-sm">
                            <FieldLabel htmlFor="progress-upload">
                                <span>Progress</span>

                                <span className={`ml-auto font-medium ${
                                        complaint.status === "OPEN"
                                        ? "text-red-600"
                                        : complaint.status === "IN_PROGRESS"
                                        ? "text-orange-500"
                                        : "text-gray-500"
                                    }`}> 
                                    {
                                        complaint.status
                                    }
                                    
                        </span>
                            </FieldLabel>
                            <Progress   className={`h-2 ${progressColorMap[complaint.status as ComplaintStatus]}`}
                             value={complaintProgressMap[complaint.status as ComplaintStatus]} id="progress-upload" />
                        </Field>

                </div>
                   
              <div>
                
                        <Accordion
                            type="single"
                            collapsible
                            className="max-w-lg"
                            >
                            <AccordionItem value="shipping">
                                <AccordionTrigger>Time Line</AccordionTrigger>
                                <AccordionContent>
                                 {
                                    complaint.timeline.map((time)=>(
                                        <div key={time._id}>
                                              <div className="flex items-center gap-2">
                                                    <ArrowRight className="w-4 h-4" />{
                                                        time.message
                                                        
                                                    }
                                                </div>
                                                <div>
                                                    <div>
                                                        updated By : {
                                                        time.updatedBy?.firstName
                                                        }
                                                    </div>

                                                    <div>
                                                        time: {
                                                            formatDate(time.updatedAt)
                                                        }
                                                    </div>
                                                   
                                                </div>
                                        </div>
                                    ))
                                 }
                                </AccordionContent>
                            </AccordionItem>
                            
                            </Accordion>
              </div>
                   
            </CardContent>
            <CardFooter>
                <Button variant="outline" size="sm" className="w-full"
                        onClick={()=>handleUpdateComplaint(complaint._id)}>
                    Take  Action
                </Button>
            </CardFooter>
            </Card>

    </div>
  )
}

export default ShowComplaint