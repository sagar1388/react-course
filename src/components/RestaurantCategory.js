import React, { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({ data, isVisible, setShowIndex }) => {
  //let isVisible = false;
// const [isVisible, setIsVisible] = useState(false); // will move this to Restaurant Menu, bcoz we want to manage is Visible of all Restaurant Categories in Restaurant Menu
  // const handleCategoryAccordion = () => {
  //   isVisible = false;
  //   console.log(isVisible);
  // }

  return (
    // <div>{ data.title }</div>
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        {/* <div className="flex justify-between cursor-pointer" onClick={handleCategoryAccordion}> */}
        <div className="flex justify-between cursor-pointer" onClick={() => {
          // isVisible = true;
          // console.log("isVisible: ", isVisible);
          //setIsVisible(!isVisible);
          setShowIndex();
        }}>
          <span className='font-bold text-lg'>{ data.title } ({ data.itemCards.length })</span>
          <span>🔽</span>
        </div>
        {/* <div>Food Item</div> */}
        {/* Menu Items */}
        {isVisible && <ItemList items={data.itemCards} />}
      </div>
    </div>
  )
}

export default RestaurantCategory