interface LabeledContentProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > {
    label: string;
    content: string;
    width?: string;
}
export const LabeledContent: React.FC<LabeledContentProps> = ({
    label,
    content,
    width,
    ...props
}) => {
    return (
        <div {...props}>
            <span
                className="left"
                style={{
                    display: "inline-block",
                    textAlign: "right",
                    width: width || "10ch",
                    marginRight: ".5em",
                    fontWeight: "bold",
                }}
            >
                {label}:
            </span>
            <span
                className="right"
                dangerouslySetInnerHTML={{ __html: content }}
            ></span>
        </div>
    );
};
