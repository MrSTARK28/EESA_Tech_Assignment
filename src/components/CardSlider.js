import React from "react";
import './CardSlider.css';

export default function CardSlider() {
    const data = [
        {
            eventname: "Event Name",
            img: 'events.jpeg',
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.",
        },
        {
            eventname: "Event Name",
            img: 'events.jpeg',
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.",
        },
        {
            eventname: "Event Name",
            img: 'events.jpeg',
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.",
        },
        {
            eventname: "Event Name",
            img: 'events.jpeg',
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.",
        },
        {
            eventname: "Event Name",
            img: 'events.jpeg',
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.",
        },
        {
            eventname: "Event Name",
            img: 'events.jpeg',
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.",
        },
    ]
    return (
        <div className="S1">
            <div className="S2">
                {data.map((d) =>(
                    <div className="C1">
                        <div className="C2">
                            <img src="d.img" alt=""/>
                        </div>
                        <div className="C3">
                            <p>{d.eventname}</p>
                            <p>{d.info}</p>
                            <button>Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}