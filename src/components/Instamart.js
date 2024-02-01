import React, { useContext } from 'react'
import UserContext from '../utils/UserContext';

const Instamart = () => {
  const {loggedInUser} = useContext(UserContext);
  return (
    <div>Instamart Section - {loggedInUser}</div>
  )
}

export default Instamart;