import { useTheme } from '../context/Theme-provider'
import { Hotel, Moon, Sun } from 'lucide-react'
import { Link, useNavigate,  } from 'react-router-dom'
import { Button } from './ui/button'

interface Props{

    fromHome:boolean
}

function Header({fromHome}:Props) {

    const {theme,setTheme}= useTheme()
    const navigate = useNavigate()
    const isDark= theme=="dark"

    

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2  supports-[backdrop-filter]:bg-background/60 '>
        <div className='container mx-auto flex h-16 items-center justify-between px-4 '>
            <Link to={"/"}>
                <Hotel/>
            </Link>

            <div className='flex justify-evenly items-center w-1/4'>
                {
                    fromHome && (

                        <div className='flex gap-10 items-center w-full mx-5'>
                            <Link to={"/#features"} className='font-semibold'>Features</Link>
                            <Link to={"/#review"} className='font-semibold'>Reviews</Link>
                            <Button variant={"blue"} onClick={()=>navigate("/login")} className='text-white'>Login</Button>

                    </div>

                    )
                }
                <div onClick={()=>setTheme(isDark ? "light" : "dark")} className={`flex items-center cursor-pointer transition-transform duration-500
                ${
                    isDark? "rotate-180" : "rotate-0"}
                `}>
                    {
                        isDark ? <Sun className='h-6 w-6 text-yellow-500 rotate-0 transition-all'/> : <Moon className='h-6 w-6 text-black rotate-0 transition-all'/>
                    }

                </div>
            </div>


        </div>
    </header>
  )
}

export default Header