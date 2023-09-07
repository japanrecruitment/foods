import React from 'react';

export const HeroTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (
    props
) => {
    return (
        <h2 className="text-3xl font-bold mb-4 leading-normal" {...props}>
            {props.children}
        </h2>
    );
};
