import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLogin } from "@/hooks/useLogin"
import { useSignup } from "@/hooks/useSignup"
import { useState } from "react"
import { AlertDemo } from "../Alert"
import {type AlertType } from "@/Types/alertTypes"

type AuthMode = "login" | "signup"


function Login() {

  const [mode,setMode] =useState<AuthMode>("login")
  const [alert,setAlert]=useState<AlertType>(null)

  const initialForm={
    
    firstName:"",
    lastName:"",
    emailId:"",
    password:"",
    age:null as number | null,
    gender:""
  
  }

  const [form,setForm] = useState(initialForm)

  const loginMutation=useLogin()
  const signUpMutation=useSignup()

  const isPending = mode === "login" ? loginMutation.isPending : signUpMutation.isPending
  const isError = mode === "login" ? loginMutation.isError : signUpMutation.isError
  const error = mode === "login" ? loginMutation.error : signUpMutation.error

  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{

    const {id,value}= e.target

    setForm((prev)=>({
      ...prev,[id] : value
    }))

    setAlert(null)

  }

  const isFormValid = () => {
  if (!form.emailId || !form.password) return false

  if (mode === "signup") {
    return (
      form.firstName &&
      form.lastName &&
      form.age &&
      form.gender
    )
  }

  return true
}

const clearData= ()=>{
      setForm(initialForm)
    }



  const handleSubmit =(e:React.FormEvent)=>{
    e.preventDefault()

    if(!isFormValid()){
    setAlert({
        type: "error",
        message: "Please fill all required fields",
      })   
    //  alert("Please fill all required fields")
      return
    }

    



    if(mode === "login"){

            loginMutation.mutate({
              emailId:form.emailId,
              password:form.password
            },
              
              {
              onSuccess:(data)=>{
                  setAlert({
                      type: "success",
                      message: data.message,
                    })
              // alert(data.message)
              console.log(data);
              clearData()
            
          }
        })

    }

    else{
          signUpMutation.mutate({

            firstName:form.firstName,
            lastName:form.lastName,
            emailId:form.emailId,
            password:form.password,
            age:form.age,
            gender:form.gender

          },
          {
            onSuccess:(data)=>{
                setAlert({
                    type: "success",
                    message: data.message,
                  })            
                console.log(data);
                clearData()
            }
          }
        )
    }



   
  }

  const handleMode=(e:React.MouseEvent)=>{
    setMode(e.target.value)
    clearData()
  }
  return (
    <div className="flex justify-center items-center h-[calc(100vh-85px)]">
        <Card className="w-full max-w-sm ">
      <CardHeader>
        <CardTitle className="flex justify-center">
          {
            mode === "login"? "Login to your account" : "SignUp"

          }
          </CardTitle>
        
        
      </CardHeader>
      <CardContent>

                {alert && (
            <AlertDemo
              typeOfAlert={alert.type}
              AlertMessage={alert.message}
            />
          )}
        <form>
          <div className="flex flex-col gap-6">

                {mode === "signup" && (
                  <>
                      <div className="grid gap-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" value={form.firstName} onChange={handleChange} />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" value={form.lastName} onChange={handleChange} />
                    </div>
                    

                   <div className="grid grid-cols-2 gap-2">
                     <div className="grid gap-2">
                      <Label htmlFor="age">Age</Label>
                      <Input id="age" value={form.age} onChange={handleChange} />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="gender">Gender</Label>
                      <Input id="gender" value={form.gender} onChange={handleChange} />
                    </div>

                   </div>
                  </>

                )}

            <div className="grid gap-2">
              <Label htmlFor="email" >Email</Label>
              <Input
                id="emailId"
                type="email"
                placeholder="email@example.com"
                value={form.emailId}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password" >Password</Label>
                
              </div>
              <Input id="password" type="password" required 
                  value={form.password}
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full" onClick={handleSubmit} disabled={isPending}>
          {
            mode === "login" ? "Login" : "Signup"     
          }
        </Button>

         {isError && (
              <p className="text-red-500 text-sm">
                {(error as any)?.response?.data?.message || "Login failed"}
              </p>
            )}

        <CardAction className="flex mx-auto items-center">
         {
          mode === "login" ?(
            <div className="flex items-center">
                 <p>Don't have an account ?</p>
                <Button variant="link" value={"signup"} onClick={handleMode}>Sign Up</Button>
            </div>
          )
          :
          (
            <div className="flex items-center">
               <p>Already have an account ?</p>
               <Button variant="link" value={"login"} onClick={handleMode}>Login</Button>
            </div>
          )
         }
        </CardAction>
        
      </CardFooter>
    </Card>
      
    </div>
  )
}

export default Login