import { useGetComplaintHistory } from "@/hooks/ComplaintHooks/useGetComplaintHistory"
import PostComplaintCard from "../Cards/PostComplaintCard"
import ShowComplaint from "../Cards/ShowComplaint";

function UserComplaint() {

  const {data:complaintHistory} = useGetComplaintHistory()
  console.log("complaintHistory",complaintHistory);
  const fromUser = true
  

  return (
    <div className="p-4">
        <div className="m-10 ">
            <PostComplaintCard/>
        </div>
        <h1 className="text-center font-semibold my-2">Complaint History</h1>
        <div className="grid grid-cols-3 gap-4">
          {
            complaintHistory?.data?.map((complaint)=>(
              <ShowComplaint key={complaint._id} complaint={complaint} fromUser={fromUser}/>
            )) 
          }
        </div>

    
    </div>
    
  )
}

export default UserComplaint