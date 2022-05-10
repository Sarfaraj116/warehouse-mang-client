import React from 'react';

import './ExtrxSection.css';

const ExtraSection = () => {
    return (
        <div>
             <div className='bg-white border'>
                <div className="row align-items-center">
                    <div className="col col-12 col-lg-6">
                        <h2>About our warehouse</h2>
                        <p>The stunning collection of Cars, which has grown gradually at the site on a business park in Tottenham have been given guide prices of up to £25,000 with the most expensive being a 1960 MG MGA Car house.</p>
                    </div>
                    <div className="col col-12 col-lg-6">
                        <img style={{ width: '120%' }} src="https://www.classicdriver.com/sites/default/files/article_images/online-warehouse-auction.jpg" alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ExtraSection;