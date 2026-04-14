import React from 'react';

const HeroCard = () => {
    return (
        <div className='container mx-auto grid grid-cols-4'>
            <div>
                <div>
                    <h2>10</h2>
                    <p>Total Friends</p>
                </div>
                <div>
                    <h2>3</h2>
                    <p>On Track</p>
                </div>
                <div>
                    <h2>6</h2>
                    <p>Need Attention</p>
                </div>
                <div>
                    <h2>12</h2>
                    <p>Interactions This Month</p>
                </div>
            </div>
        </div>
    );
};

export default HeroCard;