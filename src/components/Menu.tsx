import React from "react";
import { pizzaData } from "../data/data";
import { Pizza } from "./Pizza";

export function Menu() {
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
