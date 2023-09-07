import React from 'react';
import { SectionTitle } from '../SectionTitle';
import { SectionSubTitle } from '../SectionSubTitle';

type SectionHeadingProps = {
    titleKey: string | null;
    subtitleKey: string | null;
};

export const SectionHeading: React.FC<SectionHeadingProps> = ({
    titleKey,
    subtitleKey
}) => {
    return (
        <div className="mb-12 text-center">
            <SectionTitle titleKey={titleKey} />
            <SectionSubTitle titleKey={subtitleKey} />
        </div>
    );
};
