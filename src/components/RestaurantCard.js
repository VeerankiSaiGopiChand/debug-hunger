import { useContext } from "react"; 
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData.info;

  return (
    <div
      data-test-id="resCard"
      className="m-4 p-4 w-[250px] rounded-lg bg-gradient-to-r from-[#FDEFC4] via-[#F8CB46] to-[#936E00] shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl relative"
    >
      <img
        className="rounded-lg w-full h-40 object-cover"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <h3 className="font-bold py-2 text-lg text-white">{name}</h3>
      <h4 className="text-gray-800">{cuisines.join(", ")}</h4>
      <h4 className="text-gray-700 font-semibold">{avgRating} ⭐</h4>
      <h4 className="text-gray-800 font-medium">{costForTwo}</h4>
      <h4 className="text-gray-800 italic">{sla?.slaString}</h4>
      <h4 className="text-black font-bold">User: {loggedInUser}</h4>
    </div>
  );
};

// Higher-Order Component (HOC) for Promoted Label
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        {props.resData.info.aggregatedDiscountInfoV3 && (
          <span className="absolute top-2 left-2 bg-gradient-to-r from-[#FDEFC4] via-[#F8CB46] to-[#936E00] 
            text-black font-semibold px-3 py-1 rounded-lg shadow-md z-10">
            Promoted
          </span>
        )}
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
