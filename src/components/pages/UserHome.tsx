import { useGetProfile } from "@/hooks/ProfileHooks/useGetProfile"
import ProfileCard from "../Cards/ProfileCard"
import { useState } from "react"
import EditProfileCard from "../Cards/EditProfileCard"
import RoomCard from "../Cards/RoomCard"

function UserHome() {

      const [isEdit,setIsEdit] = useState<boolean>(false)

      const {data:viewProfile} =useGetProfile()
  
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

        <div className="m-4">
                <RoomCard viewProfile={viewProfile}/>
        </div>

    </div>
   
   
  )
}

export default UserHome