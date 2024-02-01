import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { Restaurantlist } from "./data";
import { useContext, useEffect, useState } from "react";
import { ALL_RESTAURANT_API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useStatus from "../hooks/useStatus";
import { withOfferLabel } from "./RestaurantCard";
import UserContext from "../utils/UserContext";

const Body = () => {
   //let initialResList = [
  //   {
  //   "info": {
  //     "id": "125878",
  //     "name": "Burger King",
  //     "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
  //     "locality": "Old Railway Road",
  //     "areaName": "Sector 4",
  //     "costForTwo": "₹350 for two",
  //     "cuisines": [
  //       "Burgers",
  //       "American"
  //     ],
  //     "avgRating": 4.1,
  //     "feeDetails": {
  //       "restaurantId": "125878",
  //       "fees": [
  //         {
  //           "name": "BASE_DISTANCE",
  //           "fee": 3800
  //         },
  //         {
  //           "name": "BASE_TIME"
  //         },
  //         {
  //           "name": "ANCILLARY_SURGE_FEE"
  //         }
  //       ],
  //       "totalFee": 3800
  //     },
  //     "parentId": "166",
  //     "avgRatingString": "4.1",
  //     "totalRatingsString": "10K+",
  //     "sla": {
  //       "deliveryTime": 23,
  //       "lastMileTravel": 1.7,
  //       "serviceability": "SERVICEABLE",
  //       "slaString": "23 mins",
  //       "lastMileTravelString": "1.7 km",
  //       "iconType": "ICON_TYPE_EMPTY"
  //     },
  //     "availability": {
  //       "nextCloseTime": "2023-10-23 03:30:00",
  //       "opened": true
  //     },
  //     "badges": {

  //     },
  //     "isOpen": true,
  //     "type": "F",
  //     "badgesV2": {
  //       "entityBadges": {
  //         "imageBased": {

  //         },
  //         "textBased": {

  //         },
  //         "textExtendedBadges": {

  //         }
  //       }
  //     },
  //     "aggregatedDiscountInfoV3": {
  //       "header": "60% OFF",
  //       "subHeader": "UPTO ₹120"
  //     },
  //     "differentiatedUi": {
  //       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //       "differentiatedUiMediaDetails": {
  //         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //         "lottie": {

  //         },
  //         "video": {

  //         }
  //       }
  //     },
  //     "reviewsSummary": {

  //     },
  //     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //     "restaurantOfferPresentationInfo": {

  //     }
  //   },
  //   "analytics": {

  //   },
  //   "cta": {
  //     "link": "https://www.swiggy.com/restaurants/burger-king-old-railway-road-sector-4-gurgaon-125878",
  //     "type": "WEBLINK"
  //   }
  // },
  // {
  //   "info": {
  //     "id": "11750",
  //     "name": "Harish Bakery",
  //     "cloudinaryImageId": "rq4cvbodzila3jififnc",
  //     "locality": "Sector 7",
  //     "areaName": "Old Railway Road",
  //     "costForTwo": "₹350 for two",
  //     "cuisines": [
  //       "North Indian",
  //       "South Indian",
  //       "Desserts"
  //     ],
  //     "avgRating": 4.2,
  //     "veg": true,
  //     "feeDetails": {
  //       "restaurantId": "11750",
  //       "fees": [
  //         {
  //           "name": "BASE_DISTANCE",
  //           "fee": 3800
  //         },
  //         {
  //           "name": "BASE_TIME"
  //         },
  //         {
  //           "name": "ANCILLARY_SURGE_FEE"
  //         }
  //       ],
  //       "totalFee": 3800
  //     },
  //     "parentId": "1676",
  //     "avgRatingString": "4.2",
  //     "totalRatingsString": "10K+",
  //     "sla": {
  //       "deliveryTime": 23,
  //       "lastMileTravel": 1.9,
  //       "serviceability": "SERVICEABLE",
  //       "slaString": "23 mins",
  //       "lastMileTravelString": "1.9 km",
  //       "iconType": "ICON_TYPE_EMPTY"
  //     },
  //     "availability": {
  //       "nextCloseTime": "2023-10-22 22:30:00",
  //       "opened": true
  //     },
  //     "badges": {

  //     },
  //     "isOpen": true,
  //     "aggregatedDiscountInfoV2": {

  //     },
  //     "type": "F",
  //     "badgesV2": {
  //       "entityBadges": {
  //         "imageBased": {

  //         },
  //         "textBased": {

  //         },
  //         "textExtendedBadges": {

  //         }
  //       }
  //     },
  //     "differentiatedUi": {
  //       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //       "differentiatedUiMediaDetails": {
  //         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //         "lottie": {

  //         },
  //         "video": {

  //         }
  //       }
  //     },
  //     "reviewsSummary": {

  //     },
  //     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //     "restaurantOfferPresentationInfo": {

  //     }
  //   },
  //   "analytics": {

  //   },
  //   "cta": {
  //     "link": "https://www.swiggy.com/restaurants/harish-bakery-sector-7-old-railway-road-gurgaon-11750",
  //     "type": "WEBLINK"
  //   }
  // },
  // {
  //   "info": {
  //     "id": "228351",
  //     "name": "House of Chow",
  //     "cloudinaryImageId": "6e97ac8f5c89213610309ef1940afa05",
  //     "locality": "Jharsa",
  //     "areaName": "Sector 39",
  //     "costForTwo": "₹300 for two",
  //     "cuisines": [
  //       "Pan-Asian",
  //       "Chinese",
  //       "Thai",
  //       "Oriental"
  //     ],
  //     "avgRating": 4.1,
  //     "feeDetails": {
  //       "restaurantId": "228351",
  //       "fees": [
  //         {
  //           "name": "BASE_DISTANCE",
  //           "fee": 4900
  //         },
  //         {
  //           "name": "BASE_TIME"
  //         },
  //         {
  //           "name": "ANCILLARY_SURGE_FEE"
  //         }
  //       ],
  //       "totalFee": 4900
  //     },
  //     "parentId": "9064",
  //     "avgRatingString": "4.1",
  //     "totalRatingsString": "5K+",
  //     "sla": {
  //       "deliveryTime": 31,
  //       "lastMileTravel": 3,
  //       "serviceability": "SERVICEABLE",
  //       "slaString": "31 mins",
  //       "lastMileTravelString": "3.0 km",
  //       "iconType": "ICON_TYPE_EMPTY"
  //     },
  //     "availability": {
  //       "nextCloseTime": "2023-10-22 23:59:00",
  //       "opened": true
  //     },
  //     "badges": {

  //     },
  //     "isOpen": true,
  //     "type": "C",
  //     "badgesV2": {
  //       "entityBadges": {
  //         "imageBased": {

  //         },
  //         "textBased": {

  //         },
  //         "textExtendedBadges": {

  //         }
  //       }
  //     },
  //     "aggregatedDiscountInfoV3": {
  //       "header": "50% OFF",
  //       "subHeader": "UPTO ₹100"
  //     },
  //     "differentiatedUi": {
  //       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //       "differentiatedUiMediaDetails": {
  //         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //         "lottie": {

  //         },
  //         "video": {

  //         }
  //       }
  //     },
  //     "reviewsSummary": {

  //     },
  //     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //     "restaurantOfferPresentationInfo": {

  //     }
  //   },
  //   "analytics": {

  //   },
  //   "cta": {
  //     "link": "https://www.swiggy.com/restaurants/house-of-chow-jharsa-sector-39-gurgaon-228351",
  //     "type": "WEBLINK"
  //   }
  // },
  // {
  //   "info": {
  //     "id": "11672",
  //     "name": "Pizza Hut",
  //     "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
  //     "locality": "Huda Market",
  //     "areaName": "Sector 4",
  //     "costForTwo": "₹350 for two",
  //     "cuisines": [
  //       "Pizzas"
  //     ],
  //     "avgRating": 3.8,
  //     "feeDetails": {
  //       "restaurantId": "11672",
  //       "fees": [
  //         {
  //           "name": "BASE_DISTANCE",
  //           "fee": 4400
  //         },
  //         {
  //           "name": "BASE_TIME"
  //         },
  //         {
  //           "name": "ANCILLARY_SURGE_FEE"
  //         }
  //       ],
  //       "totalFee": 4400
  //     },
  //     "parentId": "721",
  //     "avgRatingString": "3.8",
  //     "totalRatingsString": "5K+",
  //     "sla": {
  //       "deliveryTime": 31,
  //       "lastMileTravel": 3,
  //       "serviceability": "SERVICEABLE",
  //       "slaString": "31 mins",
  //       "lastMileTravelString": "3.0 km",
  //       "iconType": "ICON_TYPE_EMPTY"
  //     },
  //     "availability": {
  //       "nextCloseTime": "2023-10-23 01:00:00",
  //       "opened": true
  //     },
  //     "badges": {

  //     },
  //     "isOpen": true,
  //     "type": "F",
  //     "badgesV2": {
  //       "entityBadges": {
  //         "imageBased": {

  //         },
  //         "textBased": {

  //         },
  //         "textExtendedBadges": {

  //         }
  //       }
  //     },
  //     "aggregatedDiscountInfoV3": {
  //       "header": "60% OFF",
  //       "subHeader": "UPTO ₹120"
  //     },
  //     "differentiatedUi": {
  //       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //       "differentiatedUiMediaDetails": {
  //         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //         "lottie": {

  //         },
  //         "video": {

  //         }
  //       }
  //     },
  //     "reviewsSummary": {

  //     },
  //     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //     "restaurantOfferPresentationInfo": {

  //     }
  //   },
  //   "analytics": {

  //   },
  //   "cta": {
  //     "link": "https://www.swiggy.com/restaurants/pizza-hut-huda-market-sector-4-gurgaon-11672",
  //     "type": "WEBLINK"
  //   }
  // }
  // ];

  // const [resList, setResList] = useState([
  //   {
  //   "info": {
  //     "id": "125878",
  //     "name": "Burger King",
  //     "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
  //     "locality": "Old Railway Road",
  //     "areaName": "Sector 4",
  //     "costForTwo": "₹350 for two",
  //     "cuisines": [
  //       "Burgers",
  //       "American"
  //     ],
  //     "avgRating": 4.1,
  //     "feeDetails": {
  //       "restaurantId": "125878",
  //       "fees": [
  //         {
  //           "name": "BASE_DISTANCE",
  //           "fee": 3800
  //         },
  //         {
  //           "name": "BASE_TIME"
  //         },
  //         {
  //           "name": "ANCILLARY_SURGE_FEE"
  //         }
  //       ],
  //       "totalFee": 3800
  //     },
  //     "parentId": "166",
  //     "avgRatingString": "4.1",
  //     "totalRatingsString": "10K+",
  //     "sla": {
  //       "deliveryTime": 23,
  //       "lastMileTravel": 1.7,
  //       "serviceability": "SERVICEABLE",
  //       "slaString": "23 mins",
  //       "lastMileTravelString": "1.7 km",
  //       "iconType": "ICON_TYPE_EMPTY"
  //     },
  //     "availability": {
  //       "nextCloseTime": "2023-10-23 03:30:00",
  //       "opened": true
  //     },
  //     "badges": {

  //     },
  //     "isOpen": true,
  //     "type": "F",
  //     "badgesV2": {
  //       "entityBadges": {
  //         "imageBased": {

  //         },
  //         "textBased": {

  //         },
  //         "textExtendedBadges": {

  //         }
  //       }
  //     },
  //     "aggregatedDiscountInfoV3": {
  //       "header": "60% OFF",
  //       "subHeader": "UPTO ₹120"
  //     },
  //     "differentiatedUi": {
  //       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //       "differentiatedUiMediaDetails": {
  //         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //         "lottie": {

  //         },
  //         "video": {

  //         }
  //       }
  //     },
  //     "reviewsSummary": {

  //     },
  //     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //     "restaurantOfferPresentationInfo": {

  //     }
  //   },
  //   "analytics": {

  //   },
  //   "cta": {
  //     "link": "https://www.swiggy.com/restaurants/burger-king-old-railway-road-sector-4-gurgaon-125878",
  //     "type": "WEBLINK"
  //   }
  // },
  // {
  //   "info": {
  //     "id": "11750",
  //     "name": "Harish Bakery",
  //     "cloudinaryImageId": "rq4cvbodzila3jififnc",
  //     "locality": "Sector 7",
  //     "areaName": "Old Railway Road",
  //     "costForTwo": "₹350 for two",
  //     "cuisines": [
  //       "North Indian",
  //       "South Indian",
  //       "Desserts"
  //     ],
  //     "avgRating": 4.2,
  //     "veg": true,
  //     "feeDetails": {
  //       "restaurantId": "11750",
  //       "fees": [
  //         {
  //           "name": "BASE_DISTANCE",
  //           "fee": 3800
  //         },
  //         {
  //           "name": "BASE_TIME"
  //         },
  //         {
  //           "name": "ANCILLARY_SURGE_FEE"
  //         }
  //       ],
  //       "totalFee": 3800
  //     },
  //     "parentId": "1676",
  //     "avgRatingString": "4.2",
  //     "totalRatingsString": "10K+",
  //     "sla": {
  //       "deliveryTime": 23,
  //       "lastMileTravel": 1.9,
  //       "serviceability": "SERVICEABLE",
  //       "slaString": "23 mins",
  //       "lastMileTravelString": "1.9 km",
  //       "iconType": "ICON_TYPE_EMPTY"
  //     },
  //     "availability": {
  //       "nextCloseTime": "2023-10-22 22:30:00",
  //       "opened": true
  //     },
  //     "badges": {

  //     },
  //     "isOpen": true,
  //     "aggregatedDiscountInfoV2": {

  //     },
  //     "type": "F",
  //     "badgesV2": {
  //       "entityBadges": {
  //         "imageBased": {

  //         },
  //         "textBased": {

  //         },
  //         "textExtendedBadges": {

  //         }
  //       }
  //     },
  //     "differentiatedUi": {
  //       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //       "differentiatedUiMediaDetails": {
  //         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //         "lottie": {

  //         },
  //         "video": {

  //         }
  //       }
  //     },
  //     "reviewsSummary": {

  //     },
  //     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //     "restaurantOfferPresentationInfo": {

  //     }
  //   },
  //   "analytics": {

  //   },
  //   "cta": {
  //     "link": "https://www.swiggy.com/restaurants/harish-bakery-sector-7-old-railway-road-gurgaon-11750",
  //     "type": "WEBLINK"
  //   }
  // },
  // {
  //   "info": {
  //     "id": "228351",
  //     "name": "House of Chow",
  //     "cloudinaryImageId": "6e97ac8f5c89213610309ef1940afa05",
  //     "locality": "Jharsa",
  //     "areaName": "Sector 39",
  //     "costForTwo": "₹300 for two",
  //     "cuisines": [
  //       "Pan-Asian",
  //       "Chinese",
  //       "Thai",
  //       "Oriental"
  //     ],
  //     "avgRating": 4.1,
  //     "feeDetails": {
  //       "restaurantId": "228351",
  //       "fees": [
  //         {
  //           "name": "BASE_DISTANCE",
  //           "fee": 4900
  //         },
  //         {
  //           "name": "BASE_TIME"
  //         },
  //         {
  //           "name": "ANCILLARY_SURGE_FEE"
  //         }
  //       ],
  //       "totalFee": 4900
  //     },
  //     "parentId": "9064",
  //     "avgRatingString": "4.1",
  //     "totalRatingsString": "5K+",
  //     "sla": {
  //       "deliveryTime": 31,
  //       "lastMileTravel": 3,
  //       "serviceability": "SERVICEABLE",
  //       "slaString": "31 mins",
  //       "lastMileTravelString": "3.0 km",
  //       "iconType": "ICON_TYPE_EMPTY"
  //     },
  //     "availability": {
  //       "nextCloseTime": "2023-10-22 23:59:00",
  //       "opened": true
  //     },
  //     "badges": {

  //     },
  //     "isOpen": true,
  //     "type": "C",
  //     "badgesV2": {
  //       "entityBadges": {
  //         "imageBased": {

  //         },
  //         "textBased": {

  //         },
  //         "textExtendedBadges": {

  //         }
  //       }
  //     },
  //     "aggregatedDiscountInfoV3": {
  //       "header": "50% OFF",
  //       "subHeader": "UPTO ₹100"
  //     },
  //     "differentiatedUi": {
  //       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //       "differentiatedUiMediaDetails": {
  //         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //         "lottie": {

  //         },
  //         "video": {

  //         }
  //       }
  //     },
  //     "reviewsSummary": {

  //     },
  //     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //     "restaurantOfferPresentationInfo": {

  //     }
  //   },
  //   "analytics": {

  //   },
  //   "cta": {
  //     "link": "https://www.swiggy.com/restaurants/house-of-chow-jharsa-sector-39-gurgaon-228351",
  //     "type": "WEBLINK"
  //   }
  // },
  // {
  //   "info": {
  //     "id": "11672",
  //     "name": "Pizza Hut",
  //     "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
  //     "locality": "Huda Market",
  //     "areaName": "Sector 4",
  //     "costForTwo": "₹350 for two",
  //     "cuisines": [
  //       "Pizzas"
  //     ],
  //     "avgRating": 3.8,
  //     "feeDetails": {
  //       "restaurantId": "11672",
  //       "fees": [
  //         {
  //           "name": "BASE_DISTANCE",
  //           "fee": 4400
  //         },
  //         {
  //           "name": "BASE_TIME"
  //         },
  //         {
  //           "name": "ANCILLARY_SURGE_FEE"
  //         }
  //       ],
  //       "totalFee": 4400
  //     },
  //     "parentId": "721",
  //     "avgRatingString": "3.8",
  //     "totalRatingsString": "5K+",
  //     "sla": {
  //       "deliveryTime": 31,
  //       "lastMileTravel": 3,
  //       "serviceability": "SERVICEABLE",
  //       "slaString": "31 mins",
  //       "lastMileTravelString": "3.0 km",
  //       "iconType": "ICON_TYPE_EMPTY"
  //     },
  //     "availability": {
  //       "nextCloseTime": "2023-10-23 01:00:00",
  //       "opened": true
  //     },
  //     "badges": {

  //     },
  //     "isOpen": true,
  //     "type": "F",
  //     "badgesV2": {
  //       "entityBadges": {
  //         "imageBased": {

  //         },
  //         "textBased": {

  //         },
  //         "textExtendedBadges": {

  //         }
  //       }
  //     },
  //     "aggregatedDiscountInfoV3": {
  //       "header": "60% OFF",
  //       "subHeader": "UPTO ₹120"
  //     },
  //     "differentiatedUi": {
  //       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //       "differentiatedUiMediaDetails": {
  //         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //         "lottie": {

  //         },
  //         "video": {

  //         }
  //       }
  //     },
  //     "reviewsSummary": {

  //     },
  //     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //     "restaurantOfferPresentationInfo": {

  //     }
  //   },
  //   "analytics": {

  //   },
  //   "cta": {
  //     "link": "https://www.swiggy.com/restaurants/pizza-hut-huda-market-sector-4-gurgaon-11672",
  //     "type": "WEBLINK"
  //   }
  // }
  // ]);

  const [resList, setResList] = useState([]);

  const [filteredResList, setFilteredResList] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  const {loggedInUser, setUserInfo} = useContext(UserContext);

  const ModifiedRestaurantCard = withOfferLabel(RestaurantCard);

  useEffect(() => {
    getAllRestaurants();
  }, []);

  const getAllRestaurants = async () => {
    const res = await fetch(ALL_RESTAURANT_API_URL);

    const jsonData = await res.json();

    // console.log(jsonData);

    // console.log(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    const apiResList =
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
      
    setResList(apiResList);

    console.log(resList);

    setFilteredResList(apiResList);

    //console.log(filteredResList);
  };

  const searchResHandler = () => {
    // console.log("Search Button Clicked...")

    const searchedRes = resList.filter((restaurantObj) => {
      const resName = restaurantObj?.info?.name.toLowerCase();

      return resName.includes(searchQuery.toLowerCase());
    });

    //setResList(searchedRes);
    setFilteredResList(searchedRes);
  };

  const topRatedRes = () => {
    const filteredRes = resList.filter(
      (restaurantObj) => restaurantObj?.info?.avgRating >= 4.2
    );
    setResList(filteredRes);
  };

    // implementing custom hook useStatus to show on UI whether we connected to internet or not.
    const status = useStatus();
    console.log(status);
  
    if (status === false) return <div>Check your internet connection...</div>;

  // useEffect(() => {
  //   console.log("useEffect called.");
  // }, []);

  // Types of Dependency Array in useEffect Hook
  // useEffect(() => {
  //   console.log("UseEffect is called...");
  // });

  // useEffect(() => {
  //   console.log("UseEffect is called1...");
  // }, []);

  // useEffect(() => {
  //   console.log("UseEffect is called2...");
  // }, [searchQuery]);

 

  // if(resList.length === 0)
  // {
  //   return <div>Loading...</div>;
  // }

  return resList.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div>
      <div className="p-2 m-2">
        {/* <input className="p-2 m-2 border" placeholder="Restaurant Name, Cuisine, etc." /> */}
        <input
          className="p-2 m-2 border"
          placeholder="Restaurant Name, Cuisine, etc."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button
          className="border border-black rounded-1g m1-3 p-1 m-1 font-semibold"
          onClick={() => searchResHandler()}
        >
          Search
        </button>

        <button
          className="border border-black rounded-1g m1-3 p-1 m-1 font-semibold"
          // onClick={() => {
          //   resDataList = Restaurantlist.filter((restaurantObj) => restaurantObj?.info?.avgRating >= 4.3
          //   )
          // }
          // onClick={() => {
          //   const filteredRes = resList.filter(
          //     (restaurantObj) => restaurantObj?.info?.avgRating >= 4.2
          //   );
          //   setResList(filteredRes);
          // }}
          onClick={() => topRatedRes()}
        >
          Top-Rated Restaurant
        </button>

        {/* To Build a feature such that whatever i type in text box, it should get updated at everyplace of loggedInUser */}
        <input
          className="p-2 m-2 border"
          placeholder="Please Enter UserName..."
          value={loggedInUser}
          onChange={(e) => setUserInfo(e.target.value)}
        />

      </div>
      <div className="flex flex-wrap p-2 m-2">
        {/* <RestaurantCard name="Haldirams" rating="4.1" cuisine="North Indian"/>
          <RestaurantCard name="Sagar Ratna" rating="4.4" cuisine="South Indian" /> */}

        {/* <RestaurantCard resData = {Restaurantlist[0]}/>
          <RestaurantCard resData = {Restaurantlist[1]} /> */}

        {/* {Restaurantlist.map((Restaurant) => (
            <RestaurantCard key={Restaurant.info.id} resData = {Restaurant} />
          ))} */}

        {/* if ID not present in data.js elements */}
        {/* {Restaurantlist.map((Restaurant, index) => (
            <RestaurantCard key={index} resData = {Restaurant} />
          ))} */}

        {/* if info or id is null, then we use Optional Chaining */}
        {/* {resList.map((Restaurant) => (
          <RestaurantCard key={Restaurant?.info?.id} resData={Restaurant} />
        ))} */}
        {/* {filteredResList.map((Restaurant) => (
          <RestaurantCard key={Restaurant?.info?.id} resData={Restaurant} />
        ))} */}
        {filteredResList.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant?.info?.id}>
            {/* <RestaurantCard key={Restaurant?.info?.id} resData={Restaurant} /> */}
            {restaurant?.info?.aggregatedDiscountInfoV3 ? (
              <ModifiedRestaurantCard resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} /> 
            )}


          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
