import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"
import { useState } from "react"
import { useAddTotalRooms } from "@/hooks/HostelConfigureHooks/useAddTotalRooms"
import { useHostelConfig } from "@/hooks/HostelConfigureHooks/useHostelConfig"
import { useAddRooms } from "@/hooks/HostelConfigureHooks/useAddRooms"





function HostelConfigCard() {

    const [totalRooms,setTotalRoms]=useState<number | "">("")
    const [roomCapacity,setRoomCapacity]=useState<number | "">("")
    const [rooms,setRooms] = useState<number | "">("")

    const{mutate,isPending}=useAddTotalRooms()
    const{data}=useHostelConfig()
    const{mutate:addRooms}=useAddRooms()

    const isAlreadyConfigured = Boolean(data?.totalRooms && data.totalRooms>0) 

    const handleConfigure=()=>{
        if(!totalRooms || !roomCapacity) return

        mutate({
            totalRooms:Number(totalRooms),
            roomCapacity:Number(roomCapacity)
        })
    }

    const handleAddRooms=()=>{
        if(!rooms)return

        addRooms({
            numberOfRooms:Number(rooms)
        })
    }

  return (
    <div>
        <div className="w-1/2 h-auto rounded p-6 shadow-2xl border border-blue-200">
            <h1 className="text-black font-semibold">Configure Rooms(One-time)</h1>
            <div className="m-2 grid grid-cols-3 ">

                 <Input disabled={isAlreadyConfigured} type="number" placeholder="No.of Rooms" 
                 value={totalRooms}
                 onChange={(e)=>setTotalRoms(Number(e.target.value))}
                 className="w-3/4 border-black p-2 lg:w-1/2 text-black " />

                 <Input disabled={isAlreadyConfigured} type="number" placeholder="Room Capacity"
                 value={roomCapacity}
                 onChange={(e)=>setRoomCapacity(Number(e.target.value))}
                 className="w-3/4 border-black p-2 lg:w-1/2 text-black " />

                 <Button  
                 onClick={handleConfigure}
                 disabled={isAlreadyConfigured || isPending}
                 className="text-black hover:text-gray-500 p-2  shadow-2xl w-3/4 lg:w-1/2 ">
                    {
                    isAlreadyConfigured?"configured"
                    :isPending?"Configuring..."
                    :"Configure"
                    }
                 </Button>

            </div>

            <div className="flex justify-between gap-2 m-2 my-4">
                <Input type="number" placeholder="No.of Rooms" 
                value={rooms}
                onChange={(e)=>setRooms(Number(e.target.value))}
                className="w-1/4 border-black p-2 lg:w-1/2 text-black " />

                <Button 
                onClick={handleAddRooms}
                className="bg-green-300 w-3/4 lg:w-1/2 shadow-2xl">+ Add Room</Button>

            </div>
        </div>
    </div>
  )
}

export default HostelConfigCard