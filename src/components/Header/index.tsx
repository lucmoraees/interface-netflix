import React from 'react';
import './Header.css';

const Header = ({ black }: any) => {

    return (
        <header className={black ? "black" : ""}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"/>
                </a>
            </div>

            <div className="header--userLogo">
                <a href="/">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"/>
                </a>
            </div>
        </header>
    )
}

export default Header;
