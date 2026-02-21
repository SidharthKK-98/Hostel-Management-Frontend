import { useGetAllUsers } from "@/hooks/ProfileHooks/useGetAllUsers"
import UserProfileCard from "../Cards/UserProfileCard";

function ShowUsers() {

    const {data:allUsers} =useGetAllUsers()

    console.log(allUsers);
    

  return (
    <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
            {
                allUsers?.data?.map((user)=>(
                    <UserProfileCard key={user._id} user={user}/>
                ))
            }
        </div>
    </div>
  )
}

export default ShowUsers