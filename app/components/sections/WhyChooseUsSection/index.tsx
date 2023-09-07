import React from 'react';
import { WhyChooseUsItem as TWhyChooseUsItem } from '../../../config';
import { Section } from '../../Section';
import { SectionHeading } from '../../SectionHeading';
import { WhyChooseUsItem } from '../../WhyChooseUs';

type WhyChooseUsSectionProps = {
    whyChooseUs: TWhyChooseUsItem[];
};

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({
    whyChooseUs
}) => {
    return (
        <Section id="why-choose-us">
            <SectionHeading titleKey="who-choose-us" subtitleKey={null} />
            <div className="features-list-container">
                {whyChooseUs.map((item, index) => (
                    <WhyChooseUsItem key={index} data={item} />
                ))}
            </div>
        </Section>
    );
};
