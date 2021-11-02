export const BirthdayParties: React.FC<
    React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    >
> = ({ style, ...props }) => {
    const silverPackage = [
        "Free Admission to Roller Magic for each guest",
        "Quad/In-line Skate Rentals",
        "Choice of chicken nuggets, pizza or hot dog",
        "Choice of Soda or Pink Lemonade",
        "Popcorn",
        "Cupcakes",
        "Paper goods",
        "$210.00 for the first 10 guests and $21 for each additional guest",
    ];

    const goldPackage = [
        "Everything from the Silver Package",
        "Goody Bag & Glow bracelet for each guest",
        "Free Admission Pass for future visit for each guest $8 value",
        "$240.00 for 10 guests $24 each additional guest",
    ];
    return (
        <div
            className="birthday-parties"
            style={{ width: "45%", ...style }}
            {...props}
        >
            <h2 style={{ textAlign: "center" }}>Birthday Parties</h2>
            <p>Come celebrate your birthday with our Rink Mascot Roo!</p>
            <p>
                Enjoy 2 hours of skating fun with our mascot Roo the Roller
                Skating Kangaroo! Let us take care of your party without the
                clean-up.
            </p>
            <strong style={{ fontSize: "70%" }}>
                *10 person minimum for all Party Packages.
            </strong>
            <br />
            <h4 style={{ textAlign: "center", marginTop: "1em" }}>
                Silver Package
            </h4>
            <ul style={{ listStyle: "revert" }}>
                {silverPackage.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h4 style={{ textAlign: "center", marginTop: "1em" }}>
                Gold Package
            </h4>
            <div style={{ textAlign: "center", fontSize: "70%" }}>
                <em>($3 more per guest)</em>
            </div>
            <ul style={{ listStyle: "revert" }}>
                {goldPackage.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};
