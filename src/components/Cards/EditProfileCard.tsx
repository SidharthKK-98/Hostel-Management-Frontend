
import  { useState } from 'react';
import { Camera } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useUpdateProfile } from '@/hooks/ProfileHooks/useUpdateProfile';

interface EditProfileProps{
    setIsEdit:React.Dispatch<React.SetStateAction<boolean>>
}

function EditProfileCard({setIsEdit}:EditProfileProps) {

    const [imagePreview, setImagePreview] = useState<string | null>(null)
    const [profileImg, setProfileImg] = useState<File | null>(null)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const {mutate:update,isPending} =useUpdateProfile()

    const handleImageChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const file = e.target.files?.[0]
        if(!file) return

        setProfileImg(file)
        const previewUrl = URL.createObjectURL(file)
        setImagePreview(previewUrl)
    }
    const handleUpdate=()=>{
        update({
            firstName,
            lastName,
            userImg:profileImg
        },
        {onSuccess:()=>setIsEdit(false)}
    )
        
    }

  return (
    <div>
            <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Update Profile</CardTitle>
        <CardDescription>
          Change your public information and profile picture.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Avatar Upload Section */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="relative group">
            <Avatar className="w-24 h-24 border-2 border-primary/10">
              <AvatarImage src={imagePreview} alt="Profile" />
              <AvatarFallback> <Camera className="h-6 w-6" /></AvatarFallback>
            </Avatar>
            <label 
              htmlFor="picture" 
              className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
            >
              <Camera className="text-white w-6 h-6" />
              <input 
                id="picture" 
                type="file" 
                className="hidden" 
                accept="image/*" 
                onChange={handleImageChange}
              />
            </label>
          </div>
          <p className="text-xs text-muted-foreground">Click image to upload</p>
        </div>

        {/* Name Inputs */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" placeholder="first name" onChange={(e)=>setFirstName(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" placeholder="last name" onChange={(e)=>setLastName(e.target.value)} />
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full" onClick={handleUpdate} disabled={isPending}>{
            isPending?("Saving..."):("Save Changes")}</Button>
      </CardFooter>
    </Card>
    </div>
  )
}

export default EditProfileCard