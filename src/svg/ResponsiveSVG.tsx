interface ResponsiveSVGProps {
    width: string;
    height: string;
}
export const ResponsiveSVG: React.FC<Partial<ResponsiveSVGProps>> = ({
    width,
    height,
    children,
}) => {
    return (
        <div
            className="responsive-svg"
            style={{
                width: width || "1000px",
                height: height || "auto",
                display: "inline-block",
            }}
        >
            {children}
        </div>
    );
};
