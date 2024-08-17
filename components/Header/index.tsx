import "./index.css";
import React, {useState} from 'react';

const Header: React.FC<{icon_url: string, mobile_icon_url: string}> = ({icon_url, mobile_icon_url}) => {
    const [openMobileNav, setOpenMobileNav] = useState(false);

    const toggleNav = () => {
        setOpenMobileNav(!openMobileNav);
    };

    return (
        <>
        <header>
            <a href="/">
            <img id="header-icon" src={icon_url}/>
            </a>
            <h1>ANNIKA CHANG</h1>
                <div className="flex header-links">
                <a href="/">
                    <h2>HOME</h2>
                </a>
                <a href="/#projects">
                    <h2>PROJECTS</h2>
                </a>
                <a href="https://drive.google.com/file/d/1VtuW-hhsUv0IjXBDHn_95ArwE8adfRhT/view?usp=sharing">
                    <h2>RESUME</h2>
                </a>
                <a href="/#contact">
                    <h2>CONTACT ME</h2>
                </a>
            </div>
            <img onClick={toggleNav} id="mobile-icon" src={mobile_icon_url}/>
        </header>
        {openMobileNav && (
        <div className="mobile-nav">
                <a href="/">
                    <h2>HOME</h2>
                </a>
                <a href="/#projects">
                    <h2>PROJECTS</h2>
                </a>
                <a href="https://drive.google.com/file/d/13K9cWarvOr-0B8SRjoluKw7XeR3FU_-f/view?usp=sharing">
                    <h2>RESUME</h2>
                </a>
                <a href="/#contact">
                    <h2>CONTACT ME</h2>
                </a>
        </div>
        )
        }
        </>
    )
};

export default Header;
