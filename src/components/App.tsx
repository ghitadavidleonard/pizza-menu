import React from "react";
import { Header } from "./Header";
import { Menu } from "./Menu";
import { Footer } from "./Footer";
import "../index.css";

export function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}
