import React from "react";

export default function postAdd(){
  function handleClick(e){
    if(e.target.classList.contains("point") || e.target.classList.contains("para") ||e.target.classList.contains("headline")){
      e.target.remove()
    }
    post.current.removeEventListener("click",handleClick)
    del.current.innerText="Remove Element"
  }
  function deleteMode(){
    del.current.innerText="Click on element to remove"
    post.current.addEventListener("click",handleClick)
  }
  let post= React.useRef(0)
  let del= React.useRef(0)
  function getPost(){
    let orderOfTheLaw ={
      creator: "auth.currentUser.displayName",
      date: new Date(),
    }
    let children =Array.from(post.current.children)
    for (let i = 0; i < children.length; i++) {
      if(children[i].classList.contains("headline") || children[i].classList.contains("point") ||children[i].classList.contains("para")){
        let string= ""
        let type = children[i].classList[0]
        let text = children[i].innerText
        string =`${i}${type}`
        orderOfTheLaw[string]=text
      }
    }
    console.log(JSON.stringify(orderOfTheLaw))
    return orderOfTheLaw
  }
  return(
    <div>
      <div className="controles flex justify-end items-center" >
        <button className="mr-auto" onClick={() =>{
          getPost()
        }}>Grab JSON</button>
          <button className="mx-5" onClick={(x)=> {
            let point = document.createElement("div")
            point.classList.add("point")
            point.innerText="Point"
            point.contentEditable="plaintext-only"
            post.current.append(point)
          }}>Add Point</button>
          <button onClick={(x)=>{
            let p = document.createElement("p")
            p.classList.add("para")
            p.innerHTML="Paragraph"
            p.contentEditable="plaintext-only"
            post.current.append(p)
          }}>Add Paragraph</button>
          <button className="mx-5" onClick={(x)=> {
            let point = document.createElement("h2")
            point.classList.add("headline")
            point.innerText="Headline"
            point.contentEditable="plaintext-only"
            post.current.append(point)
          }}>Add Headline</button>
          <button className="mx-5" onClick={deleteMode} ref={del}>Remove Element</button>
        </div>
        <div className="post editor" ref={post}>
          <h2 className="headline" contentEditable='plaintext-only' suppressContentEditableWarning={true}>Headline</h2>
        </div>
    </div>
  )
}