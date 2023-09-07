import React, { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Transition } from '@headlessui/react';
import { LanguageSwitcher, LinkItem, JrgFoodLogo } from '..';

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t, lang } = useTranslation('navigation');
    return (
        <div className="w-full bg-blue-50 py-4">
            <nav
                className="relative max-w-5xl mx-auto flex items-center justify-between px-4 sm:px-6"
                aria-label="Global">
                <div className="flex items-center flex-1">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <div className="flex items-start md:mr-20">
                            <LinkItem to="hero">
                                <JrgFoodLogo className="w-40" />
                            </LinkItem>
                        </div>
                        <div className="flex items-center md:hidden">
                            <button
                                onClick={() => setIsOpen(true)}
                                type="button"
                                className="bg-primary-blue rounded-md p-2 inline-flex items-center justify-center text-gray-100 hover:bg-blue-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
                                aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                {/* <!-- Heroicon name: outline/menu --> */}
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="hidden space-x-10 md:flex md:ml-10">
                        <LinkItem
                            to="company"
                            className="text-slate-700 hover:text-slate-900">
                            {t('about')}
                        </LinkItem>
                        <LinkItem
                            to="products"
                            className="text-slate-700 hover:text-slate-900">
                            {t('products')}
                        </LinkItem>
                        <LinkItem
                            to="why-choose-us"
                            className="text-slate-700 hover:text-slate-900">
                            {t('why-choose-us')}
                        </LinkItem>
                    </div>
                </div>
                <div className="hidden md:flex">
                    <LanguageSwitcher />
                </div>
            </nav>
            <div>
                <Transition
                    show={isOpen}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95">
                    <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-10">
                        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5  ">
                            <div className="px-5 pt-4 flex items-center justify-between">
                                <div>
                                    <span className="text-2xl tracking-normal font-bold text-primary-blue sm:leading-normal">
                                        JRG Food
                                    </span>
                                </div>
                                <div className="-mr-2">
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        type="button"
                                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">
                                            Close menu
                                        </span>
                                        <svg
                                            className="h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <LinkItem
                                    to="hero"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-gray-50">
                                    {t('about')}
                                </LinkItem>
                                <LinkItem
                                    to="products"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-gray-50">
                                    {t('about')}
                                </LinkItem>
                                <LinkItem
                                    to="why-choose-us"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-gray-50">
                                    {t('about')}
                                </LinkItem>

                                <LanguageSwitcher />
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    );
};
