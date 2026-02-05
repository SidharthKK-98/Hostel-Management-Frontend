import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"


function AdminDashBoardLayout () {
  return (

    <div className="min-h-screen bg-gray-50">
      
      {/* 🔹 Mobile Header */}
      <div className="flex items-center justify-between p-4 border-b bg-white md:hidden">
        <h1 className="font-semibold text-lg">Admin Panel</h1>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="p-0 w-64">
            <SideBar />
          </SheetContent>
        </Sheet>
      </div>


    <div className='grid grid-cols-12 min-h-screen '>
        <div className='hidden md:block md:col-span-3 col-span-3 bg-white  '>
            <SideBar/>
        </div>

        <div className='col-span-9  bg-white '>
            <Outlet/>
        </div>
    </div>
  </div>
  )
}

export default AdminDashBoardLayout