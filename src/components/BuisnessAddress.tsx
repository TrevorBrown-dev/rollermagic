interface AddressProps {
    sendMail?: boolean;
}

export const BuisnessAddress: React.FC<
    AddressProps &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = ({ sendMail, ...props }) => {
    const googleMapsLink =
        "https://www.google.com/maps/dir//Hyde+Park+Roller+Magic+Hyde+Park,+NY+12538/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89dd1425eefea6ef:0x2021b30ec1c593ff?sa=X&ved=2ahUKEwjyu6O45_fzAhVSJt8KHWtpCTAQ9Rd6BAhQEAU";
    return (
        <address {...props} style={{ lineHeight: "1em", ...props.style }}>
            <a href={googleMapsLink}>
                <span
                    className="material-icons"
                    style={{
                        verticalAlign: "text-top",
                        color: "#f24242",
                        userSelect: "none",
                        marginRight: ".3ch",
                    }}
                >
                    place
                </span>
                4178 Albany Post Road, Hyde Park, NY 12538
            </a>
            <br />
            <a href="mailto:hprollermagic@gmail.com">
                <span
                    className="material-icons"
                    style={{
                        verticalAlign: "text-top",
                        userSelect: "none",
                        marginRight: ".3ch",
                    }}
                >
                    mail
                </span>
                hprollermagic@gmail.com
            </a>
            <span style={{ margin: "0 1ch" }}>&mdash;</span>
            <a href="tel:+845-229-6666">
                <span
                    className="material-icons"
                    style={{
                        verticalAlign: "text-top",
                        userSelect: "none",
                        marginRight: ".3ch",
                    }}
                >
                    phone
                </span>
                845-229-6666
            </a>
            {sendMail && (
                <>
                    <br />
                    <span>Send all mail to:</span>
                    <br />
                    <span>PO Box 641, Hyde Park, NY 12538</span>
                </>
            )}
        </address>
    );
};
