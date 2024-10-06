import React from "react";
import { CLOSE_HOUR, OPEN_HOUR } from "../utils/constants";
import { Order } from "./Order";

export function Footer() {
    const hour = new Date().getHours();
    const isOpen = hour >= OPEN_HOUR && hour <= CLOSE_HOUR;

    return (
        <footer className="footer">
            <Order isOpen={isOpen} />
        </footer>
    );
    //return React.createElement("footer", null, "We're currently open");
}
