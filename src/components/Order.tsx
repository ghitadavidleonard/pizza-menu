import React from "react";
import { CLOSE_HOUR, OPEN_HOUR } from "../utils/constants";
import { CurrentTime } from "./CurrentTime";

type OrderProps = {
    isOpen: boolean;
};

export function Order({ isOpen }: OrderProps) {
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
