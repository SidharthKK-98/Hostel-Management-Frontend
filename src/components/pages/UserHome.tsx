import { useGetProfile } from "@/hooks/ProfileHooks/useGetProfile"
import ProfileCard from "../Cards/ProfileCard"
import { useState } from "react"
import EditProfileCard from "../Cards/EditProfileCard"
import RoomCard from "../Cards/RoomCard"
import PaymentCard from "../Cards/PaymentCard"
import { Button } from "../ui/button"

function UserHome() {

      const [isEdit,setIsEdit] = useState<boolean>(false)

      const {data:viewProfile,isLoading} =useGetProfile()
      if (isLoading || !viewProfile) return <div>LOading....</div>
      console.log(viewProfile);
      
  
  return (
    <div className="w-full">

      <h1 className="text-center font-semibold text-2xl p-2">User Profile</h1>
          <div className="m-2 my-4 lg:grid grid-cols-2 ">
            <div>
              <ProfileCard viewProfile={viewProfile} setIsEdit={setIsEdit}/>
            </div>

            <div>
              {
                isEdit && (
                  <EditProfileCard setIsEdit={setIsEdit}/>
                )
              }
            </div>
        </div>

        <div className="m-4 lg:flex gap-4">
                <PaymentCard/>
                <RoomCard viewProfile={viewProfile}/>
        </div>

    </div>
   
   
  )
}

export default UserHome