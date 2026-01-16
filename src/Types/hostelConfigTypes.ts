import type { User } from "./authTypes";


export interface Rooms {
    _id:string,
    roomNumber:number,
    capacity:number,
    occupants:User[],
    status:string,
    createdAt:string,
    updatedAt:string,
    __v:number
}

export interface HostelConfig {
    _id:string,
    totalRooms:number,
    roomCapacity:number,
    rooms:Rooms[],
    __v:number,
    uodatedAt:string
}

export interface HostelConfigResponse {
    message:string,
    config:HostelConfig
}

export interface RoomUnassignedUsers{
    message:string,
    data:User
}

export interface AddGuestSuccessResponse  {
  message: string;
}

export interface RemoveGuestResponse  {
  message: string;
}

export interface AddUsersParams {
    roomId:string,
    userId:string
}

export interface RemoveUsersParams {
    roomId:string,
    userId:string
}
