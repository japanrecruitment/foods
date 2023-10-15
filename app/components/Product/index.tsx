import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { ProductItem as TProductItem } from '../../config';

type ProductItemProps = {
    data: TProductItem;
};

export const ProductItem: React.FC<ProductItemProps> = ({ data }) => {
    const { image, title, description, country } = data;
    const { t } = useTranslation('common');
    return (
        <div className="item">
            <div className="item-image">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full    object-cover"
                />
            </div>
            <h4>{title}</h4>
            <h5 className="product-country-of-origin">
                {t('country-of-origin')}: {country}
            </h5>
            <p>{description}</p>
        </div>
    );
};
