export const PrivateParties: React.FC = () => {
    const privatePackage = [
        "Skate Rental available for $5 quads or in-lines.",
        "Private catering allowed in facility",
        "Concession Stand is open upon request",
        "Food and beverage pricing listed at the Concession Stand",
        "Additional time may be purchased at the rate of $100/hour",
    ];
    return (
        <div className="private-parties" style={{ width: "45%" }}>
            <h3 style={{ textAlign: "center" }}>Private Parties</h3>
            <p>Planning a special event? Let us do all the work for you!</p>
            <p>
                Enjoy 2 hours of fun with your guests while our live DJ plays
                your favorite tunes. Roller skate or dance the night away under
                our state of the art lighting system.
            </p>
            <p>
                All private parties start at $250 an hour (minimum 2 hours) for
                the first 50 guests and $5 each additional guest. Skate rental,
                food and beverages are not included in the price of package.
            </p>
            <ul style={{ listStyle: "revert" }}>
                {privatePackage.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p style={{ marginTop: "1em", fontSize: "80%" }}>
                Please contact us for a private tour of the facilities or
                further details regarding our parties.
            </p>
        </div>
    );
};
