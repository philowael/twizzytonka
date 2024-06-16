import React from "react"
import premiumimg from "./assets/premium.webp"
import logo from "./assets/white.svg"
 
export default function Premium(){
  
  let [percentage,setPercentage] = React.useState(0)
  let twizzies= React.useRef(null)
  window.addEventListener("scroll", getpercentage)
  window.addEventListener("resize", getpercentage)
  function getpercentage() {
    const htmlElement = document.documentElement
    const percentOfScreenHeightScrolled =
    htmlElement.scrollTop / htmlElement.clientHeight * 100
    setPercentage(percentOfScreenHeightScrolled)
  }
  React.useEffect(function(){
    window.addEventListener("scroll", getpercentage)
    window.addEventListener("resize", getpercentage)
    let [one,two,three,four] = twizzies.current.children
    if(twizzies.current.parentElement.offsetHeight == 1900){
      window.removeEventListener("scroll",getpercentage)
      one.style.transform=`translateX(0) rotateY(180deg)`
      two.style.transform=`translateX(0) rotateY(180deg)`
      three.style.transform=`translateX(0) rotateY(180deg)`
      four.style.transform=`translateX(0) rotateY(180deg)`
      const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("comp")
          entry.target.classList.add("compphone")
          entry.target.style.transform="rotate(0deg)"
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.8 
    });
    [one,two,three,four].forEach((x)=>observer.observe(x))
  }else{
      one.classList.remove("compphone")
      two.classList.remove("compphone")
      three.classList.remove("compphone")
      four.classList.remove("compphone")
      one.style.transform=`translateX(${percentage / 240 * 165 < 165 ? percentage / 240 * 165 : 165}%) rotateY(180deg)`
      two.style.transform=`translateX(${percentage / 240 * 55 < 55 ? percentage / 240 * 55 : 55}%) rotateY(180deg)`
      three.style.transform=`translateX(-${percentage / 240 * 55 < 55 ? percentage / 240 * 55 : 55}%) rotateY(180deg)`
      four.style.transform=`translateX(-${percentage / 240 * 165 < 165 ? percentage / 240 * 165 : 165}%) rotateY(180deg)`
      if(percentage < 280 ){
        one.classList.remove("comp")
        two.classList.remove("comp")
        three.classList.remove("comp")
        four.classList.remove("comp")
      }
      if(percentage >= 280){
        one.classList.add("comp")
        two.classList.add("comp")
        three.classList.add("comp")
        four.classList.add("comp")
        one.style.transform="translateX(165%) "
        two.style.transform="translateX(55%) "
        three.style.transform="translateX(-55%) "
        four.style.transform="translateX(-165%) "
      }
      if(percentage <=170){
      one.classList.remove("comp")
      two.classList.remove("comp")
      three.classList.remove("comp")
      four.classList.remove("comp")
      one.style.transform="rotate(15deg) translateX(200px) translateY(90%) rotateY(180deg)"
      two.style.transform="rotate(10deg) translateX(100px) translateY(90%) rotateY(180deg)"
      three.style.transform="rotate(-10deg) translateX(-100px) translateY(90%) rotateY(180deg)"
      four.style.transform="rotate(-15deg) translateX(-200px) translateY(90%) rotateY(180deg)"
    }
  }
  },[percentage])

  React.useEffect(function(){
    let trackedtonkainabiggreenham = document.getElementById("tonka")
    let shittystuff = trackedtonkainabiggreenham.getBoundingClientRect()
    trackedtonkainabiggreenham.parentElement.addEventListener("mousemove",track)
    function trick(x){
      if(x <-1){
        return -1
      }
      if(x >1){
        return 1
      }
      return x
    }
    function track(e){
      if(trackedtonkainabiggreenham.offsetWidth == 900){
        let diffX = (e.clientX -(shittystuff.x + shittystuff.width/2) )/(shittystuff.x + shittystuff.width/2)
        let diffY = -(e.clientY -(shittystuff.y + shittystuff.height/2) )/(shittystuff.y + shittystuff.height/2)
        trackedtonkainabiggreenham.style.transform =`rotateY(${trick(diffX) * 25}deg) rotateX(${trick(diffY) * 25}deg)`
      }
    }
  })
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
  },[0])
  return(
    <div className="">
      <div className="flex flex-col h-[1100px] px-8 justify-normal
      ">
        <div className="
        h-fit flex flex-col
        w-full text-center mt-20
        ">
          <h1 className="text-6xl font-bold text-white md:text-5xl invis-vertical delay-0 transition-all duration-500">Become the king of your game.</h1>
          <p className="text-xl side text-white mt-[75px] invis-vertical delay-100 transition-all duration-500">We get it - our free tweaker already rocks, but what if we told you there is an even more powerful way to improve your device's performance? Say hello to the Vtweaker Premium, a tweaker, which provides even higher quality optimizations, making sure you're getting the maximum.</p>
        </div>
          <div className="premimgcont relative w-[900px] md:w-[500px] mx-auto h-fit mt-[130px] md:transform-none z-[-2]" id="tonka">
            <img src={premiumimg} alt="" className="z-10 rounded-2xl"/>
          </div>
      </div>
      <div className="h-[2600px] md:h-fit">
      <div className="
      h-svh sticky top-0 flex flex-col justify-between bg z-[55] twizzytonka
      md:z-10 md:static md:h-fit md:justify-normal
      ">
        <div className="mt-11">
          <h1 className="text-center text-white text-5xl font-bold md:text-5xl invis-vertical delay-0 transition-all duration-500">Get more done quicker. Seriously.</h1>
          <p className="side text-center mt-8 text-xl md:text-xl invis-vertical delay-100 transition-all duration-500">With VTweaker Premium, you're in for a treat with features like:</p>
        </div>
        <div className="h-[90svh] md:h-[1900px]">
          <div className="premcards is-pinned overflow-hidden md:overflow-visible md:flex md:flex-col md:justify-evenly" ref={twizzies}>
            <div className="premcard">
              <div className="premcover"><img src={logo} alt="" /></div>
              <span class="material-symbols-outlined">sports_esports</span>
              <div>
                <h1>Specialised game tweaks</h1>
                <p>VTweaker Premium offers special tweaks that enhance your gaming experience, giving you the edge you need.</p>
              </div>
              </div>
            <div className="premcard">
              <div className="premcover"><img src={logo} alt="" /></div>
              <span class="material-symbols-outlined">headset_mic</span>
              <div>
                <h1>Blazingly fast support</h1>
                <p>We've got your back. Enjoy priority support with VTweaker Premium Plan. Our support are here to help you make the most out of your device.</p>
              </div>
              </div>
            <div className="premcard">
            <div className="premcover"><img src={logo} alt="" /></div>
            <span class="material-symbols-outlined">adjust</span>
            <div>
                <h1>Advanced focus mods</h1>
                <p>Play like a pro. Our game path tweak shuts down unnecessary background processes, letting you focus on your game without interruptions.</p>
              </div>
              </div>
            <div className="premcard">
            <div className="premcover"><img src={logo} alt="" /></div>
            <span class="material-symbols-outlined">stars</span>
              <div>
                <h1>Mindblowing optimisation</h1>
                <p>Experience a smoother and faster device with a better optimized settings. VTweaker Premium fully optimises your device for maximum efficiency without the hassle.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="px-12 flex flex-col items-center h-[550px] md:my-[100px] md:h-[400px] mt-[400px]">
        <h1 className="text-center text-white text-6xl font-bold md:text-5xl invis-vertical delay-0 transition-all duration-500">Get it now, enjoy <span className="line-through side">a year later</span> a LIFETIME.</h1>
        <p className="text-3xl side text-white mt-[75px] md:mt-[50px] text-center md:text-xl invis-vertical delay-100 transition-all duration-500">A new version of Venix Premium is incoming in 2024, fully upgraded, with a new web UI and more secure than ever before. Get started now, and you will get a special badge along with being able to enjoy a years worth of premium for 80% off when it launches.</p>
        <button className="bg-white text-xl px-4 py-2 rounded-xl w-fit mt-[50px] get relative md:px-11 md:text-2xl invis-vertical delay-200 transition-all duration-500">Get it now!</button>
      </div>
    </div>
  )
}