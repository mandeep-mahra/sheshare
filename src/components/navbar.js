import { useEffect, useState } from "react";
import "../stylesheets/navbar.css"
import heart from "../resources/heart.svg";
import list from "../resources/list.svg";
import search from "../resources/search.svg";
import user from "../resources/user.svg";
import { useNavigate } from "react-router";

function SearchbarDesktop(){
    return(
        <div className="search-container">
            <input type="text" className="input-box" placeholder="Search..."></input>
        </div>
    )
}

function SearchbarMobile(){
    return(
        <div className="search-container">
            <img src = {search}/>
        </div>
    )
}
function FavDesktop(){
    return(
        <div className="sign button">
            <button className="user btn-sec ">
                <img className = "heart-img" src = {heart}/>
                Favorites
            </button>
        </div>
    )
}
function FavMobile(){
    return(
        <div className="fav center-content color-border">
            <img src = {heart}/>
        </div>
    )
}
function UserDesktop(){
    return(
        <div className="sign-btn">
            <button className="user btn-sec center-content">
            <img className = "heart-img" src = {heart}/>
                Favorite</button>
            <button className="user btn-sec ">Sign In</button>
            <button className="user btn-sec">Sign Up</button>
        </div>
    )
}
function UserMobile(){
    return(
        <div className="user">
            <img src = {user}/>
        </div>
    )
}


export default function Navbar(){
    const [width, setWindowDimensions] = useState(window.innerWidth);
    const navigate = useNavigate();
    useEffect(() => {
        function handleResize() {
        setWindowDimensions(window.innerWidth);
        }
  
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return(
        <>
            <div className="nav">
                <div className="logo" onClick={() => {navigate("/")}}>
                    <span>SheShares</span>
                    <span className="sub-head">All women vacation rentals</span>
                </div>
                {(width > 900) ? <SearchbarDesktop/>: <SearchbarMobile/>}
                <div className="center-content">
                    {/* {(width > 900) ? <FavDesktop/>: <FavMobile/>} */}
                    {(width > 900) ? <UserDesktop/>: <UserMobile/>}
                </div>
            </div>
        </>
    )
}

