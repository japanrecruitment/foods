import React from 'react';

export const HeroTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (
    props
) => {
    return (
        <h2 className="hero-title" {...props}>
            {props.children}
        </h2>
    );
};
