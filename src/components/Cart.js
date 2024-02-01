import React from 'react'
import { useSelector } from 'react-redux'
import { CDN_URL } from '../utils/constants';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="container mx-auto px-4 py-8">
      {cartItems.length === 0 ? (
        <div>Empty Cart</div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item?.card?.info?.id}
              className="flex items-center border-b border-gray-300 py-4"
            >
              <img
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-20 h-20 rounded-full mr-4"
              />
              <div className="flex">
                <h2 className="text-lg font-bold mx-4">
                  {item.card.info.name}
                </h2>
                <div
                  className="bg-yellow-500 w-20 justify-between flex text-white text-base font-bold px-1 py-2 mx-4 rounded cursor-pointer border-none hover:bg-yellow-600"
                  data-testid="add-btn"
                >
                  <button onClick={() => {}}>-</button>
                  <button onClick={() => {}}>+</button>
                </div>
                <h3 className="text-base font-semibold">
                  Price: Rs.
                  {(item.card.info.price / 100)}
                </h3>
              </div>
            </div>
          ))}
          <div className="flex justify-between">
            <div className="font-semibold text-lg ml-28 mt-8">
              Total: Rs.
            </div>
            <div className="mt-8 flex justify-end">
              <button className="bg-green-400 text-white px-4 py-2 rounded">
                Checkout
              </button>
              <button
                className="bg-red-400 text-white px-4 py-2 rounded ml-5"
                onClick={() => {}}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart