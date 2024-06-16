import React from "react";

export default function Dash(props){
  let [key,setKey] = React.useState("XXXX_XXXX_XXXX_XXXX")

  return(
   <div className="flex flex-col justify-evenly px-24 h-[70svh] items-start my-11">
      <h1 className="text-5xl text-white">Welcome , "NAME" !</h1>
      <div className="flex justify-between w-full h-fit items-center">
        <h2 className="text-3xl text-white">{key}</h2>
        {key== "XXXX_XXXX_XXXX_XXXX" && <button id="started" className="text-2xl getyour">Get your Premium VTweaker Key !</button>}
      </div>
      <div className="flex justify-between w-[40%]">
        <button className="bg-white text-2xl px-4 py-2 rounded-2xl ">Update Password</button>
      </div>
      <button className="bg-white text-2xl px-4 py-2 rounded-2xl">Sign out</button>
   </div>
  )
}