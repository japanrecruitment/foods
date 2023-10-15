import React from 'react';
import { Section } from '../../Section';
import Trans from 'next-translate/Trans';

export const IntroductionSection: React.FC = () => {
    return (
        <Section id="introduction">
            <Trans
                i18nKey="common:introduction"
                components={[<div className="site-introduction" />, <br />]}
            />
        </Section>
    );
};
