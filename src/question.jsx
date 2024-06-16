import React from "react"
export default function question(props){
  let id=React.useId()
  React.useEffect(function(){
    let invix = document.querySelectorAll(".invis-horizontal")
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("invis-horizontal")
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.8 
    });
    invix.forEach((x)=>observer.observe(x))
  },[0])
  return(
    <div className="qa bg invis-horizontal" id={id}>
      <h2 className="question" onClick={()=>props.click(id)}>{props.x.question}<span className="material-symbols-outlined">expand_more</span></h2>
      <p className="answer">{props.x.answer}</p>
    </div>
  )
}