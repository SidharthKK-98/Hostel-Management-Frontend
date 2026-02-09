export interface ComplaintPayload {
    category:string
    subject:string 
}

export type ComplaintStatus = "OPEN" | "IN_PROGRESS" | "RESOLVED" | "CLOSED"

export type ComplaintCategory =
  | "MAINTENANCE"
  | "FOOD"
  | "ROOM"
  | "OTHER"

export interface ComplaintTimelineEntry {
  _id: string;
  status: ComplaintStatus;
  message: string;
  updatedBy: string;      
  updatedAt: string;   
}

export interface Complaint {
  _id: string;
  createdBy: string;     
  category: ComplaintCategory;
  subject: string;
  status: ComplaintStatus;
  timeline: ComplaintTimelineEntry[];
  createdAt: string;      
  updatedAt: string;      
  __v: number;
}

export interface PostComplaintResponse {

    message:string
    data:Complaint

}