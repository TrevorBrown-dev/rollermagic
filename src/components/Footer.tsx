import { BuisnessAddress } from "./BuisnessAddress";

export const Footer: React.FC = () => {
    return (
        <footer style={{ textAlign: "center", padding: "1em" }}>
            <BuisnessAddress sendMail={true} style={{ fontSize: "70%" }} />
        </footer>
    );
};
