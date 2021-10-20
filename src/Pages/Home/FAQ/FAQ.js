import React from 'react';

const FAQ = () => {
    return (
        <div>
            <section className="container">

                <center>
                    <h1 className="custom-heading-font-style my-5">Frequently Asked <span className="text-danger">Questions</span>
                    </h1>
                </center>


                <div className="row row-cols-1 row-cols-md-2 g-4 my-5">
                    <div className="col">
                        <img className="img-fluid" src="https://honda-cbr-elius.netlify.app/images/faq.png" alt="" />
                    </div>
                    <div className="col">
                        <div className="accordion" id="accordionOne">
                            <div className="accordion-item mt-2">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                        What are the most popular services do you provide?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionOne">
                                    <div className="accordion-body">
                                        Cardiology is the study and treatment of disorders of the heart and the blood vessels. A person with heart disease or cardiovascular disease may be referred to a cardiologist. Cardiology is a branch of internal medicine.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mt-3 border">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        How do I book an appointment?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionOne">
                                    <div className="accordion-body">
                                        Cardiology is the study and treatment of disorders of the heart and the blood vessels. A person with heart disease or cardiovascular disease may be referred to a cardiologist. Cardiology is a branch of internal medicine.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mt-3 border">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Ho do I contact with you?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionOne">
                                    <div className="accordion-body">
                                        Cardiology is the study and treatment of disorders of the heart and the blood vessels. A person with heart disease or cardiovascular disease may be referred to a cardiologist. Cardiology is a branch of internal medicine.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mt-3 border">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        Do you have any diagnostic center?
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionOne">
                                    <div className="accordion-body">
                                        Cardiology is the study and treatment of disorders of the heart and the blood vessels. A person with heart disease or cardiovascular disease may be referred to a cardiologist. Cardiology is a branch of internal medicine.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;