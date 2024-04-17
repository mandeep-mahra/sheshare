import "../stylesheets/findPage.css";
import {listings, addListing} from "../data/listings.js";
import pin from "../resources/pin.svg";
import heart from "../resources/heart.svg"

export default function FindPage(){
    return (
        <div className="rent-container">
            <div className="rent-head">
                <div>
                    Find the perfect place
                    <span className="arrow">&#8594;</span>
                </div>
            </div>
            <div className="find-menu">
                <div>
                    Location &nbsp;
                    <input className="inp"></input>
                </div>
                <div>
                    From &nbsp;
                    <input type = "date" className="inp"></input>
                </div>
                <div>
                    To &nbsp;
                    <input type = "date" className="inp"></input>
                </div>
                <div>
                    Number of people &nbsp;
                    <input type = "number" className = "inp num-people"></input>
                </div>
                <div className="add-more find-btn">Find</div>
            </div>
            <div className="listing">
                {listings.map((listing) => 
                    <div className="card">
                        <div className="image-area">
                            <img className = "card-image" src = {listing.photoUrl}/>
                        </div>
                        <div className="info-area">
                            <div><b>Posted by : {listing.ownerName}</b></div>
                            <div>
                                {listing.story}
                            </div>
                            <div className="card-loc">
                                  ₹ {listing.rate}                              
                            </div>
                            <div className="card-loc">
                                  <img src = {pin}></img>
                                  {listing.location}                              
                            </div>
                            <div className="info-amenities">
                                {listing.amenities.map((curr) => (
                                    <div className="amenities">
                                        {curr}
                                    </div>
                                ))}
                            </div>
                            <div className="contact">
                                <div className="contact-btn">Enquire with owner</div>
                                <img src = {heart}/>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <br/>
        </div>
    )
}