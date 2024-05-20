import React from "react";
import '../App.css';
import logo from '../assets/eesa_logo.png';
import { Link } from "react-router-dom";

export default function Nav() {
    return (
            <>
            <div className="Parent">
                <div >
                    <Link to="../App">
                    <img className="logo" src={logo} alt="."/>
                    </Link>
                </div>
                <div className="Child">
                    <Link to="../App">Home</Link></div>
                <div className="Child">
                    <Link to="../blogs">Blog</Link></div>
                <div className="Child">People</div>
                <div className="Child">IMP Docs</div>
            </div>
            </>
            );
}