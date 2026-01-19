
export interface AddFoodItemsParams {
    name:string,
    price:number,
    foodImg:File
}

export interface FoodItem {
  _id: string
  name: string
  image: string
  publicId: string
  price: number
  createdAt: string
  updatedAt: string
  __v: number
}

export interface SaveFoodItemResponse  {
  message: string
  data: FoodItem
}

export interface FoodMenuResponse {
  message:string
  foodMenu:FoodItem[]
}