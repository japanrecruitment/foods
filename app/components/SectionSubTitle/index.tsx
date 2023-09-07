import React from 'react';
import useTranslation from 'next-translate/useTranslation';

type SectionSubTitleProps = {
    titleKey: string | null;
};

export const SectionSubTitle: React.FC<SectionSubTitleProps> = ({
    titleKey
}) => {
    const { t } = useTranslation('common');
    if (!titleKey) {
        return null;
    }
    return <p className="section-description">{t(titleKey)}</p>;
};
