import Container from "@/containers/Container";
import facebook from "@/assets/images/facebook.svg";
import x from "@/assets/images/x.svg";
import linkedin from "@/assets/images/linkedin.svg";
import "./Hero.css";
import * as motion from "motion/react-client";

export default function Hero() {
    return (
        <Container name="hero" tag="section" container="2" padding>
            <motion.div
                className="top"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
            >
                <h1 className="title">
                    Designing Team Interactions for an Effective Team
                </h1>
                <div className="social">
                    <p className="social_title">Share on:</p>
                    <img className="social_icon" src={facebook}></img>
                    <img className="social_icon" src={x}></img>
                    <img className="social_icon" src={linkedin}></img>
                </div>
            </motion.div>
            <motion.div
                className="bottom"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            >
                <div className="item">
                    <p className="item_label">Type</p>
                    <div className="u-line -pad-4"></div>
                    <p className="item_text">Article</p>
                </div>
                <div className="item">
                    <p className="item_label">Posted on</p>
                    <div className="u-line -pad-4 "></div>
                    <p className="item_text">01 Jan 2024</p>
                </div>
                <div className="item">
                    <p className="item_label">Read Time</p>
                    <div className="u-line -pad-4"></div>
                    <p className="item_text">3 min</p>
                </div>
                <div className="item">
                    <p className="item_label">Written by</p>
                    <div className="u-line -pad-4"></div>
                    <p className="item_text">Gabriel Veres</p>
                </div>
            </motion.div>
        </Container>
    );
}
