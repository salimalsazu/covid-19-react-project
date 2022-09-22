import React from 'react';
import('./SingleCart.css');

const SingleCart = (props) => {

    const { Country_Region, Confirmed, Deaths, Case_Fatality_Ratio, Last_Update } = props.info;
    return (

        <div  >
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body flex flex-col justify-center items-center">
                    <h2 className="card-title">{Country_Region}</h2>
                    <div className='flex flex-row' >
                        <p className='mx-3' > Effected: {Confirmed} </p>
                        <p> Deaths: {Deaths} </p>
                    </div>
                    <p> Effected Ratio: {Case_Fatality_Ratio}</p>
                    <p> Last Update: {Last_Update} </p>
                </div>

            </div>
        </div>
    );
};

export default SingleCart;