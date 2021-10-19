import React from 'react';

// About us component

const About = () => {

    return (
        <div>

            <div className="d-lg-flex d-md-flex mt-4">

                <div className="container-fluid">
                    <h1>~ About Us ~</h1>
                    <p className="text-justify">At <strong className='text-danger'>Optifine</strong>, we believe there is a better way to do marketing. A more valuable way where customers are earned rather than bought. We're obsessively passionate about it, and our mission is to help people achieve it. We focus on search engine optimization. It's one of the least understood and least transparent aspects of great marketing, and we see that as an opportunity.</p>
                </div>
            </div>
            <div className="mt-4">
                <div className="container-fluid mb-3">
                    <h1>~ Our Mission ~</h1>
                </div>
                <div className="container-fluid row mb-3">
                    <p>To deliver high quality, compassionate care to everyone we touch every day. <br />

                        <strong> Vision Statement</strong> <br />
                        To provide nationally recognized healthcare to everyone with compassion, quality, service and efficiency. <br /> <br />

                        <span className='h4'>Core Values</span> <br /> <br />
                        <strong>Serve the patient first:</strong> <br />

                        We treat our patients, their families, our doctors, our co-workers and all employees with respect and courtesy. Every encounter is an opportunity to show our commitment to VERY GOOD CARE. <br />
                        <strong>Share and inform:</strong> <br />
                        We believe by working together we can produce better results than we would produce as individuals. If we are truly committed to excellence, we will help each other be accountable to our mission, values and purpose. <br />
                        <strong>See, hear and believe in each other:</strong> <br />
                        We recognize and value the unique qualities of each individual. We appreciate and understand the diversity of cultures, opinions and experiences that patients, families and hospital staff bring to our environment. <br />

                        <strong>Respond with your best:</strong> <br />

                        We take pride in performing in a professional and competent manner. We strive to present a professional, clean, healthy and inviting environment. <br />

                        <strong>Reach beyond, pull together:</strong> <br />

                        We believe in continuous improvement. We must continue to grow and learn in order to provide better outcomes than our competition.</p>
                </div>
            </div>

        </div >
    );
};

export default About;