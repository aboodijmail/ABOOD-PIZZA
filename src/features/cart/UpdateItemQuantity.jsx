import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";


export default function UpdateItemQuantity({pizzaId}) {
    const dispatch=useDispatch();
  return (
    <div className="flex gap-1 items-center md:gap-3">
        <Button onClick={()=>dispatch(decreaseItemQuantity(pizzaId))} type='round'>-</Button>
        <Button onClick={()=>dispatch(increaseItemQuantity(pizzaId))} type='round'>+</Button>
    </div>
  )
}
