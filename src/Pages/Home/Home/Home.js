import React from 'react';
import FAQ from '../FAQ/FAQ';
import Gallery from '../Gallary/Gallery';
import Review from '../Review/Review';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <FAQ></FAQ>
            <Gallery></Gallery>
            <Review></Review>

        </div>
    );
};

export default Home;