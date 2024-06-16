import Post from "./post";
import posts from "./posts.js";
import React from "react";


export default function Blog(){
  let postOrder = posts

  postOrder.sort(function(a,b){
    return new Date(b.date) - new Date(a.date);
  });0
  
  return(
    <div>
      <div className="px-24 mt-11">
        <h1 className="text-white text-5xl font-bold">Check out our latest posts</h1>
        <p className="side text-xl mt-7">We're always working on new content, so make sure to check back often!</p>
      </div>
      <div className="posts px-36 mt-20">
        {...postOrder.map(x => <Post x={x}/>)}
      </div>
    </div>
  )
}
