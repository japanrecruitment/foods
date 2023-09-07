import React from 'react';
import { Icon } from '../Icon';

export const WhyChooseUsItem = ({ data }) => {
    const { title, description, icon } = data;
    return (
        <div className="feature-item">
            <div className="w-12 h-12">
                <Icon icon={icon} className="w-12 h-12 text-primary-red" />
            </div>
            <div className="item">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};
