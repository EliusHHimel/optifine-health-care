import React from 'react';
import Review from '../Review/Review';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <Review></Review>
        </div>
    );
};

export default Home;