import React from 'react';
import { Section } from '../../Section';
import { Blob } from '../../Blob';
import { BlobItem } from '../../../config';

type BlobSectionProps = {
    blobs: BlobItem[];
};

export const BlobSection: React.FC<BlobSectionProps> = ({ blobs }) => {
    return (
        <Section id="introduction">
            <div className="product-list-container">
                {blobs.map((blob, index) => (
                    <Blob key={index} data={blob} />
                ))}
            </div>
        </Section>
    );
};
