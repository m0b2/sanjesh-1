import React from 'react';
import './Navbar.style.css';
import Logo from '../../components/logo/Logo.component';
import UL from '../../components/unordered-list/Unordered-list.component';


const li = [{name:'Homepage',href:'#'},{name:'Blog',href:'#'},{name:'Pricing',href:'#'},{name:'About',href:'#'}]

const Navbar = (props) => {
    return (
        <header>
            <div className={'nav-container'}>
                <Logo />
                <nav>
                    <UL li={li}/>
                </nav>
            </div>
        </header>
    )
}


export default Navbar;