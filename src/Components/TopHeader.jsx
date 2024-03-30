import React, { useState, useEffect } from 'react';
import logo from "../assets/lejhro_logo_blue.png";

const TopHeader = () => {
    const [showHeader, setShowHeader] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 200) {
                setShowHeader(true);
            } else {
                setShowHeader(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!showHeader) {
        return null;
    }

    return (
        <div style={{
            alignItems: "center",
            backgroundColor: "#fdfdfd",
            boxShadow: "0 0 5px #3a3632",
            display: "flex",
            height: "60px",
            justifyContent: "space-between",
            left: "0",
            padding: "0 13.02vw",
            margin: "0 auto",
            position: "fixed",
            top: "0",
            width: "100%",
            zIndex: "4000"
        }}>
            <a href="/" aria-label="HomePage">
                <img src={logo} alt="Lejhro Blue Logo" className="top-fixed-header-fixed-logo" style={{ width: "100%", height: "30px" }} ></img>
            </a>
            <div className="top-fixed-header-container">
                <div className="top-fixed-header-contact-div paragraph-small-text">
                    <a href="https://www.lejhro.com/contact-us">
                        <span>Let's Talk</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TopHeader;