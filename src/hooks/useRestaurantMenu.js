import { useState, useEffect } from "react";
import { RESTAURANT_MENU_API_URL } from "../utils/constants";


const useRestaurantMenu = (id) => {
    const [resInfo, setRestInfo] = useState(null);

  const getRestaurantMenuData = async () => {
    const res = await fetch(
     RESTAURANT_MENU_API_URL + id
    );
    const jsonData = await res.json();
    setRestInfo(jsonData);
    };

    useEffect(() => {
        getRestaurantMenuData();
      }, []);

  return resInfo;
}

export default useRestaurantMenu