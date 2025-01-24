
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {

  const { resId } = useParams();

  const dummy = "Dummy Data";
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);




  if (!resInfo || !resInfo.cards) return <Shimmer />;

  const info = resInfo.cards[2]?.card?.card?.info || {};
  const itemCards = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];
  const categories = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  ) || [];

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{info.name || 'Restaurant Name'}</h1>
      <p className="font-bold text-lg">
      {info.cuisines?.join(', ') || 'Cuisines not available'}
      </p>
      <div className="text-xs ">{info.areaName || 'Area Name'}, {info.city || 'City'}</div>
      
      {categories.map((category, index) => (
                    <RestaurantCategory 
                        key={category?.card?.card?.title || index} 
                        data={category?.card?.card}
                        showItems={index === showIndex}
                        setShowIndex={() => setShowIndex(index)} 
                    />
                ))}
    </div>
  );
};
export default RestaurantMenu;