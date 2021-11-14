import React from 'react';

const AboutUs = () => {
    return (
        <div className="container pb-5 mt-3 " >
            <h2 className="mb-3">About Us</h2>
            <div className="row g-4">

                <div className="col-md-6 mt-4" >
                    <h5 >
                        "Padrolo Motors"
                    </h5>
                    <p>
                        The Motion Trust started its journey in June 1980 with a noble vision “To serve the humanity”. The trust has agreed upon to provide healthcare service to the people of Bangladesh at affordable cost. At the early of its commencement, few dedicated social workers of Bangladesh came together and had been united with a strong determination to serve people of the country, the compatriots. That ambition was materialized in the form of “Motion Trust”.

                        <br />
                        <br />

                        At the time of launching, the trust was an institute of 13 employees including Physicians, Technical and Administrative staffs. Over the period of time, by the grace of almighty Allah Subhanahu Wa Tala, the Ibn Sina Trust is now a name of ‘TRUST’ in the sector of health care in Bangladesh and is one of the largest health service provider in South Asia.
                    </p>


                </div>
                <div className="col-md-6">
                    <img className="img-fluid w-75" src="https://i.pinimg.com/originals/4b/6f/9f/4b6f9f4e07b1ec60a3ee871f1d7a8e4c.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;