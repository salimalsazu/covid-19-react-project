import React from 'react';
import('./Nav.css')

const Nav = () => {
    const logo = 'Covid-19';
    return (
        <div className='px-20'>
            <div className="navbar bg-base-100 flex flex-col lg:flex-row">
                <div className="flex-1 m-3 lg:m-0">
                    <a href='./' className="btn btn-ghost normal-case text-4xl text-red-700 font-bold">{logo}</a>
                </div>

            </div>
        </div >
    );
};

export default Nav;