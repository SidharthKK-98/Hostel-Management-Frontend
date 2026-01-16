import { useHostelConfig } from "@/hooks/useHostelConfig"
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { X } from 'lucide-react';
import { useState } from "react";
import { useUnassignedUsers } from "@/hooks/useUnassignedUsers";
import { useAddUserToRoom } from "@/hooks/useAddUserToRoom";
import { useDeleteUserFromRoom } from "@/hooks/useDeleteUserFromRoom";


function Room() {

    const {data, isLoading, isError, error}=useHostelConfig()
    const {data:UnassignedUser,isError:isUnassignedError,error:unassignedError}=useUnassignedUsers()
    const {mutate:addUserToRoom,isLoading:isAddingUser,isError:addUserError} = useAddUserToRoom()
    const{mutate:removeUserFromRoom,isLoading:isRemovingUser,isError:removeUserError} = useDeleteUserFromRoom()

    const[selectedRoomId,setSelectedRoomId]=useState<string | null>(null)
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const selectedRoom = data?.rooms.find(room => room._id === selectedRoomId)

    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>Error:{error.message}</div>
    

    const addUser =(roomId:string,userId:string)=>{
        if(!selectedRoom) return

        addUserToRoom({
            roomId,
            userId
        })
    }

    const removeUsers =(roomId:string,userId:string)=>{
        if(!selectedRoom) return

        removeUserFromRoom({
            roomId,
            userId
        })
    }
  return (
    <div className='p-4 '>

        <div>

        </div>


        <div>
            <h1 className="text-black text-2xl m-4">Rooms</h1>
            <div className="grid grid-cols-5 gap-2 ">
                {
                    data?.rooms.map((room)=>{
                        const isVacant = room.occupants.length === 0
                        const statusColor = isVacant ? "bg-gray-300 hover:bg-gray-300" : room.occupants[0]?.gender === "male" ? "bg-blue-500 text-white hover:bg-blue-500" : "bg-pink-500 text-white hover-bg-pink-500" 
                        return(
                            <Button key={room._id} className={`${statusColor} hover:opacity-80 p-8 shadow-md`} onClick={()=>{setSelectedRoomId(room._id) ;setIsAddModalOpen(false)}}>
                                {room.roomNumber}
                            </Button>

                        )
                })
                }
            </div>
        </div>
        
        {/* Room Details Modal */}

        {
            selectedRoom && (
                <Card className="w-3/4  bg-white ">
                    <CardHeader className="flex justify-between text-black items-center">
                            <CardTitle className="text-black">Details of Room : {selectedRoom?.roomNumber}</CardTitle>
                             <Button className="font-semibold " variant={"ghost"} onClick={()=>setSelectedRoomId(null)}><X/></Button> 
                    </CardHeader>
                    <CardContent >
                            {
                            selectedRoom && selectedRoom.occupants.length > 0 ?(
                                    selectedRoom.occupants.map((details,idx)=>(
                                            <div key={idx} className="flex items-center justify-between m-2">
                                                        <div className="flex items-center gap-4">
                                                <div>
                                                    <img src={details.photoUrl} className="w-15 h-15 rounded-full object-cover border" alt="profile img" />
                                                </div>
                                                <div>
                                                    <h2 className="text-black">{details.firstName}</h2>
                                                </div>
                                            </div>
                                            <div>
                                                <Button variant={"destructive"}
                                                onClick={()=>{removeUsers(selectedRoom._id,details._id);setIsAddModalOpen(false)}}
                                                >
                                                    Remove</Button>
                                            </div>
                                        </div>
                                ))
                            )
                            :
                            (
                                <p className="text-sm text-gray-500 italic">This room is currently empty.</p>
                            )
                            
                            }
                            

                    </CardContent>
                    <CardFooter>
                        {
                            isAddModalOpen ?(
                               UnassignedUser.length ?( 
                               <div className="border w- h-auto shadow-2xl p-4 rounded">
                                    <div className="flex justify-end">
                                        <Button className="font-semibold text-black  " variant={"ghost"} onClick={()=>setIsAddModalOpen(false)}><X/></Button> 

                                    </div>
                                    <div className="max-h-36 overflow-y-auto">
                                        {
                                            UnassignedUser.map((user)=>(
                                                <div key={user._id} className="m-2 flex justify-between items-center gap-5">
                                                    <div className="flex justify-between gap-2 items-center">
                                                         <img src={user.photoUrl} alt="profile pic" className="w-10 h-10 rounded-full object-cover border"
/>
                                                        <h2 className="text-sm font-medium text-black">{user.firstName}</h2>
                                                    </div>
                                                    <div >
                                                        <Button className="text-black bg-green-400 shadow-2xl hover:text-black" variant={"default"}
                                                        disabled={isAddingUser}
                                                        onClick={()=>{addUser(selectedRoom._id,user._id);setIsAddModalOpen(false)}}
                                                        >{isLoading? "Adding..." :"add"}</Button>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                               )
                               :
                               (
                                <div>No unassigned users</div>
                               )
                            )
                            :
                            (
                                <Button disabled={selectedRoom.occupants.length==selectedRoom.capacity}
                            onClick={()=>setIsAddModalOpen(true)}
                            >Add User</Button>
                            )
                           
                        }
                            
                    </CardFooter>
            </Card>
            )
        }
    </div>
  )
}

export default Room