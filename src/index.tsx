import React, { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { OPEN_HOUR, CLOSE_HOUR } from "./utils/constants";
import "./index.css";

type PizzaObj = {
    name: string;
    ingredients: string;
    price: number;
    photoName: string;
    soldOut: boolean;
};

const pizzaData: PizzaObj[] = [
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
        <header className="header footer">
            <h1 style={style}>Pizza Divado CO.</h1>
        </header>
    );
}

function Menu() {
    const pizzas = pizzaData;
    //const pizzas: PizzaObj[] = [];
    const numPizzas = pizzas.length;

    return (
        <main className="menu">
            <h2>Our menu</h2>
            {numPizzas > 0 ? (
                <>
                    <p>
                        Authentic Italian cuisine. 6 creative dishes to choose
                        from. All from our stone over, all organic, all
                        delicious.
                    </p>
                    <ul className="pizzas">
                        {pizzas.map((pz) => {
                            return <Pizza key={pz.name} {...pz} />;
                        })}
                    </ul>
                </>
            ) : (
                <p>
                    We're still working on our menu. Please come back later :)
                </p>
            )}
        </main>
    );
}

type PizzaProps = {
    name: string;
    photoName: string;
    ingredients: string;
    price: number;
    soldOut: boolean;
};

function Pizza({ photoName, ingredients, name, price, soldOut }: PizzaProps) {
    return (
        <li className={`pizza${soldOut ? " sold-out" : ""}`}>
            <img src={photoName} alt={name} />
            <div>
                <h3>{name}</h3>
                <p>{ingredients}</p>

                {/* {soldOut ? <span>SOLD OUT</span> : <span>{price}</span>} */}

                <span>{soldOut ? "SOLD OUT" : price}</span>
            </div>
        </li>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const isOpen = hour >= OPEN_HOUR && hour <= CLOSE_HOUR;

    return (
        <footer className="footer">
            <Order isOpen={isOpen} />
        </footer>
    );
    //return React.createElement("footer", null, "We're currently open");
}

type OrderProps = {
    isOpen: boolean;
};

function Order({ isOpen }: OrderProps) {
    return (
        <div className="order">
            {isOpen ? (
                <p>
                    {<CurrentTime />} We're open until {CLOSE_HOUR}:00! Come
                    visit us or order online.
                </p>
            ) : (
                <p>
                    {<CurrentTime />} We're currently closed until {OPEN_HOUR}
                    :00!
                </p>
            )}
            <button
                disabled={!isOpen}
                className={`btn ${isOpen ? "" : "disabled"}`}
            >
                Order
            </button>
        </div>
    );
}

function CurrentTime() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    }, []);

    return <>{time}</>;
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
