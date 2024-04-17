import { useNavigate } from "react-router"
import "../stylesheets/options.css"

export default function Options(){
    const navigate = useNavigate();
    return (
        <div className="opt-container">
            <div className="options">
                <div className="left" >
                    <div onClick={() => {navigate("/rent")}}>List my property</div>
                    <div className="opt-sub">
                        List your property for guests
                    </div> 
                </div>
                <div className="right" >
                    <div onClick={() => {navigate("/find")}}>Book a property</div>
                    <div className="opt-sub">
                        Choose a place to stay
                    </div> 
                </div>
            </div>
        </div>
    )
} 