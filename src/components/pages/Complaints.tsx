import { useGetAllUnresolvedComplaints } from "@/hooks/ComplaintHooks/useGetAllUnresolvedComplaints"
import ShowComplaint from "../Cards/ShowComplaint";



function Complaints() {
  const {data:UnresolvedComplaints,isLoading} = useGetAllUnresolvedComplaints()
  console.log("data",UnresolvedComplaints);
  
  return (
    <div className='text-black p-4'>
        <div className="grid grid-cols-3 gap-4">
            {
              UnresolvedComplaints?.data.map((complaint)=>(
                <ShowComplaint key={complaint._id} complaint={complaint}/>
              ))
            }
        </div>
    </div>
  )
}

export default Complaints