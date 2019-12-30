import React, { Component } from "react";
import './style.css';



class Navbar extends React.Component {
    render() {

        return (
            <div className='my-navbar white darken-4 black-text'>
                <div className='my-navbar-small'>
                    <div className='nav-logo-container'>
                        <img className=" img-nav-bar " src="" alt="CinemaLogo" />
                    </div>
                    <div className='nav-right-con'>
                        <div className='user-nav' >Username ID</div>
                        <a href='/' className='blue hoverable btn waves-effect waves-light'>Logout</a>
                    </div>
                </div>
            </div>
        )
    }
}


export default Navbar;