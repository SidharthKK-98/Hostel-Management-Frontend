
export const getTomorrow =(date:string):boolean=>{

     const toLocalDate = (d: Date) =>
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
      d.getDate()
    ).padStart(2, "0")}`

    const today = new Date()
      const tomorrow = new Date(today)
      tomorrow.setDate(today.getDate()+1)
      const tomorrowDateString =  toLocalDate(tomorrow)

      const givenDate = toLocalDate(new Date(date));
      return tomorrowDateString === givenDate

}