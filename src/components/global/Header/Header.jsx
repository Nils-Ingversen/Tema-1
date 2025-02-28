import Container from "@/containers/Container";
import "./Header.css";
import logo from "@/assets/images/Logo.svg";
import Button from "@/objects/Button";
import ButtonFlip from "@/objects/ButtonFlip";

import NavbarMenu from "@/objects/NavbarMenu";
import { useRef, useState } from "react";

function Header() {
    const navIconRef = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Container name="header" tag="header" container="2" padding>
            <div className="header_group">
                <Button classes="logo" href="/">
                    <img src={logo} alt="logo" className="logo_img" />
                </Button>
                <nav className="link_items">
                    <ButtonFlip classes="item_link" href="/home2">
                        Workshops
                    </ButtonFlip>
                    <ButtonFlip classes="item_link" href="/">
                        Retreats
                    </ButtonFlip>
                    <ButtonFlip classes="item_link" href="/">
                        Contact
                    </ButtonFlip>
                </nav>
                <div
                    className={`mobile_icon ${isOpen ? "open" : ""}`}
                    ref={navIconRef}
                    onClick={handleClick}
                >
                    <NavbarMenu />
                </div>
            </div>
            <div className={`overlay_mobile ${isOpen ? "open" : ""}`}>
                <ButtonFlip classes="item_link" href="/home2">
                    Workshops
                </ButtonFlip>
                <div className="u-line"></div>
                <ButtonFlip classes="item_link" href="/">
                    Retreats
                </ButtonFlip>
                <div className="u-line"></div>
                <ButtonFlip classes="item_link" href="/">
                    Contact
                </ButtonFlip>
            </div>
            <div className={`overlay_bg ${isOpen ? "open" : ""}`}></div>
        </Container>
    );
}

export default Header;
