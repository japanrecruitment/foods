import React from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { LinkItem } from '../../components';

const Footer = () => {
    const { t } = useTranslation('navigation');
    return (
        <footer className="shadow-inner shadow-xl ">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav
                    className="-mx-5 -my-2 flex flex-wrap justify-center"
                    aria-label="Footer">
                    <div className="px-5 py-2">
                        <LinkItem to="hero">{t('home')}</LinkItem>
                    </div>

                    <div className="px-5 py-2">
                        <LinkItem to="hero">{t('about')}</LinkItem>
                    </div>
                </nav>

                <p className="mt-4 text-center text-base">
                    &copy; 2023 Japan Recruitment Group Co., Ltd.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
