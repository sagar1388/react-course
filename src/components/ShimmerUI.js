const ShimmerUI = () => {
  const arr = Array(15).fill(0);
  console.log(arr);
  return (
    <div className="flex flex-wrap">
      {arr.map((ele, index) => (
        <div key={index} className="border bg-slate-300 h-60 w-60 p-1 m-1"></div>
      ))}

      {/* <div className="border bg-slate-300 h-60 w-60 p-1 m-1"></div>
      <div className="border bg-slate-300 h-60 w-60 p-1 m-1"></div>
      <div className="border bg-slate-300 h-60 w-60 p-1 m-1"></div>
      <div className="border bg-slate-300 h-60 w-60 p-1 m-1"></div>
      <div className="border bg-slate-300 h-60 w-60 p-1 m-1"></div>
      <div className="border bg-slate-300 h-60 w-60 p-1 m-1"></div>
      <div className="border bg-slate-300 h-60 w-60 p-1 m-1"></div>
      <div className="border bg-slate-300 h-60 w-60 p-1 m-1"></div>
      <div className="border bg-slate-300 h-60 w-60 p-1 m-1"></div> */}
    </div>
  );
};

export default ShimmerUI;
