import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = ()=>{ 
    const [listOfRestaurants, setListOfRestraunt] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
    //console.log("Body Rendered");
    
    useEffect(() => {
      fetchData();
    }, []);
    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      // Optional Chaining
      setListOfRestraunt(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setFilteredRestaurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    };

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false)
      return (
        <h1>
          Looks like you're offline!! Please check your internet connection;
        </h1>
      );

      const { loggedInUser, setUserName } = useContext(UserContext);

      
    return listOfRestaurants.length === 0 ? (
      <Shimmer />
    ) : (
      <div className="body"> 
      {/* Filter Section */}
      <div className="filter flex flex-col md:flex-row items-center justify-center gap-6 p-6 min-h-[20vh] rounded-xl shadow-lg">
        <div className="search flex flex-col md:flex-row items-center gap-4">
          <input
            type="text"
            data-testid="searchInput"
            className="w-full max-w-md border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#936E00] bg-white placeholder-gray-600"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search for restaurants..."
          />
          <button
            className="px-6 py-2 bg-[#936E00] text-white font-semibold rounded-lg shadow-md hover:brightness-110 transition-all hover:scale-105"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
    
        <button
          className="px-6 py-2 bg-[#F8CB46] text-black font-semibold rounded-lg shadow-md hover:brightness-110 transition-all hover:scale-105"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
    
        <div className="search flex items-center gap-2">
          <label className="text-white font-semibold">UserName:</label>
          <input
            className="border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#936E00] bg-white placeholder-gray-600"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter username"
          />
        </div>
      </div>
    
      {/* Restaurant Cards Section */}
      <div className="flex flex-wrap gap-4">
        {filteredRestaurant.map(({ info }) => {
          // Wrap the card with the Promoted HOC if aggregatedDiscountInfoV3 is available.
          const CardComponent = info.aggregatedDiscountInfoV3
            ? withPromotedLabel(RestaurantCard)
            : RestaurantCard;
    
          return (
            <Link to={`/restaurants/${info.id}`} key={info.id} className="no-underline">
              <CardComponent resData={{ info }} />
            </Link>
          );
        })}
      </div>
    </div>
    
    );
  };
  
  export default Body;