import {
    ArrowPathIcon,
    ArrowsPointingOutIcon,
    BarsArrowDownIcon,
    BarsArrowUpIcon,
    CheckBadgeIcon,
    GlobeAsiaAustraliaIcon,
    HeartIcon
} from '@heroicons/react/24/outline';
import React from 'react';

export type IconName =
    | 'CheckBadgeIcon'
    | 'GlobeAsiaAustraliaIcon'
    | 'HeartIcon'
    | 'ArrowPathIcon'
    | 'BarsArrowDownIcon'
    | 'BarsArrowUpIcon'
    | 'ArrowsPointingOutIcon';

type IconProps = {
    icon: IconName;
    className: string;
};

export const Icon: React.FC<IconProps> = ({ icon, className }) => {
    if (icon === 'ArrowPathIcon') {
        return <ArrowPathIcon className={className} />;
    } else if (icon === 'ArrowsPointingOutIcon') {
        return <ArrowsPointingOutIcon className={className} />;
    } else if (icon === 'BarsArrowDownIcon') {
        return <BarsArrowDownIcon className={className} />;
    } else if (icon === 'BarsArrowUpIcon') {
        return <BarsArrowUpIcon className={className} />;
    } else if (icon === 'CheckBadgeIcon') {
        return <CheckBadgeIcon className={className} />;
    } else if (icon === 'GlobeAsiaAustraliaIcon') {
        return <GlobeAsiaAustraliaIcon className={className} />;
    } else if (icon === 'HeartIcon') {
        return <HeartIcon className={className} />;
    }

    return null;
};
