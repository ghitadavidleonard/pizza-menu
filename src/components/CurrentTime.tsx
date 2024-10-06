import React from "react";
import { useEffect, useState } from "react";

export function CurrentTime() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    }, []);

    return <>{time}</>;
}
