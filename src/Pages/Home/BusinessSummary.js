import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='text-center my-10 '>
            <div class="stats stats-vertical lg:stats-horizontal lg:w-[1150px] shadow">

                <div class="stat place-items-center">
                    <div class="stat-title">Customers</div>
                    <div class="stat-value">200+</div>
                    <div class="stat-desc">From March 1st to April 1st</div>
                </div>

                <div class="stat place-items-center">
                    <div class="stat-title">Orders</div>
                    <div class="stat-value text-secondary">2000+</div>
                    <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
                </div>

                <div class="stat place-items-center">
                    <div class="stat-title">Reviews</div>
                    <div class="stat-value">300+</div>
                    <div class="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;