import React from "react";
import '../App.css';
import logo from '../assets/eesa_logo.png';


export default function Nav() {
    return (
            <>
            <div className="Parent">
                <div >
                    <img className="logo" src={logo} alt="."/>
                </div>
                <div className="Child">Home</div>
                <div className="Child">Blog</div>
                <div className="Child">Activities</div>
                <div className="Child">People</div>
                <div className="Child">Form</div>
                <div className="Child">IMP Docs</div>
            </div>
            </>
            );
}