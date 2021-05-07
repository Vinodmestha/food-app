import React from 'react';
import './home.css';

function Home1(props){
    return(
            <div className='containers'>
                <div className="food-app">
                    <div className="food-item1">
                        <img src={props.image} className="img1">

                        </img>
                        <div className='food-content'>
                            <div className="food-name">
                                <h1>{props.title}</h1>
                                <p>Lorem ipsum js sj ,jdsnjnjldsljdskls dsljsdnlknds dslnd jjsndlnlnsdlkn dlnsddsnsdds dsl dsdsnlkdsdsn dslkvbx vk avjbn av h...</p>
                                
                            </div>
                            <div className="food-order">
                                    <span>$ 15</span>
                                    <button className="btn-order">Order now</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    )
}
export default Home1;        
