import { BuisnessAddress } from "../components/BuisnessAddress";
import { Hours } from "../components/Hours";
import { ParallaxDiv } from "../components/ParallaxDiv";
import { Pricing } from "../components/Pricing";
import img from "../media/skating.webp";
import { ResponsiveSVG } from "../svg/ResponsiveSVG";
import { RollerMagic } from "../svg/RollerMagic";
export const Home: React.FC = () => {
    return (
        <main className="home" style={{ paddingTop: "1em" }}>
            <header className="hero" style={{ textAlign: "center" }}>
                <ResponsiveSVG width={"min(40em, 80%)"}>
                    <RollerMagic />
                </ResponsiveSVG>
                <h1>Hyde Park Roller Magic</h1>
                <BuisnessAddress
                    style={{ fontSize: "80%", marginBottom: "1em" }}
                />
            </header>
            <ParallaxDiv
                image={img}
                gradient={["#ff66cc", "#000000", 70]}
                className="section pricing center-content"
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                }}
                id="pricing"
            >
                <Hours
                    days={["Wednesday", "Friday", "Saturday", "Sunday"]}
                    hours={[
                        "7:30-10:30pm <em>(18 & older)</em>",
                        "7:30-10:30pm",
                        "1-4:30pm & 7:30 - 11:00pm",
                        "1-4:30pm",
                    ]}
                />
                <Pricing />
            </ParallaxDiv>
        </main>
    );
};
