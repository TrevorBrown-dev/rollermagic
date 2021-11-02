import { LabeledContent } from "./LabeledContent";

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
                return <LabeledContent label={d} content={hours[i]} />;
            })}
        </section>
    );
};
