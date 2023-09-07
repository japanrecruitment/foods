import React from 'react';
import { ProductItem as TProductItem } from '../../config';

type ProductItemProps = {
    data: TProductItem;
};

export const ProductItem: React.FC<ProductItemProps> = ({ data }) => {
    const { image, title, description } = data;
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
            <p>{description}</p>
        </div>
    );
};
