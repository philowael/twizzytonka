import React from "react"

export default function Download(){
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
      threshold: 0.8 
    });
    invix.forEach((x)=>observer.observe(x))
  },[0])
  return(
    <div className="
    flex px-16 justify-between h-[600px] items-center mt-11 relative
    md:flex-col md:px-4 md:justify-center md:mt-12 md:h-fit
    ">
      <div className="
      w-[45svw] flex justify-evenly flex-col h-[80%] relative 
      md:w-full md:text-center md:h-[350px]
      ">
        <h1 className="text-6xl font-bold text-white md:text-5xl invis-horizontal transition-all duration-500">All it takes is just 3 steps</h1>
        <p className="side text-lg md:text-lg md:mt-12 invis-horizontal transition-all duration-500 delay-100">Download the AME Wizard and the playbook to optimise your system in just a few clicks!</p>
        <div className="
        downloads
        md:justify-evenly md:items-center md:mt-8 invis-horizontal transition-all duration-500 delay-200
        ">
          <button>Download playbook<span className="material-symbols-outlined">download</span></button>
          <button>Download AME Wizard<span className="material-symbols-outlined">download</span></button>
        </div>
      </div>
        <div className="w-[40svw] h-full flex flex-col justify-evenly md:w-[90%] md:h-[600px] md:mt-12">
          <div className="step z-20">
            <div>
              <h2>Donwload</h2>
              <p>Download the latest version of the AME Wizard and run it.</p>
            </div>
            <span className="material-symbols-outlined">download</span>          
            </div>
          <div className="step z-30">
            <div>
              <h2>Drag & Drop</h2>
              <p>Download the playbook and drag and drop it into the wizard to import it and follow the instructions.</p>
            </div>
            <span className="material-symbols-outlined">directions_run</span>            
          </div>
          <div className="step z-40">
            <div>
              <h2>Congrats !</h2>
              <p>Your system has been converted into a beast! Enjoy the performance!</p>
            </div>
            <span className="material-symbols-outlined">done</span>          
          </div>
      </div>
    </div>
  )
}