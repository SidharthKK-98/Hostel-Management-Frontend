import { useAuthUser } from "@/hooks/authHooks/useAuthUser"
import { Navigate, Outlet } from "react-router-dom"

function ProtectedRoute() {

    const {data,isLoading,isError} =useAuthUser()

    if(isLoading){
        return <div>Loading...</div>
    }
   
    if(!data || isError){
        return <Navigate to={"/login"}  replace/>
    }

  return (
    <Outlet/>
    )
}

export default ProtectedRoute