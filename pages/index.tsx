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

import {
    About,
    Notice,
    ProductsSection,
    WhyChooseUsSection,
    HeroSection,
    IntroductionSection,
    Contact
} from '../app/components';

const Component = () => {
    const { locale } = useRouter();

    const { t } = useTranslation('common');

    const whyChooseUs = locale === 'en' ? whyChooseUs_en : whyChooseUs_ja;
    const products = locale === 'en' ? products_en : products_ja;

    return (
        <>
            <Head>
                <title>{t('site-name')}</title>
            </Head>
            <Notice />
            <Element name="hero">
                <HeroSection />
            </Element>
            <Element name="introduction">
                <IntroductionSection />
            </Element>
            <Element name="products">
                <ProductsSection products={products} />
            </Element>
            <Element name="why-choose-us">
                <WhyChooseUsSection whyChooseUs={whyChooseUs} />
            </Element>
            <Element name="company">
                <About />
            </Element>
            <Element name="contact">
                <Contact />
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
