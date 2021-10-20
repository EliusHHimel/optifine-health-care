import React from 'react';

const Review = () => {
    return (
        <div>
            <section className="customers-review-section mt-5 container">
                <div className="customers-review-top">
                    <h2 className="heading-about-me">Our Service Reviews</h2>
                    <h4>4.8 Ratings out of 5 of 200 reviews</h4>
                    <p>This reviews was given by our recenly released patients.</p>
                </div>
                <div className="customers-review-division row mt-4">
                    <div className="customers-review-individual col-lg-4 col-md-4">
                        <img src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?size=626ext=jpg" alt="" className='customer-img' />
                        <h2>Timothy I. Sutton</h2>
                        <h5>1 Days Ago</h5>
                        <img src="https://hmeliushossainhimel.github.io/FN_Hero/images/logo/unnamed.png" className='rating' alt="" />
                        <p>Happy customers need to be heard just as much as unsatisfied ones. This shows anyone thinking of leaving a review that they will be heard and that their feedback matters to you. </p>
                    </div>
                    <div className="customers-review-individual col-lg-4 col-md-4 mt-4">
                        <img src="https://img.freepik.com/free-photo/portrait-confident-beautiful-brunette-woman-turning-face-camera-with-dreamy-look-white_1258-19144.jpg?size=626&ext=jpg&ga=GA1.2.1030257410.1615075200" className='customer-img' alt="" />
                        <h2>Stephen S. Pendleton</h2>
                        <h5>2 Days Ago</h5>
                        <img src="https://hmeliushossainhimel.github.io/FN_Hero/images/logo/unnamed.png" className='rating' alt="" />
                        <p>This does not apply solely to customers post-purchase, but at every single point on the customer journey.Your tone and voice in this interaction will help guide your customers.</p>
                    </div>
                    <div className="customers-review-individual col-lg-4 col-md-4 mt-4">
                        <img src="https://ssc98hsc00.com/uploads/user/340558.jpeg" className='customer-img' alt="" />
                        <h2>Frank Y. Dorsey</h2>
                        <h5>1 Week Ago</h5>
                        <img src="https://hmeliushossainhimel.github.io/FN_Hero/images/logo/unnamed.png" className='rating' alt="" />
                        <p>While there is value in this, it can risk a mindset that ignores the power of good reviews too, and the need to respond to them.Positive reinforcement is the core concept here.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Review;