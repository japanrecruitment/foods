import { useState, Fragment } from 'react';
import Trans from 'next-translate/Trans';
import Head from 'next/head';
import MainLayout from '../app/layout/MainLayout';
import useTranslation from 'next-translate/useTranslation';
import {
    products_en,
    products_ja,
    whyChooseUs_en,
    whyChooseUs_ja
} from '../app/config';
import { Element } from 'react-scroll';
import { useRouter } from 'next/router';

import { Dialog, Transition } from '@headlessui/react';
import { Section } from '../app/components/Section';

const Component = () => {
    const [open, setOpen] = useState(false);
    const { locale } = useRouter();

    const closeModal = () => {
        setOpen(false);
    };

    const { t } = useTranslation('common');

    const whyChooseUs = locale === 'en' ? whyChooseUs_en : whyChooseUs_ja;
    const products = locale === 'en' ? products_en : products_ja;

    const HeroTitleComponent = (props) => (
        <h2 className="text-3xl font-bold mb-4 leading-normal" {...props}>
            {props.children}
        </h2>
    );
    return (
        <>
            <Head>
                <title>{t('site-name')}</title>
            </Head>

            <Transition appear show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}>
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0">
                            <Dialog.Overlay className="fixed inset-0 bg-blue-900 bg-opacity-50" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true">
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95">
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900">
                                    Website under maintenance
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        We are working on the final version of
                                        this website. Some features and texts
                                        may not be working as expceted while
                                        under maintentance mode.
                                    </p>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-700"
                                        onClick={closeModal}>
                                        Got it, thanks!
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
            <Element name="hero">
                <Section id="hero" className="hero">
                    <Trans
                        i18nKey="common:hero-title"
                        components={[<HeroTitleComponent />, <br />]}
                    />
                    <p className="text-blue-200">{t('hero-subtitle')}</p>
                </Section>
            </Element>
            <Element name="introduction">
                <Section id="introduction">{t('introduction')}</Section>
            </Element>
            <Element name="products">
                <Section id="products">
                    <div className="mb-12 text-center">
                        <h3 className="section-title">{t('our-products')}</h3>
                        <p className="section-description">
                            {t('our-products-description')}
                        </p>
                    </div>
                    <div className="product-list-container">
                        {products.map(
                            ({ title, description, image }, index) => (
                                <div key={index} className="item">
                                    <div className="item-image">
                                        <img
                                            src={image}
                                            alt={title}
                                            className="w-full h-full    object-cover"
                                        />
                                    </div>
                                    <h4>{title}</h4>
                                    <p>{description}</p>
                                </div>
                            )
                        )}
                    </div>
                </Section>
            </Element>
            <Element name="why-choose-us">
                <Section id="why-choose-us">
                    <div className="mb-12 text-center">
                        <h3 className="section-title">{t('who-choose-us')}</h3>
                    </div>
                    <div className="features-list-container">
                        {whyChooseUs.map(
                            ({ title, description, icon }, index) => (
                                <div key={index} className="feature-item">
                                    <div className="w-12 h-12">
                                        {icon({
                                            className:
                                                'w-12 h-12 text-primary-red'
                                        })}
                                    </div>
                                    <div className="item">
                                        <h4>{title}</h4>
                                        <p>{description}</p>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </Section>
            </Element>
        </>
    );
};

const Home = (props) => (
    <MainLayout>
        <Component {...props} />
    </MainLayout>
);

export default Home;
