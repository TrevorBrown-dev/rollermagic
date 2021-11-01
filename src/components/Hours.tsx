interface HoursProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
    > {
    days: string[];
    hours: string[];
}
export const Hours: React.FC<HoursProps> = ({ days, hours, ...props }) => {
    return (
        <section
            className="hours"
            {...props}
            style={{
                textAlign: "left",
                display: "inline-block",
            }}
        >
            <h2 style={{ textAlign: "center" }}>Hours</h2>
            {days.map((d, i) => {
                return (
                    <div key={i}>
                        <span
                            className="left"
                            style={{
                                display: "inline-block",
                                textAlign: "right",
                                width: "10ch",
                                marginRight: ".5em",
                                fontWeight: "bold",
                            }}
                        >
                            {d}:
                        </span>
                        <span
                            className="right"
                            dangerouslySetInnerHTML={{ __html: hours[i] }}
                        ></span>
                    </div>
                );
            })}
        </section>
    );
};
