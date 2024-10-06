import React from "react";

type PizzaProps = {
    name: string;
    photoName: string;
    ingredients: string;
    price: number;
    soldOut: boolean;
};

export function Pizza({
    photoName,
    ingredients,
    name,
    price,
    soldOut,
}: PizzaProps) {
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
