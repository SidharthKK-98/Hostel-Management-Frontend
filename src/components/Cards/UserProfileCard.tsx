
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useGetAmount } from "@/hooks/ProfileHooks/useGetAmount"
import type { GetUsers } from "@/Types/authTypes"

type UserCardProps = {
  user: GetUsers
}

function UserProfileCard({user}:UserCardProps) {

    const {data:getMonthlyAmount} = useGetAmount(user._id)

  return (
    <div>
        
    <Card size="sm" className="mx-auto w-full max-w-sm">
      <CardHeader className="flex items-center">
        <img src={user.photoUrl} alt="profile img" className="w-15 h-15 rounded-full" />
        <CardTitle>{user.firstName}  {user.lastName}</CardTitle>
        
      </CardHeader>
      <CardContent>
       <div>
        <p>Email : {user.emailId}</p>
        <p>Gender : {user.gender}</p>
        <p>Age : {user.age}</p>
        <p>Room : {user.roomId?.roomNumber?(user.roomId?.roomNumber):"Room not Allocated"}</p>
        <p>Fees : {user.isFeesPayed?("Payed"):("Not Payed")}</p>
        <p>Mess Amount : {getMonthlyAmount?.data}</p>
       </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full">
            Send Notification
        </Button>
      </CardFooter>
    </Card>

    </div>
  )
}

export default UserProfileCard