//import { useEffect, useState } from "react";
import React, { useState } from "react";
import ShimmerUI from "./ShimmerUI";
//import { RESTAURANT_MENU_API_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

// Data Fetch from API and Data Show in UI
// Single Resposnibility Principle
// This makes our code Simpler, Modular, Testable, Readable
// JEST - Javascript Testing Library
// Refactor
const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);
  // copying below commented code to custom hook useRestaurantMenu.js
  //const [resInfo, setRestInfo] = useState(null);

  const params = useParams();

  // calling custom hook here
  const resInfo = useRestaurantMenu(params.id);

  //console.log(params.id);

  // useEffect(() => {
  //   getRestaurantMenuData();
  // }, []);

  // const getRestaurantMenuData = async () => {
  //   const res = await fetch(
  //    RESTAURANT_MENU_API_URL + params.id
  //   );
  //   const jsonData = await res.json();
  //   setRestInfo(jsonData);
  //console.log(jsonData);
  //};

  if (resInfo === null) return <ShimmerUI />; // we have to create a Shimmer for Restaurant Menu and call it over here

  const { name, cuisines, avgRating, costForTwoMessage } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  //console.log(itemCards);

  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("CATEGORIES", categories);

  return (
    <div className="p-2 m-2">
      <div className="font-bold text-2xl">{name}</div>
      <div className="text-sm">{cuisines}</div>
      <div className="text-sm">{avgRating}</div>
      <div className="text-sm">{costForTwoMessage}</div>

      <div className="mt-10">
        {/* <div className="font-semibold text-2xl">Menu</div> */}

        {/* Category Accordion */}
        {/* the categories we extracted, we will do map on it and fetch title from it and show on UI */}

        {/* {categories.map((category) => (
          <div>{category?.card?.card?.title}</div>
        ))} */}

        {categories.map((category, index) => (
          <RestaurantCategory
            key = {category?.card?.card?.title}
            data = {category?.card?.card}
            isVisible = {index === showIndex}
            showThisCategory  = {() => setShowIndex(index)}
          />
        ))}

        {/* <ul>
          {itemCards.map((item) => (
            <li key={item?.card?.info?.id}>
              <div className="flex justify-between">
                <p>{item?.card?.info?.name}</p>
                <p> Rs. {item?.card?.info?.price / 100}</p>
              </div>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default RestaurantMenu;
