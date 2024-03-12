import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react';

import './App.css';

const Gototop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="top-to-btm">
            {" "}
            {showTopBtn && (
                <span className="icon-position icon-style"  onClick={goToTop} ><FontAwesomeIcon icon={faArrowUp} /></span>
            )}{" "}
        </div>
    );
};
export default Gototop;