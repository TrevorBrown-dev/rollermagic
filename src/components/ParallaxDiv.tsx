type GradientProps = [string, string, number];
interface ParallaxDivProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > {
    image: string;
    gradient?: GradientProps;
}
export const ParallaxDiv: React.FC<ParallaxDivProps> = ({
    image,
    gradient,
    style,
    className,
    ...props
}) => {
    const hexPercentage = (val: number) =>
        Math.floor((val / 100) * 0xff).toString(16);
    return (
        <section
            className={`background-parallax${className ? ` ${className}` : ""}`}
            style={{
                backgroundImage: `${
                    gradient
                        ? `linear-gradient(${
                              gradient[0] + hexPercentage(gradient[2])
                          }, ${gradient[1] + hexPercentage(gradient[2])}), `
                        : ""
                }url(${image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",

                ...style,
            }}
            {...props}
        >
            {props.children}
        </section>
    );
};
