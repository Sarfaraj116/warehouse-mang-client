import React from 'react';

import './ExtrxSection.css';

const ExtraSection = () => {
    return (
        <div>
             <div className='bg-white border'>
                <div className="row align-items-center">
                    <div className="col col-12 col-lg-6">
                        <h2>About our warhouse</h2>
                        <p>The stunning collection of Laptops, which has grown gradually at the site on a business park in Tottenham have been given guide prices of up to £25,000 with the most expensive being a 1960 MG MGA Laptop house.</p>
                    </div>
                    <div className="col col-12 col-lg-6">
                        <img style={{ width: '120%' }} src="https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/Amazon_Warehouse_Wikimedia%20Commons%20-%20%C3%81lvaro%20Ib%C3%A1%C3%B1ez.JPG" alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ExtraSection;