import "./styles/style.css";
import { ResponsiveSVG } from "./svg/ResponsiveSVG";
import { RollerMagic } from "./svg/RollerMagic";

export const App: React.FC = () => {
    return (
        <div className="test" style={{ textAlign: "center" }}>
            <ResponsiveSVG>
                <RollerMagic />
            </ResponsiveSVG>
            <h1>Hyde Park Roller Magic</h1>
        </div>
    );
};
