import React from 'react'
import { HiMail } from "react-icons/hi";
import { HiPhone, HiMapPin } from "react-icons/hi2";
import "../../App.css"

function FirstBar() {
    return (
        <>
            <div className="firstbar navbar navbar-expand-lg">
                <div>
                    <div>
                        <HiPhone />+212 0000-0000
                    </div>
                    <div>
                        <HiMail />contact@dreamshop.com
                    </div>
                    <div>
                        <HiMapPin />Agadir, Maroc
                    </div>
                </div>
                <div>|</div>
                <div>
                    <button>Currency</button>
                    <button>EN</button>
                </div>
            </div>
    </>
    )
}

export default FirstBar