import React from 'react';
import { Icon } from '../Icon';
import { BlobItem } from '../../config';

type BlobProps = {
    data: BlobItem;
};

export const Blob: React.FC<BlobProps> = ({ data }) => {
    const { icon, title, subtitle, description } = data;
    return (
        <div className="item">
            <div>
                <Icon icon={icon} className="w-12 h-12 text-primary-red mb-6" />
            </div>
            <h4>{title}</h4>
            <h5 className="mb-4">{subtitle}</h5>
            <p>{description}</p>
        </div>
    );
};
