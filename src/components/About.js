import React, { useEffect, useState } from "react";
import UserContext from "../utils/UserContext";

//Function Based Component Example
// const About = ({name, profile}) => {
//   // return (
//   //   <div>About</div>
//   // )

//   const [count, setCount] = useState(0);
//   const [count1, setCount1] = useState(0);

//   // Applying componentDidMount in Functional Component
//   useEffect(() => {
//       console.log("component Did Mount");
//   }, []);

//   // If i give some values in empty dependency array of useEffect, then it will work as componentDidUpdate in Functional Component. 
//   // It will still render at start so it will still work as componentDidMount as well.
//   useEffect(() => {
//     console.log("component Did Update");
//   });

//   // Applying componentWillUnMount in Functional Component
//   useEffect(() => {
//     //console.log("component Did Update");

//     const timer = setInterval(() => {
//       console.log("Timer Running");
//     }, 1000);

//     return () => {
//       clearInterval(timer);
//       //console.log("component will Unmount");
//     }
//   }, []);

//   return (
//     // <div>
//     //   <div className="font-bold text-3xl">{name}</div>
//     //   <div className="font-semibold text-xl">{profile}</div>
//     //   <div className="text-sm">Count : {count}</div>
//     //   <button className="p-2 m-2 border border-black round-lg bg-slate-500" 
//     //   onClick={() => {
//     //     setCount(count+1);
//     //   }}>
//     //     Increase Count
//     //   </button>
//     // </div>

//     <div>
//       <div className="font-bold text-3xl">{name}</div>
//       <div className="font-semibold text-xl">{profile}</div>
//       <div className="text-sm">Count : {count}</div>
//       <button className="p-2 m-2 border border-black round-lg bg-slate-500" 
//       onClick={() => {
//         setCount(count+1);
//       }}>
//         Increase Count
//       </button>
//       <div className="text-sm">Count1 : {count1}</div>
//       <button className="p-2 m-2 border border-black round-lg bg-slate-500" 
//       onClick={() => {
//         setCount1(count1+1);
//       }}>
//         Increase Count1
//       </button>
//     </div>
//   );
// };

// Class Based Component Example
class About extends React.Component {

  constructor(props)
  {
    super(props);
    console.log("Constructor");
    console.log(props);

    this.state =
    {
      count: 0,
      count1: 0
    };
  }

  componentDidMount()
  {
    console.log("Component Did Mount");
  }

  componentDidUpdate()
  {
    console.log("Component Did Update");
  }

  componentWillUnmount()
  {
    console.log("Component Will UnMount");
  }

  render() {
     console.log("Render");
    const { name, profile } = this.props;
    const { count, count1 } = this.state;
    return (
      <div>
          <div className="font-bold text-3xl">{name}</div>
          <div className="font-semibold text-xl">{profile}</div>
          <div className="text-sm">Count : {count}</div>
          <button className="p-2 m-2 border border-black round-lg bg-slate-500" 
          onClick={() => {
           this.setState({
            count : count + 1,
           })
          }}>
          Increase Count
          </button>
          <div className="text-sm">Count1 : {count1}</div>
          <button className="p-2 m-2 border border-black round-lg bg-slate-500" 
          onClick={() => {
           this.setState({
            count1 : count1 + 1,
           })
          }}>
          Increase Count1
          </button>
          <div>Logged In User - 
            <UserContext.Consumer> 
              {(data) => data.loggedInUser}
            </UserContext.Consumer>
          </div>
      </div>
    );
  }
}

export default About;
