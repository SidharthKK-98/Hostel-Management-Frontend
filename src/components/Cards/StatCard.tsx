import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


type StatCardType ={

    title:string
    value:number | string | undefined
    sub?:string
    danger?:boolean

}

function StatCard({title,value,sub,danger}:StatCardType) {
  return (
     <Card>
      <CardHeader>
        <CardTitle className="text-sm">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className={`text-2xl font-bold ${danger ? "text-red-500" : ""}`}>
          {value}
        </p>
        <p className="text-xs text-muted-foreground">{sub}</p>
      </CardContent>
    </Card>
  )
}

export default StatCard