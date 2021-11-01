const left: React.CSSProperties = {
    display: "inline-block",
    textAlign: "right",
    width: "11ch",
    marginRight: ".5em",
    fontWeight: "bold",
};
export const Pricing: React.FC = () => {
    return (
        <section>
            <h3 style={{ textAlign: "center" }}>Pricing</h3>
            <div className="price">
                <span style={left}>Admission: </span>
                <span>$10 per person per session</span>
            </div>

            <div className="price">
                <span style={left}>Skate Rental: </span>
                <span>$5 quads/in-lines</span>
            </div>
            <div className="price">
                <span style={left}>Spectator fee:</span>
                <span>
                    $10 <em>(under 18)</em>
                </span>
            </div>
            <div className="price">
                <span style={left}>Spectator fee:</span>
                <span>
                    $5 <em>(18 & older)</em>
                </span>
            </div>
        </section>
    );
};
