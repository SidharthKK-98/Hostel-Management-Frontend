

//login API

import { type LoginResponse, type LoginPayload, type SignupPayload } from "@/Types/authTypes";
import commonAPI from "./commonAPI";
import { type RoomUnassignedUsers } from "@/Types/hostelConfigTypes";

export const signupAPI = (payload:SignupPayload)=>{
    return commonAPI<LoginResponse>("POST","/signup",payload)
}

export const loginAPI = (payload:LoginPayload)=>{

    return commonAPI<LoginResponse>("POST","/login",payload)

}

export const getRoomUnassignedUsers =()=>{
    return commonAPI<RoomUnassignedUsers>("GET","/room/RoomUnassignedUsers")
}