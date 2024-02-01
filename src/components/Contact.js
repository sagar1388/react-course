import React, {useContext} from 'react';
import UserContext from '../utils/UserContext';

const Contact = () => {

const {loggedInUser} = useContext(UserContext);

  return (
    <div>Contact - {loggedInUser}</div>
  )
}

export default Contact;