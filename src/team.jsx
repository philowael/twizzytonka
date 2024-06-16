import tem from "./tem.js"
import React from "react";
export default function Team(){
  let [members,setMembers] = React.useState([])
  React.useEffect(function(){
    setMembers(tem.map(x => <Member x={x}/>))
  },[0])
  React.useEffect(function(){
    let invix = document.querySelectorAll(".invis-horizontal , .invis-vertical")
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("invis-horizontal")
          entry.target.classList.remove("invis-vertical")
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    invix.forEach((x)=>observer.observe(x))
  },[members])
  function Member(props){
    return(
      <div className="member w-[100%] md:w-[100%] lg:w-[80%] xl:w-[80%] invis-vertical transition-all duration-500">
        <img src={props.x.image ? props.x.image : "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"} alt="" />
        <p className="name">{props.x.name}</p>
        <span className="role">{props.x.role}</span>
        <p className="qoute">‟{props.x.qoute}„</p>
      </div>
    )
  }
  return(
    <div>
      <h1 className="text-5xl font-bold text-white px-12 mt-20 md:text-center">Meet the team behind Venix.</h1>
      <div className="grid gap-10 mt-20 grid-cols-2 xl:grid-cols-1 md:grid-cols-1 justify-items-center px-12 w-[90%] mx-auto">
        {...members}
      </div>
    </div>
  )
}