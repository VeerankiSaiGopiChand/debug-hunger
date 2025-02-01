import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items, dummy }) => {
const dispatch = useDispatch();

const handleAddItem = (item) =>{
  dispatch(addItems(item))
}



  return (
    <div>
  {items.map((item) => (
    <div
      data-testid="foodItems"
      key={item.card.info.id}
      className="flex items-center justify-between p-2 my-2 border-b border-gray-200"
    >
      <div className="w-9/12">
        <div className="py-2">
          <span className="font-medium">{item.card.info.name}</span>
          <span className="ml-2 text-sm">
            - ₹
            {item.card.info.price
              ? item.card.info.price / 100
              : item.card.info.defaultPrice / 100}
          </span>
        </div>
        <p className="text-xs text-gray-500">
          {item.card.info.description}
        </p>
      </div>
      <div className="w-3/12 relative p-4">
        <button
          className="absolute top-0 right-0 p-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition"
          onClick={() => handleAddItem(item)}
        >
          Add +
        </button>
        <img
          src={CDN_URL + item.card.info.imageId}
          alt={item.card.info.name}
          className="w-full object-cover rounded-md"
        />
      </div>
    </div>
  ))}
</div>


  );
};
export default ItemList;