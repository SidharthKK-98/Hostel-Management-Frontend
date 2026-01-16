import  {type RemoveUsersParams, type AddGuestSuccessResponse, type AddUsersParams, type HostelConfigResponse, type RemoveGuestResponse } from "@/Types/hostelConfigTypes"
import commonAPI from "./commonAPI"


export const getTotalRooms=()=>{
    return commonAPI<HostelConfigResponse>("GET","/hostelConfig/totalroom/get")
}

export const addUsers=({roomId,userId}:AddUsersParams)=>{
    return commonAPI<AddGuestSuccessResponse>("POST",`room/addGuest/${roomId}`,{userId})
}

export const removeUser=({roomId,userId}:RemoveUsersParams)=>{
    return commonAPI<RemoveGuestResponse>("DELETE",`room/removeGuest/${roomId}/${userId}`)
}