import React from "react";
import logo from "./assets/white.svg"
import Review from "./review.jsx"
import reviews from "./reviews.js";
import Question from "./question.jsx";
import questions from "./questions.js";

export default function Land(){
  const isStuck = React.useRef(null)
  let luhgeek =React.useRef(null)
  let thissongalreadywasturntsohereisabell= React.useRef()
  let [percentage,setPercentage] = React.useState(0)
  let [reviewsongfrfr,setreviewsongfrfr] = React.useState([])
  let [questionsongfrfr,setquestionsongfrfr] = React.useState([])
  let revcont = React.useRef(null)
  let [curr,setCurr]=React.useState(0)
  React.useEffect(function(){
    let [,one ,two , three , four] = isStuck.current.children
    window.addEventListener("scroll", getpercentage)
    window.addEventListener("resize", getpercentage)
    function getpercentage() {
      const htmlElement = document.documentElement
      const percentOfScreenHeightScrolled =
      htmlElement.scrollTop / htmlElement.clientHeight * 100
      setPercentage(percentOfScreenHeightScrolled)
    }
    if(isStuck.current.parentElement.offsetHeight == 3200){
      if(percentage <120){
        one.style.transform=""
        two.style.transform=""
        three.style.transform=""
        four.style.transform=""
      }
      if(percentage >=120){
        one.style.transform="translate(55%,-30%)"
        two.style.transform="unset"
        three.style.transform="unset"
        four.style.transform="unset"
        one.classList.remove("done")
        two.classList.remove("done")
        three.classList.remove("done")
        four.classList.remove("done")
      }
      if(percentage >=160){
        two.style.transform="translate(-55%,-30%)"
        three.style.transform="unset"
        four.style.transform="unset"
        one.classList.remove("done")
        two.classList.remove("done")
        three.classList.remove("done")
        four.classList.remove("done")
      }
      if(percentage >=200){
        three.style.transform="translate(-55%,80%)"
        four.style.transform="unset"
        one.classList.remove("done")
        two.classList.remove("done")
        three.classList.remove("done")
        four.classList.remove("done")
      }
      if(percentage >=240){
        four.style.transform="translate(55%,80%)"
        one.classList.remove("done")
        two.classList.remove("done")
        three.classList.remove("done")
        four.classList.remove("done")
      }
      if(percentage >=260){
        one.classList.add("done")
        two.classList.add("done")
        three.classList.add("done")
        four.classList.add("done")
      }
    }else{
      one.style.transform=""
      two.style.transform=""
      three.style.transform=""
      four.style.transform=""
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("done")
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.8 
      });
      [one,two,three,four].forEach((x)=>observer.observe(x))
      window.removeEventListener("scroll",getpercentage)
    }
  },[percentage])
  React.useEffect(function(){
      thissongalreadywasturntsohereisabell.current.children[0].addEventListener("animationend", function() {
      thissongalreadywasturntsohereisabell.current.children[0].style.animationName="float"
      thissongalreadywasturntsohereisabell.current.classList.remove("overflow-hidden")
      luhgeek.current.style.animationName="tweak"
      thissongalreadywasturntsohereisabell.current.children[0].style.animationIterationCount="infinite"
      thissongalreadywasturntsohereisabell.current.children[0].style.animationDuration="3s"
      luhgeek.current.style.animationDuration="3s"
    }, false);
  },[0])
  // REVIEWS
  React.useEffect(function(){
    let revs = reviews.map(function(x,i){
      return <Review key={i} x={x}/>
    })
    setreviewsongfrfr(revs)
  },[0])
  React.useEffect(function(){
    if(revcont.current.children[0]){
      revcont.current.animate([{},{
        transform:`translateX(${-curr *(revcont.current.children[1].offsetWidth + 100)}px)`
      }],{
        duration:300,
        fill:"forwards",
        easing: 'ease-in-out'
      })
    }
  },[curr])
  //Questions
  React.useEffect(function(){
    function theOneWhoLeftItAllBehind(ex){
      document.getElementById(ex).classList.toggle("active")
    }
    let quests = questions.map(function(x,i){
      return <Question key={i} x={x} click={theOneWhoLeftItAllBehind}/>
    })
    setquestionsongfrfr(quests)
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
      threshold: 0.8 
    });
    invix.forEach((x)=>observer.observe(x))
  },[0])
  return(
    <div className="land w-full">
      <div className="h-[3200px] md:h-fit bg">
        <div className="hero flex px-16 h-[800px] justify-between flex-row items-start
        md:flex-col md:h-[1100px] md:justify-evenly md:items-center md:px-4
        ">
          <div className="
          left mt-20 w-[50svw] py-12 text-left text-white
          md:text-center md:w-full md:mt-5
          ">
            <h1 className="text-6xl font-bold
            md:text-5xl invis-horizontal transition-all duration-500
            ">Royal level optimisations at your fingertips.</h1>
            <p className="
            text-xl mt-12 side
            md:text-lg invis-horizontal delay-100 transition-all duration-500
            ">It's time to bring in a whole new PC experience. With our optimisations, your PC will be faster than ever before you know it.</p>
            <button className="
            started mx-0
            md:mx-auto invis-horizontal delay-200 transition-all duration-500
            ">Get Started Now</button>
          </div>
          <div className="
          right w-[45svw] flex justify-center items-end relative
          md:w-full md:h-[800px]
          ">
            <div className="hero--logo overflow-hidden flex justify-center items-center
            " ref={thissongalreadywasturntsohereisabell}>
              <img src={logo} alt="" />
            </div>
            <div className="luhgeek
            md:top-[280px]
            " ref={luhgeek}>
            </div>
          </div>
        </div>
        <div className="
        sticky top-0 h-svh w-full flex flex-wrap justify-evenly items-center mx-auto px-12 z-50 bg
        md:relative md:h-[1600px] md:mb-36 md:z-0 twizzytonka
        " ref={isStuck}>
        <div className="text-white w-full text-center bg-transparent encounter">
            <h1 className="text-5xl font-bold mb-10 px-6
            md:text-4xl invis-vertical delay-0 transition-all duration-500
            ">Encountering perfomance issues? We've got ya.</h1>
            <p className="
            side px-20 text-xl
            md:px-6 invis-vertical delay-100 transition-all duration-500
            ">Our optimisations will allow you to enjoy lag-free experience and competitive gaming advantage. We ensure that you get a more efficient Windows environment that guarantees higher framerates and optimized performance for your PC.</p>
        </div>
          <div className="one card">
            <h1>Free Of Charge</h1>
            <p>We said it, No cost involved, for everyone, forever!</p>
            <div className="cover"><span className="material-symbols-outlined">attach_money</span></div>
          </div>
          <div className="two card">
            <h1>Trusted by the community</h1>
            <p>Nervous about trying this out? No need to be! Our rigorous testing guarantees you're getting the finest.</p>
            <div className="cover"><span className="material-symbols-outlined">check_circle</span></div>
          </div>
          <div className="three card">
            <h1>Thoroughly overhauled</h1>
            <p>With inspiration from our community's suggestions, we've entirely recoded our tweaker.</p>
            <div className="cover"><span className="material-symbols-outlined">restart_alt</span></div>
          </div>
          <div className="four card">
            <h1>Choose. Apply. Thrive.</h1>
            <p>With Venix, you decide what you want. Implement your chosen features and experience a fluid, lag-free performance.</p>
            <div className="cover"><span className="material-symbols-outlined">rocket_launch</span></div>
          </div>
        </div>
      </div>
      <div className="w-full mt-40 mb-32">
        <div className="
        reviews flex justify-between items-center h-[500px] px-12
        md:flex-col md:h-[700px]
        ">
          <div className="
          random-shit w-[45%]
          md:text-center md:w-full
          ">
            <h1 className="text-6xl font-bold mb-10 text-white invis-horizontal delay-0 transition-all duration-500
            md:text-5xl">Let our users speak for us</h1>
            <p className="side text-xl invis-horizontal delay-100 transition-all duration-500">Venix has already been used, trusted and loved by hundreds of users. Here are some of their reviews.</p>
          </div>
          <div className="relative md:w-[100%] flex justify-center w-[50%]">
          <span className="
            material-symbols-outlined bg-white w-12 h-12 rounded-full cursor-pointer flex justify-center items-center text-3xl select-none
            absolute -left-3 top-1/2 z-10  translate-y-[-40%]
            "
          onClick={()=>setCurr(x => x-1 < 0 ? reviewsongfrfr.length-1 :  x-1)}
          >navigate_before</span>
          <span className="
              material-symbols-outlined bg-white w-12 h-12 rounded-full cursor-pointer flex justify-center items-center text-3xl select-none
              absolute -right-3 top-1/2 z-10  translate-y-[-40%]
              "
          onClick={()=>setCurr(x => x+1 >=reviewsongfrfr.length ? 0 :  x+1)}
          >navigate_next</span>
          <div className="
          overflow-hidden dada
          w-[100%]
          ">
           
            <div className="rev-cont flex" ref={revcont}>
              {...reviewsongfrfr}
            </div>
          </div>
          </div>
          
        </div>
      </div>
      <div className="mt-28">
        <h1 className="
        px-32 text-6xl font-bold text-white mb-14
        md:px-16 md:text-center invis-horizontal delay-0 transition-all duration-500
        ">Frequently Asked Questions</h1>
        <div className="questions flex justify-evenly items-center flex-col">
          {...questionsongfrfr}
        </div>
      </div>
    </div>
  )
}