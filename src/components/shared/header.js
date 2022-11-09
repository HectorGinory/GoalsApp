import React from 'react';
import { ReactComponent as LogoSVG } from '../../img/logo.svg'

const Header = () => {
    return (
        <div>
            <div>
                <div>   
                        <LogoSVG></LogoSVG>
                        <a href='/'>App Goals</a>
                </div>
                <nav>
                        <a href='/profile'>Perfil</a>
                </nav>
            </div>
        </div>
    );
}

export default Header;
