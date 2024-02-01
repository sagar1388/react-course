import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  
    const errorDetails = useRouteError();
    console.log(errorDetails);
    return (
        <div>
    <div>{errorDetails.status}</div>
    <div>{errorDetails.statusText}</div>
    </div>
  )
}

export default Error;