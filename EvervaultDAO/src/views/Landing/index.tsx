import "./landing.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import InfoBar from "./components/InfoBar";
import Treasury from "./components/Treasury";
import Investment from "./components/Investment";
import Footer from "./components/Footer";

function Landing() {
    return (
        <div className="landing">
            <div className="landing-hero">
                <Header />
                <Main />
            </div>
            <InfoBar />
            <Treasury />
            <Investment />
            <Footer />
        </div>
    );
}

export default Landing;
