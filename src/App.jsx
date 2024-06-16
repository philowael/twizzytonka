// lighting - dnwload button - login ronix simga face - mail verify - change pass in dashboard - dashboard purschase button -  admins view users with auth keys - blog gives JSON text instead of firestore which we will then add to blog-js array
// STYLING +ADD ADMINS AND MAKE THEM ONLY ABLE TO EDIT OR VIEW THE POSTADD COMPONENT
// ADD Copyright © 2024 Venix Utilities, All Rights Reserved. to footer
// ADD PRIVACY POLICY

import logo from "./assets/white.svg"
import React from "react"
import { Routes, Route ,Link, useLocation } from "react-router-dom";
import Load from './preloader.jsx'
import Footer from "./footer.jsx"
import Land from "./Land.jsx"
import Download from "./download.jsx"
import Team from "./team.jsx"
import Premium from "./Premium.jsx"
import Blog from "./Blog.jsx"
import Dash from "./dashboard.jsx"
import Log from './login.jsx'

function App() {
  let [loaded,setLoaded] = React.useState(false)
  let [log , setLog] = React.useState(false)
  let [user,setUser] = React.useState(false)

  React.useEffect(function(){
    const move = document.getElementById("move");
    document.body.onpointermove = event => {
    const { clientX, clientY } = event;
    move.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    
    }, {duration: 2000, fill: "forwards"})
  } 
  })

  return (
    <>
    <div className={`${log ? 'opacity-0' : 'opacity-20'} tragic fixed md:hidden`} id="move"></div>
    <div className={`tragic opacity-0 fixed md:opacity-20`}></div>
    {log && <Log close={()=>setLog(false)}/>}
    <Load snitch={()=>{setLoaded(true)}} />  
    {loaded &&
    <>
    <header className="w-full h-[12svh] flex items-center px-16 text-lg sticky top-0 backdrop-blur-md z-[50] ">
      <div className="logo--container relative flex justify-center items-center cursor-pointer">
        <Link to="/"><img src={logo} alt="" /></Link>
      </div>
      <ul>
        <li><Link to="/download">Donwload</Link></li>
        <li><Link to="/premium">Premium</Link></li>
        <li><Link to="/Blog">Blog</Link></li>
        <li><Link to="/Team">Team</Link></li>
        <li>Github</li>
        <li>Discord</li>
      </ul>
      {!user && <button onClick={() => {
        setLog(true)
      }
     }>
      <span className="material-symbols-outlined">login</span>Login</button>}
      {user && <Link to="/dash"><button><span className="material-symbols-outlined">dashboard</span>{user.email}</button></Link>}
    </header>
        <Routes>
            <Route path="/" element={<Land/>} />
            <Route path="blog" element={<Blog />} />
            <Route path="team" element={<Team />} />
            <Route path="download" element={<Download/>} />
            <Route path="premium" element={<Premium />} />
            <Route path="dash" element={<Dash name={"USER"}/>}/>
        </Routes>
      {<Footer />}
      </>
      }
    </>
  )
}

export default App
