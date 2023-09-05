import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const PageLayout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="relative py-16 overflow-hidden">
                <div className="relative px-4 sm:px-6 lg:px-8">{children}</div>
            </div>
            <Footer />
        </>
    );
};

export default PageLayout;
