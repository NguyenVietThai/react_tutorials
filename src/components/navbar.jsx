import React from 'react';

//Stateless Functional Components
const Navbar = (props) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
            <div className="navbar-brand">
                Navbar
                <span className="badge badge-pill badge-secondary">
                    {props.totalCounters}
                </span>
            </div>
        </nav>
    );
};
export default Navbar;