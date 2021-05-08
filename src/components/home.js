import React from 'react';
import img1 from '../food-images/images.jpg';
import img2 from '../food-images/images2.jpg';
import img3 from '../food-images/images3.jpg';
import hero from '../food-images/mainscreenimage.png';
import './home.css';
import Home1 from './homescreen'
import Footer from './footer.js'
function Home(){
    return(
        <>
        <div className="hero-content">
            <div className="hero-content-screen">
            <div className="hero-name">
                <h1>One - Stop <br/> <span> Delicious</span><br/> Food Place.  </h1>
                <br/>
                <p>One stop plae for you to lorem ipsum dollar sit amet consectuere asep 
                    asdispiscing set diam like heaven one stop place  for you to lorem ipsum dollar 
                    sit amet consectuere asep asdispiscing.
                </p>
                <button >Order Now</button>
            </div>
            <div className="hero-image">
                <img src={hero} className="hero-img"/>

            </div>
            </div>
        </div>
        <div className="home">
        <Home1 title="Biryani" image={img1}/>
        <Home1 title="Ghee Rice" image={img2}/>
        <Home1 title="Biryani" image={img3}/>
        </div>
        <div className="home">
        <Home1 title="Biryani" image={img1}/>
        <Home1 title="Ghee Rice" image={img2}/>
        <Home1 title="Biryani" image={img3}/>
        </div>
        <Footer/>
        </>
    )
}
export default Home;