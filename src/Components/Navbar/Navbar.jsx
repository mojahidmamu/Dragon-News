import React from 'react';
import Headline from './Headline';
// import RunningLine from './RunningLine'; 
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div>
            <Headline></Headline>
            {/* <RunningLine></RunningLine>  */}
            <NavLink></NavLink>
        </div>
    );
};

export default Navbar;