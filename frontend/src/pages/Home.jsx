import React from 'react'

function Home() {
    return (
        <>
            <div className='container-fluid'>
                <img src="bg.jpg" alt="doctor" className="img-fluid" style={{ marginTop: "50px" }} />
            </div>
            <div className='container'>
                <div className='d-md-flex'>
                    <div>
                        <h1>Servicing Hours</h1>
                        <div>
                            <strong>Monday-Friday</strong>
                            <strong>08.00 am - 10.00 pm</strong>
                        </div>
                        <hr />
                        <div>
                            <strong>Saturday</strong>
                            <strong>09.00 am - 1.00 pm</strong>
                        </div>
                        <hr />
                        <div>
                            <strong>Sunday</strong>
                            <strong>01.00 am - 5.00 pm</strong>
                        </div>
                        <hr />
                    </div>
                    <div className="ms-auto spacer">
                        <h1>Book an Appointment</h1>
                        <form action="/#">
                            <div className="mb-3 mt-3">
                                <input type="text" className="form-control" id="email" placeholder="Patient Name" name="email" />
                            </div>
                            <div className="mb-3 mt-3">
                                <input type="number" className="form-control" id="number" placeholder="Phone Number" name="email" />
                            </div>
                            <div className="mb-3 mt-3">
                                <input type="email" className="form-control" id="email" placeholder="Email address" name="email" />
                            </div>
                            <div className="mb-3 mt-3">
                                <input type="date" className="form-control" id="date" placeholder="Date of Birth" name="email" />
                            </div>
                            <div className="mb-3 mt-3">
                                <input type="text" className="form-control" id="ailness" placeholder="Medical Problem" name="email" />
                            </div>
                            <div className="mb-3 mt-3">
                                <input type="date" className="form-control" id="date" placeholder="Preffered Appointment Date" name="email" />
                            </div>
                            <div className="mb-3 mt-3">
                                <input type="textarea" className="form-control" id="date" placeholder="Message" name="email" />
                            </div>


                            <button type="submit" className="btn btn-primary">Request Booking</button>
                        </form>

                    </div>
                </div>
                <hr />
                <h1  className="text-center">Our Latest Facilities</h1>
            </div>

        </>
    )
}

export default Home