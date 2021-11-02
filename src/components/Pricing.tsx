import { LabeledContent } from "./LabeledContent";

const width = "12ch";
export const Pricing: React.FC = () => {
    return (
        <section>
            <h3 style={{ textAlign: "center" }}>Pricing</h3>
            <LabeledContent
                width="12ch"
                label="Admission"
                content="$10 per person per session"
            />
            <LabeledContent
                width="12ch"
                label="Skate Rental"
                content="$5 quads/in-lines"
            />
            <LabeledContent
                width="12ch"
                label="Spectator Fee"
                content="$10 <em>(under 18)</em>"
            />
            <LabeledContent
                width="12ch"
                label="Spectator Fee"
                content="$5 <em>(18 & older)</em>"
            />
        </section>
    );
};
