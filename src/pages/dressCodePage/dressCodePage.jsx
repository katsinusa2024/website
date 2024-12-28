import React from 'react';
import './dressCodePage.scss'
import Button from "../../components/button";
import dresscode from '../../assets/images/screenshot.png'

const DressCodePage = () => {
    const handleClick = () => {
        window.open(
            'https://www.opentable.com/restref/client/?restref=1323949&lang=en-US&ot_source=Restaurant%20website&corrid=e66c4cc3-0cde-4670-8a9b-dadfa75f931b',
            '_blank', // <- This is what makes it open in a new window.
        );
    };

    return (
        <div className="dresscodePage">
            <div className="content">
                <div className="container">
                    <div className="row flex-wrap-reverse">
                        <div className="col-md-6">
                            <h1>Dress Code</h1>
                            <p> We extend our warmest welcome to you at Katsin! To ensure an enjoyable dining experience for all our guests, we kindly request that you adhere to our dress code guidelines. We believe that dressing appropriately adds to the overall ambiance of our restaurant and enhances your dining pleasure. Our preferred dress code is smart-casual attire.</p>


                            <p>Not Permitted:  Athletic wear, jerseys and sweatpants, beachwear, sweatshirts or hoodies, ripped, torn or excessively distressed clothing, ball caps, visors, and headgear (exceptions for religious or cultural reasons).</p>

                            <p>We believe that dressing thoughtfully adds to the overall dining experience, making it more memorable for everyone. We thank you for your cooperation in upholding our dress code and contributing to the delightful ambiance we strive to offer.</p>

                            <p>Thank you for choosing Katsin. We can't wait to create wonderful memories with you.</p>

                            <p>Warm Regards, <br/>
                                Katsin Team</p>

                            <Button onClick={handleClick}>Book Now</Button>
                        </div>
                        <div className="col-md-6">
                            <img src={dresscode} alt="img" className="img-fluid mb-4"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DressCodePage;