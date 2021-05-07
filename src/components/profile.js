import { useState } from "react";
import React  from 'react';
import Pic from './pic.jpg';

function Profile(){

    const [Pics, setPics]= useState("");
    const imgView =(e)=>{    
        setPics.e.target
    }

    return(
        <>
        <div className="container">{Pics}
           
            <div className="profile">
                <img src={Pic} className="profile-pic" onClick={imgView} ></img>
                
            </div>
        
        <div className='profile-about'>
            <h5>Vinod Mestha</h5>
        </div>
        </div>
        </>
    )
}
export default Profile;