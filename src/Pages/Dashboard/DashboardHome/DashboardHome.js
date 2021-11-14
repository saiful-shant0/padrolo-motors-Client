import React from 'react';

const DashboardHome = () => {
    return (
        <div className="container pb-5 mt-3 " >
            <h2 className="mb-3">Welcome To DashBoard</h2>
            <br />
            <br />
            <div className="row g-4">

                <div className="col-md-6 mt-4" >
                    <h5 >
                        "Padrolo Motors"
                    </h5>
                    <p>
                        <br />
                        The Motion Trust started its journey in June 1980 with a noble vision “To serve the humanity”.The trust has agreed upon to provide healthcare service to the people of Bangladesh at affordable cost.At the early of its commencement, few dedicated social workers of Bangladesh came together and had been united with a strong determination to serve people of the country, the compatriots.That ambition was materialized in the form of “Motion Trust”.

                    </p>


                </div>
                <div className="col-md-6">
                    <img className="img-fluid w-50" src="https://freepngimg.com/thumb/motorcycle/1-moto-png-image-motorcycle-png-picture-download.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;