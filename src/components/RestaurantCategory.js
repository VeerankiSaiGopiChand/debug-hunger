import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="my-4">
      <div className="w-6/12 mx-auto bg-gradient-to-r from-[#FDEFC4] via-[#F8CB46] to-[#936E00] shadow-md p-4 rounded-lg">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg text-white">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="text-xl text-white">⬇️</span>
        </div>
        {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
