import logo from "./assets/white.svg"
export default function review(props){
  return(
    <div className="w-[40%] h-96 flex flex-col items-center review px-8 bg">
      <h2 className="text-3xl rev-title font-bold mt-10 md:mt-5 md:text-2xl">{props.x.title}</h2>
      <p className="side mt-5 text-center text-lg">❝{props.x.text}❞</p>
      <div className="reviewer flex w-full items-center mb-6 mt-auto md:mb-3 px-8">
        <img src={props.x.img ? props.x.img : logo} alt="" className="w-10"/>
        <p className="mx-auto">{props.x.user}</p>
        <div className={`${props.x.premium ? "premium" : "free"}`}>
          {props.x.premium ? "Premium" : "Free"}
        </div>
      </div>
    </div>
  )
}