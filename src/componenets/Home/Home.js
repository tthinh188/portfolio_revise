import React from 'react'
import './Home.css';
import Typed from 'react-typed';
 
const Home = () => {
    return (
        <div id="home" className="home">
            <div className="home_info">
                <h2 className='home_infoWelcome'>Welcome to my world</h2>
                <h1>Hi, my name is Thinh Phan</h1>
                <h2>I am a 
                <span>
                    <Typed
                        strings={['Full-stack Web Developer.']}
                        typeSpeed={50}
                        onComplete={(self) => self.cursor.remove()}
                    />
                </span></h2>
            </div>
        </div>
    )
}

export default Home
