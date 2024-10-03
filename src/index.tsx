import React, { StrictMode, CSSProperties, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { OPEN_HOUR, CLOSE_HOUR } from "./utils/constants";
import "./index.css";

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    // const style: CSSProperties = {
    //     color: "red",
    //     fontSize: "48px",
    //     textTransform: "uppercase",
    // };
    const style = {};

    return (
        <header className="header">
            <h1 style={style}>Pizza Divado CO.</h1>
        </header>
    );
}

function Menu() {
    return (
        <main className="menu">
            <h2>Our menu</h2>
            {pizzaData.map((pd) => (
                <Pizza />
            ))}
        </main>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const isOpen = hour >= OPEN_HOUR && hour <= CLOSE_HOUR;
    console.log(isOpen);

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    }, []);

    return <footer className="footer">{time}. We're currently open!</footer>;
    //return React.createElement("footer", null, "We're currently open");
}

function Pizza() {
    return (
        <>
            <h3>Pizza Spinaci</h3>
            <p>Tomato, mozarella, spinach, and ricotta cheese</p>
            <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
        </>
    );
}

// The way that we render our app in the DOM in react version 18;
const rootElement = document.getElementById("root");

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
        <StrictMode>
            <App />
        </StrictMode>
    );
}

// React before 18
// React.render(<App />);
