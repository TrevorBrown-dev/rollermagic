import { BirthdayParties } from "../components/BirthdayParties";
import { BuisnessAddress } from "../components/BuisnessAddress";
import { Hours } from "../components/Hours";
import { ParallaxDiv } from "../components/ParallaxDiv";
import { Pricing } from "../components/Pricing";
import { PrivateParties } from "../components/PrivateParties";
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
            <section className="section lessons center-content">
                <h2 style={{ textAlign: "center" }}>Skate Lessons</h2>
                <p style={{ width: "80%" }}>
                    Must be booked in advance! $50 for 45 minutes. Includes
                    quads or in-lines. Safety gear and open sk8 session after
                    lesson. Group lessons or individual-All ages. Call{" "}
                    <a href="tel:+8452296666">(845) 229-6666</a> or contact{" "}
                    <a href="mailto:hprollermagic@gmail.com">
                        hprollermagic@gmail.com
                    </a>
                </p>
            </section>
            <section className="section parties center-content">
                <div
                    className="test"
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                    }}
                >
                    <BirthdayParties style={{ marginBottom: "2em" }} />
                    <div
                        style={{
                            minHeight: "40ch",
                            borderRight: "2px dashed white",
                            marginLeft: "2em",
                            marginRight: "2.5em",
                        }}
                    ></div>
                    <PrivateParties />
                </div>
                <div
                    style={{
                        fontSize: "80%",
                        marginTop: "2em",
                        width: "70%",
                    }}
                >
                    A <em>Semi private area</em> is available for an additional
                    $50 to either package and provides a more private space and
                    option of bringing your own cake.
                </div>
            </section>
        </main>
    );
};
