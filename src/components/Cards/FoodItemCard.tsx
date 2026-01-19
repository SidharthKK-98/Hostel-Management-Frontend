import type { FoodItem } from "@/Types/MenuItemsTypes"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2 } from 'lucide-react';

function FoodItemCard({foodItem}:FoodItem) {

    const{image,name,price} = foodItem

  return (

    <div >
      <div className="max-w-[200px] bg-[#343a47] rounded-[1.5rem] overflow-hidden shadow-2xl border border-gray-800 transition-transform duration-300 hover:scale-[1.02]">
        
        {/* Image Section  */}
        <div className="relative p-2 pb-0">
          <div className="relative h-32 w-full overflow-hidden rounded-[1.2rem]">
            <img 
              src={image} 
              alt="image" 
              className="w-full h-full object-cover"
            />
            {/* Price Badge */}
            <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-md px-2 py-0.5 rounded-full shadow-lg">
              <span className="text-[#9A3412] font-bold text-xs">
                Rs.{price}
              </span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 pt-3 text-center">
          <h2 className="text-lg font-bold text-white mb-1 tracking-tight truncate">
            {name}
          </h2>
         

          {/* Action Buttons  */}
          <div className="flex flex-col gap-2 justify-center">
            {/* Update Button */}
            <Button className="w-full flex items-center justify-center gap-1.5 bg-[#82CA65] hover:bg-[#71b854] text-[#064E3B] font-bold py-2 px-3 rounded-full text-[11px] transition-all active:scale-95">
              <Pencil size={12} strokeWidth={3} />
              Update
            </Button>

          {/* Remove Button */}
            <Button className="w-full flex items-center justify-center gap-1.5 bg-[#D99991] hover:bg-[#ca877e] text-[#4C1D1D] font-bold py-2 px-3 rounded-full text-[11px] transition-all active:scale-95">
              <Trash2 size={12} strokeWidth={3} />
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default FoodItemCard