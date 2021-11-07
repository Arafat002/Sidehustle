import React from 'react';
import dot from './images/dot.PNG';
import login from './images/login.png';

const Header = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul className="menu-left">
                        <a href="#">About</a>
                        <a href="#">Store</a>
                        <a href="#" className="hide">Gmail</a>
                        <a href="#"className="image-hide">Images</a>
                    </ul>
                    <ul className="menu-right">
                        
                        <a href="#" className="image-show">Images</a>
                        <img className="my-apps" src={dot} alt="google-apps" />
                        <img className="my-profile" src={login} alt="login" />
                    </ul>
                </nav>
            </header>
        </div>
       
    )
}
export default Header;