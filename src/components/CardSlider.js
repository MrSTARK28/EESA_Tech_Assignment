import React from "react";
import events from '../assets/event.png';

export default function CardSlider() {
    return (
    <div class="carousel-item">
        <img src={events} alt="Los Angeles"/>
            <div class="carousel-caption">
                <h3>Los Angeles</h3>
                <p>We had such a great time in LA!</p>
            </div>
    </div>
    )
}