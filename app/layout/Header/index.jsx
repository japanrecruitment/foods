import React from 'react';
import { Navigation } from '../../components';

const Header = ({ children }) => {
    return (
        <header>
            <div className="relative">
                <div className="relative">
                    <Navigation />
                    {children}
                </div>
            </div>
        </header>
    );
};

export default Header;
