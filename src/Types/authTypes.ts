export interface SignupPayload {
    firstName:string,
    lastName:string,
    emailId:string,
    password:string,
    age:number,
    gender:string
}

export interface LoginPayload {
    emailId:string,
    password:string
}

export interface LoginResponse{
    message:string,
    user:User 
}

export interface User {

    _id:string,
    firstName:string,
    lastName:string,
    emailId?:string,
    role?: "user" | "admin",
    photoUrl:string,
    photoPublicId?:string,
    isFeesPayed?:boolean,
    gender:"male" | "female" | "other",
    age?:number,
    roomId?:string,
    isRoomAllocated?:boolean,
    createdAt?:string,
    updatedAt?:string,
    __v?:number

}