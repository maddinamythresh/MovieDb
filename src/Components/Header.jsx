import search from "../assets/search.png";
import {Link,useNavigate} from 'react-router-dom'
import { useState } from "react";

export default function Header() {
  const [query,setQuery]=useState()
  const navigate=useNavigate()
  function handleEvent(val){
    
      if(val.length==0){
        
        navigate('/')
      }
      else{
      navigate(`/search?q=${encodeURIComponent(val)}`)
      setQuery(val)
      }
    
  }
  return (
    <nav className="main-header">
      <div className="left-header">
        <Link to="/" ><h1>Movies</h1></Link>
      </div>

      <div className="center-header">
        <input placeholder="Search" onChange={(event)=>handleEvent(event.target.value)}/>
        <button >
          <img src={search} onCha />
        </button>
      </div>

      <div className="right-header">

      <div className="menu-container">
        <div className="menu-top"></div>
        <div className="menu"></div>
        <div className="menu"></div>
      </div>
        
        <ol className="list">
        <Link to="/" >
        <li>Home</li></Link>
        <Link to="/trending" ><li>Trending</li></Link>
        <Link to="/popular" ><li>Popular</li></Link>
        <Link to="/top-rated" ><li>Top Rated</li></Link>
        </ol>
      </div>
      
    </nav>

  );
}
