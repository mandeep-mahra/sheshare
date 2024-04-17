import "../stylesheets/rentPage.css";
import nothing from "../resources/nothing.svg";
import { useState } from "react";

export default function RentPage(){
    const [listings, setListings] = useState([]);
    const [add, setAdd] = useState(false);

    function handleAdd(){
        setAdd((curr) => {return !curr});
    }

    function handleForm(){
        window.alert("Your listing will be added once approved");
        setAdd((curr) => {return !curr});
    }

    return (
        <div className="rent-container">
            {add ? 
                <div className="add-listing-form">
                    <div className="form-element">
                        <label htmlFor="lab form-name">Owner Name</label>
                        <input className="inp-add form-name" id="form-name"/>
                    </div>
                    <div className="form-element">
                        <label htmlFor="lab form-name">Email</label>
                        <input className="inp-add form-name" id="form-name"/>
                    </div>
                    <div className="form-element">
                        <label htmlFor="lab form-name">Moblie</label>
                        <input className="inp-add form-name" id="form-name"/>
                    </div>
                    <div className="form-element">
                        <label htmlFor="lab form-name">Property location</label>
                        <input className="inp-add form-name" id="form-name"/>
                    </div>
                    <div className="form-element">
                        <label htmlFor="lab form-name">Amenities (seperatre using ',')</label>
                        <input className="inp-add form-name" id="form-name"/>
                    </div>
                    <div onClick = {() => handleForm()} className="add-more">
                        List Property
                    </div>
                </div> 
                : 
                <></>
            }
            <div className="rent-head">
                <div>
                    Your Listings
                    <span className="arrow">&#8594;</span>
                </div>
                <div className="add-more" onClick={() => handleAdd()}>Add a new listing</div>
            </div>
            <div className="listing-area">
                {listings.length === 0 ? 
                    <>
                        <img className = "nothing-img" src = {nothing} />
                        <br/>
                        You have no Listing
                    </> 
                    : 
                    <></>
                }
            </div>
        </div>
    )
}