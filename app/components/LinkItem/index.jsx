import { Link as ScrollLink } from 'react-scroll';

export const LinkItem = ({ to, className, children, ...props }) => {
    return (
        <ScrollLink
            to={to}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className={`hover:cursor-pointer ${className}`}
            {...props}>
            {children}
        </ScrollLink>
    );
};
