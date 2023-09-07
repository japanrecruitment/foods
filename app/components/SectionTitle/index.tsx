import React from 'react';
import useTranslation from 'next-translate/useTranslation';

type SectionTitleProps = {
    titleKey: string | null;
};

export const SectionTitle: React.FC<SectionTitleProps> = ({ titleKey }) => {
    const { t } = useTranslation('common');
    if (!titleKey) {
        return null;
    }
    return <h3 className="section-title">{t(titleKey)}</h3>;
};
