export const Section = ({ children, ...props }) => {
    return (
        <section {...props}>
            <div className="section-container">{children}</div>
        </section>
    );
};
