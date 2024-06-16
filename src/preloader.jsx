import logo from "./assets/white.svg"
import React from "react"

export default function load(props){
  let timer = React.useRef(null)
  React.useEffect(function(){
    window.onload = function(){
      timer.current.addEventListener("animationend", function() {
        let targets =document.querySelector(".load").children
        for (let i = 0; i < targets.length; i++) {
          targets[i].classList.toggle("opacity-0")
        }
        document.querySelector(".load").style.background="none"
        props.snitch()
      }, false);
    }
  })
  return(
    <div className="fixed w-svw h-svh z-[110] load pointer-events-none">
      <img src={logo} alt=""/> 
      <div className="orbit">
        <div className="red" ref={timer}></div>
        <div className="blue"></div>
      </div>
    </div>
  )
}