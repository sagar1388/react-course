import { useState } from "react";

const useStatus = () => {
    //let status;
  const [status, setStatus] = useState(true);
    // addEventListener Version
    // window.addEventListener("online", (event) => {
    //     console.log("You are now connected to the network.");
    // });

    // ononline version
    // window.ononline = (event) => {
    //     console.log("You are now connected to the network.");
    // };

    window.addEventListener("online", () => {
        console.log("You are now connected to the network.");
        setStatus(true);
    });

    window.addEventListener("offline", () => {
        console.log("Your Internet connection is lost.");
        setStatus(false);
    });

    return status;
}

export default useStatus