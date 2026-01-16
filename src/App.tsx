
import { RouterProvider } from 'react-router-dom'
import './App.css'
import  {Layout}  from '../src/components/Layout'
import { ThemeProvider } from './context/Theme-provider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider  client={queryClient}>

         <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>

           <RouterProvider router={Layout}/>

                 <ReactQueryDevtools initialIsOpen={true} />


       </ThemeProvider>

    </QueryClientProvider>
   
  )
}

export default App
