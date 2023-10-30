import { RESTAURANT_IMAGE_URL } from "../utils/constants";

//const RestaurantCard = (props) => {

//const RestaurantCard = ({name, rating, cuisine}) => {
const RestaurantCard = (props) => {
  //console.log(props);
  //const {name, rating, cuisine} = props;
  const {name, avgRating, cuisines, cloudinaryImageId} = props?.resData?.info;
  return (
    <div className="border w-60 p-1 m-1">
        <img className="h-2/3 w-full"
        alt="res-logo"
        src={
          RESTAURANT_IMAGE_URL + cloudinaryImageId
        }
        />
        {/* <h1 className="text-lg font-bold">Sagar Ratna</h1>
        <h2 className="font-semibold">4.4 star</h2>
        <h2>South Indian, Indian, etc.</h2> */}

        {/* <h1 className="text-lg font-bold">{props.name}</h1>
        <h2 className="font-semibold">{props.rating}</h2>
        <h2>{props.cuisine}</h2> */}

        <h1 className="text-lg font-bold">{name}</h1>
        <h2 className="font-semibold">{avgRating}</h2>
        <h2>{cuisines.join(", ")}</h2>
        {/* <h2>{cuisines.join(", ").length > 30 ? cuisines.join(", ").substring(0,29) + "..." : cuisines.join(", ")}</h2> */}
        {/* <h2 className="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">{cuisines.join(", ")}</h2> */}
    </div>
  )
}

export default RestaurantCard