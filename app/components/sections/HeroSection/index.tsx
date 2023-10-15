import React from 'react';
import { Section } from '../../Section';
import { HeroTitle } from '../../HeroTitle';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';

export const HeroSection = () => {
    const { t } = useTranslation('common');
    return (
        <Section id="hero" className="hero">
            <Trans
                i18nKey="common:hero-title"
                components={[<HeroTitle />, <br />]}
            />
            <h3 className="hero-subtitle">{t('hero-subtitle')}</h3>
        </Section>
    );
};
