import React from 'react';
import { ProductItem as TProductItem } from '../../../config';
import { Section } from '../../Section';
import { SectionHeading } from '../../SectionHeading';
import { ProductItem } from '../../Product';

type ProductsSectionProps = {
    products: TProductItem[];
};

export const ProductsSection: React.FC<ProductsSectionProps> = ({
    products
}) => (
    <Section id="products">
        <SectionHeading
            titleKey="our-products"
            subtitleKey="our-products-description"
        />
        <div className="product-list-container">
            {products.map((product, index) => (
                <ProductItem key={index} data={product} />
            ))}
        </div>
    </Section>
);
