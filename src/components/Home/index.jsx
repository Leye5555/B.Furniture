import React from "react";
import Hero from "../Hero";
import Navigation from "../Navigation";
import "./style.scss";

export default function Home() {
    return (
        <div className="container">
            <Navigation />
            <main>
                <Hero />
            </main>
        </div>
    )
}