

//login API

import { type LoginResponse, type LoginPayload, type SignupPayload,type LogoutResponse, type User, type UpdateProfileParams, type UpdateProfileResponse, type GetProfileResponse } from "@/Types/authTypes";
import commonAPI from "./commonAPI";
import { type RoomUnassignedUsers } from "@/Types/hostelConfigTypes";

export const signupAPI = (payload:SignupPayload)=>{
    return commonAPI<LoginResponse>("POST","/signup",payload)
}

export const loginAPI = (payload:LoginPayload)=>{

    return commonAPI<LoginResponse>("POST","/login",payload)

}

export const logoutApI=()=>{
    return commonAPI<LogoutResponse>("POST","logout")
}

export const getRoomUnassignedUsers =()=>{
    return commonAPI<RoomUnassignedUsers>("GET","/room/RoomUnassignedUsers")
}

export const getProfile =()=>{
    return commonAPI<GetProfileResponse>("GET","profile/view")
}

export const updateProfile=(payload:UpdateProfileParams)=>{

    const formData = new FormData()

    if(payload.firstName){
        formData.append("firstName" , payload.firstName)
    }

    if(payload.lastName){
        formData.append("lastName" , payload.lastName)
    }

    if(payload.userImg){
        formData.append("userImg" , payload.userImg)
    }

    return commonAPI<UpdateProfileResponse>("PATCH","profile/edit",formData)
}