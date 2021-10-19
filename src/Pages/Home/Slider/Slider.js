import React from 'react';

const Slider = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://hmri.org.au/sites/default/files/research-sub-pages/effective-health-services.jpg" className="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h2>We make your day feel like Day again</h2>
                            <p>We always try our best to make your day full of happiness and joy by our service.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://content.gallup.com/origin/gallupinc/GallupSpaces/Production/Cms/WORKPLACEV9CMS/2bgqjhmw_0iifqf_p8twtq.jpg" className="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h2>A Group of Expert doctors are 24/7 monitoring our patients</h2>
                            <p>We have a learge number of expert doctors, they are always ready for emergeny response. And they always monitor our patients.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://diagnosticsmarketing.net/blog/wp-content/uploads/2019/03/visitprep02.jpg" className="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h2>100% Modern Diagnostic Center at Reasonable Cost</h2>
                            <p>We have 100% modern Diagnostic center for our patients.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Slider;