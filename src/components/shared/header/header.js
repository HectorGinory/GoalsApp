import React from 'react';
import './header.css'
import { ReactComponent as LogoSVG } from '../../../img/logo.svg'
import { ReactComponent as UserSVG } from '../../../img/user.svg'

const Header = () => {
    return (
        <header className='header'>
                <div className='container'>   
                        <LogoSVG className='logo-svg'></LogoSVG>
                        <a href='/' className='title'>App Goals</a>
                </div>
                <nav>
                        <a href='/profile' className='profile-link'>
                            <UserSVG className='user-svg'></UserSVG>
                        </a>
                </nav>
        </header>
    );
}

export default Header;
